// All Pexels search keywords live here, not in markup.
// One request is made per unique (kind + query); results are reused by index.
export const media = {
  heroVideo: { kind: 'video', query: 'skyscraper glass facade', orientation: 'landscape' },
  workVideo: { kind: 'video', query: 'window cleaner skyscraper', orientation: 'landscape' },
  aboutVideo: { kind: 'video', query: 'dubai skyline aerial', orientation: 'landscape' },

  glassTower: { kind: 'photo', query: 'glass skyscraper minimal', orientation: 'portrait' },
  glassTowerWide: { kind: 'photo', query: 'glass skyscraper minimal', orientation: 'landscape' },
  skyline: { kind: 'photo', query: 'dubai skyline', orientation: 'landscape' },
  ropeAccess: { kind: 'photo', query: 'rope access technician building', orientation: 'portrait' },
  gondola: { kind: 'photo', query: 'window washer skyscraper', orientation: 'landscape' },
  villa: { kind: 'photo', query: 'modern villa exterior glass', orientation: 'landscape' },
  construction: { kind: 'photo', query: 'new office building facade', orientation: 'landscape' },
  detail: { kind: 'photo', query: 'glass curtain wall detail', orientation: 'landscape' },
  desert: { kind: 'photo', query: 'dubai desert dust', orientation: 'landscape' },
  team: { kind: 'photo', query: 'safety harness workers', orientation: 'landscape' },
} as const;

export type MediaSpec = (typeof media)[keyof typeof media];
