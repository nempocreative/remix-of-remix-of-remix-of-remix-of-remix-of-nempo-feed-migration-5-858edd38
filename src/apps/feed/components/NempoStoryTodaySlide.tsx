import type { RefObject } from 'react';
import { MapPin } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import bgImage from '@/assets/nempo-feed-slide-50-bg.jpg';
// Same ribbon-free truss frame as NEMPO Feed slide 52.
import frameAsset from '@/assets/nempo-feed-52-stage-frame-no-ribbons.webp.asset.json';
import { nempoStoryToday as P } from './nempo-story-today';
import { STAGE_LAMPS, STAGE_SPOTS, stageLightStyle } from './nempo-stage-lights';
import './NempoAjakRequestSlide.css';
import './NempoStoryTodaySlide.css';

/**
 * NEMPO Story 01: 9:16 story cover — slide 52's green stage with the truss frame centred, "Today",
 * Good Story Cafe and BAJIDORAN x Dj inside the frame. Static (no animation) so the PNG matches the preview.
 * `clear` hides the backdrop so the frame's middle exports transparent.
 */
export function NempoStoryTodaySlide({ exportRef, clear = false }: { exportRef?: RefObject<HTMLElement | null>; clear?: boolean }) {
  const { headline, venue, act } = P;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nar-root nst-root kmt-root${clear ? ' nst-root--clear' : ''}`}
      aria-label={`${headline} — ${venue} — ${act.left} ${act.joiner} ${act.right}`}
    >
      <img className="nar-bg nst-bg" src={bgImage} alt="" aria-hidden="true" width={1088} height={1440} draggable={false} />
      <span className="nar-beams nst-backdrop" aria-hidden="true" />
      <span className="nst-glow nst-backdrop" aria-hidden="true" />

      <div className="nst-stage">
        <span className="nar-spots nst-backdrop" aria-hidden="true">
          {STAGE_SPOTS.map((l, i) => (
            <span key={i} className={`nar-beam nar-beam--${l.tone}`} style={stageLightStyle(l)} />
          ))}
        </span>
        <img className="nar-frame" src={frameAsset.url} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
        <span className="nar-lamps" aria-hidden="true">
          {STAGE_LAMPS.map((l, i) => (
            <span key={i} className={`nar-lamp nar-lamp--${l.tone}`} style={stageLightStyle(l)} />
          ))}
        </span>

        <div className="nst-copy">
          <h2 className="nst-headline" data-text={headline}>{headline}</h2>
          <p className="nst-venue">
            <span className="nst-venue-logo"><img src={gscLogo} alt="" draggable={false} /></span>
            <span className="nst-venue-name"><MapPin aria-hidden="true" />{venue}</span>
          </p>
          <p className="nst-act">
            <span className="nst-act-main" data-text={act.left}>{act.left}</span>
            <span className="nst-act-row">
              <b className="nst-act-x" aria-hidden="true">{act.joiner}</b>
              <span className="nst-act-dj">{act.right}</span>
            </span>
          </p>
        </div>
      </div>

      <header className="nst-header">
        <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
        <span className="kmt-name">
          <strong>NEMPO.ID</strong>
          <span><b>×</b> Kala Muda</span>
        </span>
      </header>

      <footer className="nst-partners">
        <img className="nst-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
        <span className="nst-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
      </footer>
    </section>
  );
}
