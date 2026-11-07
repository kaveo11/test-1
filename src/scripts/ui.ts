// Light interactions: reveal on scroll, accordion, dropdown, mobile menu,
// floor gauge, method finder, modal, cookie consent, compare slider, WhatsApp forms.
import { initPexels } from './pexels';

const qs = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const qsa = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

let scrollHandler: (() => void) | null = null;

function reveal() {
  const els = qsa('.reveal');
  if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'));
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  els.forEach((e) => io.observe(e));
}

function accordions() {
  qsa('[data-acc] .acc-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item')!;
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
}

function nav() {
  const toggle = qs('#nav-toggle');
  const panel = qs('#nav-panel');
  toggle?.addEventListener('click', () => {
    const open = panel!.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('no-scroll', open);
  });
  const dd = qs('.dd');
  const ddBtn = qs('.dd-btn');
  ddBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = dd!.classList.toggle('open');
    ddBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e) => {
    if (dd && !dd.contains(e.target as Node)) {
      dd.classList.remove('open');
      ddBtn?.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dd?.classList.remove('open');
      ddBtn?.setAttribute('aria-expanded', 'false');
    }
  });
  const header = qs('#site-header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function floorGauge() {
  const gauge = qs('#floor-gauge');
  if (!gauge) return;
  const label = qs('.fg-n', gauge)!;
  const fill = qs('.fg-fill', gauge)!;
  const TOTAL = 80; // floors on the gauge, ground to roof
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    label.textContent = p < 0.01 ? 'G' : String(Math.max(1, Math.round(p * TOTAL)));
    fill.style.transform = `scaleY(${p})`;
  };
  update();
  scrollHandler = update;
  window.addEventListener('scroll', update, { passive: true });
}

function methodFinder() {
  const root = qs('#method-finder');
  if (!root) return;
  const range = qs<HTMLInputElement>('#mf-floors', root)!;
  const bmu = qs<HTMLInputElement>('#mf-bmu', root)!;
  const out = {
    floors: qs('#mf-floors-out', root)!,
    meters: qs('#mf-meters', root)!,
    title: qs('#mf-title', root)!,
    text: qs('#mf-text', root)!,
    link: qs<HTMLAnchorElement>('#mf-link', root)!,
    bar: qs('#mf-bar', root)!,
  };
  const render = () => {
    const f = Number(range.value);
    const m = Math.round(f * 3.6);
    out.floors.textContent = String(f);
    out.meters.textContent = String(m);
    out.bar.style.setProperty('--h', `${(f / 80) * 100}%`);
    let r = { title: 'Water-fed pole', text: 'Carbon poles reach about 20 m from the ground. No ropes or platforms needed.', href: '/services/villa-low-rise' };
    if (m > 20) {
      r = bmu.checked
        ? { title: 'BMU / gondola', text: 'Your installed cradle can be used if it has a valid inspection. We check it before work.', href: '/services/bmu-gondola' }
        : { title: 'Rope access', text: 'Above about 20 m with no working cradle, two IRATA technicians descend on paired ropes.', href: '/services/rope-access' };
    }
    out.title.textContent = r.title;
    out.text.textContent = r.text;
    out.link.href = r.href;
  };
  range.addEventListener('input', render);
  bmu.addEventListener('change', render);
  render();
}

function modal() {
  const dlg = qs<HTMLDialogElement>('#quote-modal');
  if (!dlg) return;
  qsa('[data-open-quote]').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      if (!dlg.open) dlg.showModal();
    }),
  );
  qsa('[data-close-quote]', dlg).forEach((b) => b.addEventListener('click', () => dlg.close()));
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
}

function whatsappForms() {
  qsa<HTMLFormElement>('form[data-wa]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const lines = ['Hello, I would like a façade cleaning quote.'];
      const map: [string, string][] = [
        ['name', 'Name'],
        ['building', 'Building'],
        ['floors', 'Floors'],
        ['area', 'Location'],
        ['message', 'Notes'],
      ];
      map.forEach(([k, label]) => {
        const v = String(d.get(k) ?? '').trim();
        if (v) lines.push(`${label}: ${v}`);
      });
      const phone = form.dataset.wa!;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    });
  });
}

function cookies() {
  const bar = qs('#cookie');
  if (!bar) return;
  let choice: string | null = null;
  try {
    choice = localStorage.getItem('sheer:cookie');
  } catch {
    /* ignore */
  }
  if (choice) return bar.setAttribute('hidden', '');
  bar.removeAttribute('hidden');
  qsa('[data-cookie]', bar).forEach((b) =>
    b.addEventListener('click', () => {
      try {
        localStorage.setItem('sheer:cookie', b.dataset.cookie!);
      } catch {
        /* ignore */
      }
      bar.setAttribute('hidden', '');
    }),
  );
}

function compare() {
  qsa('.compare').forEach((c) => {
    const range = qs<HTMLInputElement>('input[type=range]', c)!;
    const set = () => c.style.setProperty('--pos', `${range.value}%`);
    range.addEventListener('input', set);
    set();
  });
}

export function initUI() {
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
  document.documentElement.classList.add('js');
  reveal();
  accordions();
  nav();
  floorGauge();
  methodFinder();
  modal();
  whatsappForms();
  cookies();
  compare();
  initPexels();
}
