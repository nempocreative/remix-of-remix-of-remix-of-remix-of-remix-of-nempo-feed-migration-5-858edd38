import { describe, expect, it } from 'vitest';
import {
  NEMPO_STORY_CLEAR_BOX,
  NEMPO_STORY_CLEAR_KEEP,
  NEMPO_STORY_EXPORT,
  nempoStoryToday,
} from './nempo-story-today';

describe('NEMPO Story "Today" cover', () => {
  it('shows the owner’s copy word for word', () => {
    expect(nempoStoryToday.headline).toBe('Today');
    expect(nempoStoryToday.venue).toBe('Good Story Cafe');
    expect(nempoStoryToday.act).toEqual({ left: 'BAJIDORAN', joiner: 'x', right: 'Dj' });
  });
  it('is dated for the Bajidoran & DJ night, Jumat 20 November 2026', () => {
    const { date } = nempoStoryToday;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(date.iso).toBe('2026-11-20');
  });
  it('exports as a 9:16 story PNG', () => {
    expect(NEMPO_STORY_EXPORT.width / NEMPO_STORY_EXPORT.height).toBeCloseTo(9 / 16, 6);
    expect(NEMPO_STORY_EXPORT).toEqual({ width: 3240, height: 5760 });
  });
  it('keeps the transparent middle inside the story and wide enough to cover the stage', () => {
    const box = NEMPO_STORY_CLEAR_BOX;
    expect(box.left + box.width).toBeLessThanOrEqual(100);
    expect(box.top + box.height).toBeLessThanOrEqual(100);
    expect(box.width).toBeGreaterThanOrEqual(70);
    expect(box.height).toBeGreaterThanOrEqual(40);
  });
  it('keeps the frame, lamps and logos when exporting the transparent middle', () => {
    expect(NEMPO_STORY_CLEAR_KEEP).toContain('.nar-frame');
    expect(NEMPO_STORY_CLEAR_KEEP).toContain('.nar-lamp');
    expect(NEMPO_STORY_CLEAR_KEEP).toContain('.kmt-logo');
    expect(NEMPO_STORY_CLEAR_KEEP).toContain('.nar-saduli');
    expect(NEMPO_STORY_CLEAR_KEEP).toContain('.nar-gsc');
  });
});
