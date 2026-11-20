/** NEMPO Story 01 — "Today" story cover on slide 52's stage frame (owner's copy, word for word). */
export const nempoStoryToday = {
  headline: 'Today',
  venue: 'Good Story Cafe',
  act: { left: 'BAJIDORAN', joiner: 'x', right: 'Dj' },
  /** Story cover is dated: today, the day of the night, in Indonesian weekday style. */
  date: {
    weekday: 'Jumat',
    day: '20',
    month: 'November',
    year: '2026',
    iso: '2026-11-20',
  },
} as const;

/** Prebuilt PNGs are captured from the preview at 1080 CSS px × 3. */
export const NEMPO_STORY_EXPORT = { width: 3240, height: 5760 } as const;

/**
 * The frame's open middle, as fractions of the story's own width (cqw) and height (cqh).
 * The export paints this box transparent so the PNG can be stacked over any video.
 * Tuned from the rendered page: the truss opening spans ~12–88cqw wide, ~29–81cqh tall.
 */
export const NEMPO_STORY_CLEAR_BOX = {
  left: 12,
  top: 30,
  width: 76,
  height: 46,
} as const;

/**
 * The clear export keeps only the frame, its lamps and the two logo rows on transparent
 * ground: every layer outside this list is hidden while the PNG is captured.
 */
export const NEMPO_STORY_CLEAR_KEEP = [
  '.nar-frame',
  '.nar-lamp',
  '.kmt-logo',
  '.kmt-name',
  '.nar-saduli',
  '.nar-gsc',
] as const;
