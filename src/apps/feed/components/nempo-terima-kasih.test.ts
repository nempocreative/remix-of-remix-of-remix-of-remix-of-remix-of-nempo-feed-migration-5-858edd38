import { describe, expect, it } from 'vitest';
import { weekdayId } from './nempo-bajidoran';
import { NEMPO_TERIMA_KASIH_SLIDE, NTE_LOOP_SECONDS, nempoTerimaKasih } from './nempo-terima-kasih';

describe('NEMPO after-event thank-you slide', () => {
  it('is the slide after "Hari Ini" (53)', () => {
    expect(NEMPO_TERIMA_KASIH_SLIDE).toBe(53);
  });
  it('thanks guests for last night: Jumat, 20 November 2026 at Good Story Cafe', () => {
    const { date, venue } = nempoTerimaKasih;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(weekdayId(date.iso)).toBe('Jumat');
    expect(venue.name).toBe('Good Story Cafe');
  });
  it('shows all five event photos, 3 s each, in a 15 s loop', () => {
    expect(nempoTerimaKasih.moments).toHaveLength(5);
    expect(new Set(nempoTerimaKasih.moments.map((m) => m.photo)).size).toBe(5);
    expect(NTE_LOOP_SECONDS).toBe(15);
  });
});
