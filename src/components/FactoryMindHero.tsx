'use client';

import { Menu } from 'lucide-react';

type Props = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

const styles = `
.fmx-reference-hero{position:relative;width:100%;overflow:hidden;background:#02070d;line-height:0}
.fmx-reference-canvas{width:100%;aspect-ratio:970/438;background-color:#02070d;background-repeat:no-repeat;background-position:center;background-size:100% 100%;background-image:url("/reference/desktop.avif"),url("/factorymind-hero.webp")}
.fmx-hotspots{position:absolute;inset:0;z-index:5;pointer-events:none}
.fmx-link,.fmx-menu{position:absolute;display:block;pointer-events:auto}
.fmx-link{border-radius:6px}
.fmx-menu{display:none;align-items:center;justify-content:center;border:0;background:transparent;color:#f5f8fb;line-height:1;padding:0}
.fmx-owner-mask{position:absolute;background:#02070d;pointer-events:none}
.fmx-home{left:30.1%;top:1.3%;width:5.2%;height:8.5%}
.fmx-demo{left:37.0%;top:1.3%;width:5.0%;height:8.5%}
.fmx-app{left:43.4%;top:1.3%;width:4.7%;height:8.5%}
.fmx-contact{left:56.4%;top:1.3%;width:6.3%;height:8.5%}
.fmx-start{left:83.5%;top:1.0%;width:9.5%;height:8.7%}
.fmx-owner-mask{left:48.1%;top:1.0%;width:6.9%;height:8.8%}
.fmx-live{left:7.1%;top:81.8%;width:14.8%;height:10.0%}
.fmx-learn{left:23.5%;top:81.8%;width:12.7%;height:10.0%}
@media (max-width:1000px){
  .fmx-reference-canvas{aspect-ratio:499/460;background-image:url("/reference/tablet.avif"),url("/factorymind-hero.webp")}
  .fmx-owner-mask,.fmx-home,.fmx-demo,.fmx-app,.fmx-contact,.fmx-start{display:none}
  .fmx-menu{display:flex;right:3.0%;top:2.0%;width:9.0%;height:9.5%}
  .fmx-live{left:4.0%;top:61.7%;width:22.8%;height:9.6%}
  .fmx-learn{left:28.8%;top:61.7%;width:18.0%;height:9.6%}
}
@media (max-width:650px){
  .fmx-reference-canvas{aspect-ratio:220/463;background-image:url("/reference/mobile.avif"),url("/factorymind-hero.webp")}
  .fmx-menu{right:2.2%;top:1.7%;width:11.2%;height:9.0%}
  .fmx-live{left:7.0%;top:54.2%;width:44.0%;height:10.0%}
  .fmx-learn{left:55.0%;top:54.2%;width:39.0%;height:10.0%}
}
@media (prefers-reduced-motion:reduce){.fmx-reference-hero *{transition:none!important}}
`;

export default function FactoryMindHero({ menuOpen, onToggleMenu }: Props) {
  return (
    <section className="fmx-reference-hero" aria-label="FactoryMind home hero">
      <style>{styles}</style>
      <div className="fmx-reference-canvas" aria-hidden="true" />
      <div className="fmx-hotspots">
        <a className="fmx-link fmx-home" href="#top" aria-label="Home" />
        <a className="fmx-link fmx-demo" href="/demo" aria-label="Demo" />
        <a className="fmx-link fmx-app" href="/app" aria-label="App" />
        <a className="fmx-link fmx-contact" href="#contact" aria-label="Contact" />
        <a className="fmx-link fmx-start" href="/demo" aria-label="Get Started" />
        <span className="fmx-owner-mask" aria-hidden="true" />
        <button
          type="button"
          className="fmx-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <Menu size={20} strokeWidth={1.7} />
        </button>
        <a className="fmx-link fmx-live" href="/demo" aria-label="See Live Demo" />
        <a className="fmx-link fmx-learn" href="#platform" aria-label="Learn More" />
      </div>
    </section>
  );
}