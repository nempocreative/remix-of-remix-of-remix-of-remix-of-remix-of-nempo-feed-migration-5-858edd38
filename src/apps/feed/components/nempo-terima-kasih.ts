import { nempoBajidoran } from './nempo-bajidoran';
import { nempoSaduliDj } from './nempo-saduli-dj';

/**
 * NEMPO Feed slide 53 — after-event thank-you video for last night's Bajidoran & DJ at Good Story Cafe:
 * the owner's five event photos crossfade (one caption each) under a fixed "Hatur Nuhun!" message.
 */
export const NEMPO_TERIMA_KASIH_SLIDE = 53;

/** Seconds each photo leads the frame; the loop is every moment back to back. */
export const NTE_SECONDS_PER_MOMENT = 3;

export const nempoTerimaKasih = {
  eyebrow: 'Semalam di Good Story Cafe',
  headline: { lead: 'Hatur', accent: 'Nuhun!' },
  body: 'Terima kasih sudah hadir, goyang, dan enjoy bareng kami tadi malam. Kalian yang bikin malam itu hidup!',
  closing: 'Sampai ketemu di malam seru berikutnya',
  title: nempoBajidoran.title,
  partner: nempoBajidoran.partner,
  date: nempoBajidoran.date,
  venue: nempoBajidoran.venue,
  talent: nempoSaduliDj.talent,
  /** In playback order; `photo` keys match the slide's imported photos. */
  moments: [
    { photo: 'penariSinden', caption: 'Kendang ditabuh, panggung langsung hidup' },
    { photo: 'sinden', caption: 'Suara sinden yang bikin merinding' },
    { photo: 'penariTertawa', caption: 'Tawa lepas di setiap goyangan' },
    { photo: 'penariPeace', caption: 'Senyum kalian, energi kami' },
    { photo: 'djCrowd', caption: 'Lalu DJ ambil alih, lantai dansa pecah!' },
  ],
} as const;

export const NTE_LOOP_SECONDS = nempoTerimaKasih.moments.length * NTE_SECONDS_PER_MOMENT;
