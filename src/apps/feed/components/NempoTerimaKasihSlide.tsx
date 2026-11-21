import type { CSSProperties, RefObject } from 'react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import penariSinden from '@/assets/nempo-feed-53/nempo-feed-53-1-penari-sinden.jpg.asset.json';
import sinden from '@/assets/nempo-feed-53/nempo-feed-53-2-sinden.jpg.asset.json';
import penariTertawa from '@/assets/nempo-feed-53/nempo-feed-53-3-penari-tertawa.jpg.asset.json';
import penariPeace from '@/assets/nempo-feed-53/nempo-feed-53-4-penari-peace.jpg.asset.json';
import djCrowd from '@/assets/nempo-feed-53/nempo-feed-53-5-dj-crowd.jpg.asset.json';
import { nempoTerimaKasih as T, NTE_LOOP_SECONDS, NTE_SECONDS_PER_MOMENT } from './nempo-terima-kasih';
import './NempoTerimaKasihSlide.css';

const PHOTOS = {
  penariSinden: { src: penariSinden.url, w: 1080, h: 1920, alt: 'Penari Bajidoran dan sinden di panggung Good Story Cafe' },
  sinden: { src: sinden.url, w: 1440, h: 1920, alt: 'Sinden bernyanyi di depan layar Good Story Cafe' },
  penariTertawa: { src: penariTertawa.url, w: 1080, h: 1920, alt: 'Penari Bajidoran tertawa sambil menari' },
  penariPeace: { src: penariPeace.url, w: 1440, h: 1920, alt: 'Tiga penari berpose peace di depan panggung' },
  djCrowd: { src: djCrowd.url, w: 1440, h: 1920, alt: 'Penonton berjoget saat DJ tampil' },
} as const;

/**
 * NEMPO Feed slide 53 (3:4): after-event thank-you. The five event photos crossfade with a slow
 * Ken Burns move, each with its own caption, under a fixed "Hatur Nuhun!" block. Everything is CSS
 * animation on one 15 s loop so the prebuilt MP4 can be recorded by time-stepping the preview.
 */
export function NempoTerimaKasihSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { eyebrow, headline, body, closing, title, partner, date, venue, talent, moments } = T;
  const timing = { '--nte-loop': `${NTE_LOOP_SECONDS}s`, '--nte-step': `${NTE_SECONDS_PER_MOMENT}s` } as CSSProperties;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nte-root kmt-root"
      style={timing}
      aria-label={`${headline.lead} ${headline.accent} ${body} ${title} & ${partner}, ${date.weekday} ${date.day} ${date.month} ${date.year} di ${venue.name}.`}
    >
      <div className="nte-photos">
        {moments.map((m, i) => {
          const p = PHOTOS[m.photo];
          return (
            <span key={m.photo} className={`nte-photo nte-photo--${i}`}>
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} draggable={false} />
            </span>
          );
        })}
      </div>
      <span className="nte-shade" aria-hidden="true" />

      <header className="kmt-header nte-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nte-partners">
          <img className="nte-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nte-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nte-bottom">
        <div className="nte-captions" aria-hidden="true">
          {moments.map((m, i) => (
            <span key={m.photo} className="nte-caption" style={{ '--i': i } as CSSProperties}>
              <span className="nte-dot" />{m.caption}
            </span>
          ))}
        </div>
        <p className="nte-eyebrow">{eyebrow}</p>
        <h2 className="nte-headline">{headline.lead} <em>{headline.accent}</em></h2>
        <p className="nte-body">{body}</p>
        <p className="nte-closing">{closing} <span aria-hidden="true">✦</span></p>
        <p className="nte-meta">
          {title} &amp; {partner} · {talent.dancers} × {talent.dj} · {date.weekday}, {date.day} {date.month} {date.year}
        </p>
      </div>
    </section>
  );
}
