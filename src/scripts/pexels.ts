// Pexels loader.
// - key comes from PUBLIC_PEXELS_KEY (build-time env), never hard-coded
// - one request per unique (kind + query + orientation); results reused by index
// - localStorage cache with TTL, plus short negative cache after failures
// - lazy: only runs when a .media element nears the viewport
// - fallback: solid colour (CSS --fallback) if no key, request fails, or limit hit

const KEY: string | undefined = import.meta.env.PUBLIC_PEXELS_KEY;
const TTL = 1000 * 60 * 60 * 24; // 24 h
const FAIL_TTL = 1000 * 60 * 10; // 10 min
const BLOCK_TTL = 1000 * 60 * 60; // 1 h after a 429
const PREFIX = 'sheer:px:';

type Item = { src: string; poster?: string; alt?: string };

const inflight = new Map<string, Promise<Item[]>>();

function read<T>(k: string): { t: number; d: T } | null {
  try {
    const raw = localStorage.getItem(PREFIX + k);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function write(k: string, d: unknown) {
  try {
    localStorage.setItem(PREFIX + k, JSON.stringify({ t: Date.now(), d }));
  } catch {
    /* storage full or blocked: ignore */
  }
}

function blocked(): boolean {
  const b = read<number>('blocked');
  return !!b && Date.now() - b.t < BLOCK_TTL;
}

async function request(kind: string, query: string, orientation: string): Promise<Item[]> {
  if (!KEY || blocked()) return [];
  const base = kind === 'video' ? 'https://api.pexels.com/videos/search' : 'https://api.pexels.com/v1/search';
  const url = `${base}?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=12&size=medium`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (res.status === 429) {
    write('blocked', Date.now());
    return [];
  }
  if (!res.ok) throw new Error(String(res.status));
  const json = await res.json();
  if (kind === 'video') {
    return (json.videos ?? [])
      .map((v: any) => {
        const files = (v.video_files ?? []).filter((f: any) => f.file_type === 'video/mp4');
        const pick =
          files.find((f: any) => f.width >= 1280 && f.width <= 1920) ??
          files.sort((a: any, b: any) => (b.width ?? 0) - (a.width ?? 0))[0];
        return pick ? { src: pick.link, poster: v.image } : null;
      })
      .filter(Boolean);
  }
  return (json.photos ?? []).map((p: any) => ({
    src: orientation === 'portrait' ? p.src.large : p.src.large2x,
    alt: p.alt || query,
  }));
}

function getItems(kind: string, query: string, orientation: string): Promise<Item[]> {
  const key = `${kind}:${query}:${orientation}`;
  const cached = read<Item[]>(key);
  if (cached && Date.now() - cached.t < (cached.d.length ? TTL : FAIL_TTL)) {
    return Promise.resolve(cached.d);
  }
  if (!inflight.has(key)) {
    inflight.set(
      key,
      request(kind, query, orientation)
        .then((items) => {
          write(key, items);
          return items;
        })
        .catch(() => {
          write(key, []);
          return [] as Item[];
        }),
    );
  }
  return inflight.get(key)!;
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

async function hydrate(el: HTMLElement) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const { kind = 'photo', query = '', orientation = 'landscape', index = '0' } = el.dataset;
  const items = await getItems(kind, query, orientation);
  if (!items.length) return; // fallback colour stays
  const item = items[Number(index) % items.length];

  if (kind === 'video') {
    const v = document.createElement('video');
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = 'metadata';
    if (item.poster) v.poster = item.poster;
    v.setAttribute('aria-hidden', 'true');
    v.src = item.src;
    v.addEventListener('loadeddata', () => el.classList.add('is-loaded'), { once: true });
    el.appendChild(v);
    if (!reduceMotion()) v.play().catch(() => {});
    else el.classList.add('is-loaded');
  } else {
    const img = new Image();
    img.alt = el.dataset.alt || item.alt || '';
    img.decoding = 'async';
    img.addEventListener('load', () => el.classList.add('is-loaded'), { once: true });
    img.src = item.src;
    el.appendChild(img);
  }
}

export function initPexels() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.media[data-query]'));
  if (!('IntersectionObserver' in window)) {
    els.forEach(hydrate);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          io.unobserve(e.target);
          hydrate(e.target as HTMLElement);
        }
      });
    },
    { rootMargin: '500px 0px' },
  );
  els.forEach((el) => io.observe(el));
}
