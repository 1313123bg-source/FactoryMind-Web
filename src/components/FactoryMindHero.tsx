'use client';

import { Menu, ArrowRight } from 'lucide-react';

type Props = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

const styles = `
.fmx-hero{position:relative;overflow:hidden;border:1px solid #14344f;border-radius:16px;background:#02070d;color:#f7fbff}
.fmx-hero__nav{height:66px;display:flex;align-items:center;gap:26px;padding:0 26px;border-bottom:1px solid rgba(42,121,177,.24);background:rgba(2,7,13,.92);position:relative;z-index:3}
.fmx-logo{display:inline-flex;align-items:center;gap:8px;color:#f7fbff;text-decoration:none;font-size:20px;font-weight:700;white-space:nowrap}
.fmx-logo img{width:28px;height:28px}
.fmx-navlinks{display:flex;align-items:center;gap:28px;margin-left:auto}
.fmx-navlinks a{color:#eef6ff;text-decoration:none;font-size:14px;opacity:.92}
.fmx-start{display:inline-flex;align-items:center;gap:8px;background:#16a6ff;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-size:14px;font-weight:700;box-shadow:0 0 24px rgba(22,166,255,.18)}
.fmx-menu{display:none;margin-left:auto;width:40px;height:40px;border:1px solid rgba(55,132,181,.45);border-radius:10px;background:rgba(8,18,28,.8);color:#fff;align-items:center;justify-content:center}
.fmx-hero__body{position:relative;display:grid;grid-template-columns:42% 58%;min-height:450px;background:linear-gradient(90deg,#02070d 0%,#03111b 43%,#02070d 100%)}
.fmx-copy{position:relative;z-index:2;padding:62px 18px 46px 66px;display:flex;flex-direction:column;align-items:flex-start}
.fmx-badge{border:1px solid #1b709e;border-radius:999px;padding:9px 14px;color:#69d1ff;font-size:13px;letter-spacing:.04em;background:rgba(4,22,33,.75)}
.fmx-copy h1{margin:18px 0 18px;font-size:clamp(46px,5.4vw,76px);line-height:.93;letter-spacing:-.045em;font-weight:800}
.fmx-copy h1 span{display:block}
.fmx-copy h1 .blue{color:#12a7ff}
.fmx-copy p{max-width:430px;margin:0;color:#cbd8e5;font-size:18px;line-height:1.45}
.fmx-actions{display:flex;gap:14px;margin-top:26px}
.fmx-btn{display:inline-flex;align-items:center;gap:10px;text-decoration:none;border-radius:9px;padding:14px 20px;font-size:15px;font-weight:700}
.fmx-btn--primary{background:#20a9ff;color:#fff;box-shadow:0 0 26px rgba(32,169,255,.22)}
.fmx-btn--ghost{border:1px solid #34546c;color:#fff;background:rgba(2,7,13,.5)}
.fmx-art{min-height:450px;position:relative;overflow:hidden;background:#03111b}
.fmx-art img{display:block;width:100%;height:100%;min-height:450px;object-fit:cover;object-position:center;image-rendering:auto;filter:saturate(.96) contrast(1.02)}
.fmx-art:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#02070d 0%,rgba(2,7,13,.08) 18%,rgba(2,7,13,.02) 100%),linear-gradient(0deg,rgba(2,7,13,.30),transparent 38%);pointer-events:none}
@media (max-width:1000px){
  .fmx-hero{border-radius:14px}
  .fmx-hero__nav{height:62px;padding:0 22px}
  .fmx-navlinks,.fmx-start{display:none}
  .fmx-menu{display:flex}
  .fmx-hero__body{grid-template-columns:1fr;min-height:0}
  .fmx-copy{padding:36px 28px 22px}
  .fmx-copy h1{font-size:clamp(48px,8vw,64px);max-width:360px}
  .fmx-copy p{font-size:16px;max-width:520px}
  .fmx-art{min-height:380px}
  .fmx-art img{min-height:380px}
}
@media (max-width:650px){
  .fmx-hero{border-radius:12px}
  .fmx-hero__nav{height:58px;padding:0 16px}
  .fmx-logo{font-size:18px}
  .fmx-logo img{width:25px;height:25px}
  .fmx-copy{padding:26px 18px 16px}
  .fmx-badge{font-size:11px;padding:7px 10px}
  .fmx-copy h1{font-size:clamp(43px,12.5vw,56px);line-height:.92;margin:15px 0 17px;letter-spacing:-.055em}
  .fmx-copy p{font-size:16px;line-height:1.42}
  .fmx-actions{width:100%;gap:10px;margin-top:22px}
  .fmx-btn{flex:1;justify-content:center;padding:13px 10px;font-size:14px}
  .fmx-art{min-height:214px}
  .fmx-art img{min-height:214px;object-position:46% center}
}
`;

export default function FactoryMindHero({ menuOpen, onToggleMenu }: Props) {
  return (
    <section className="fmx-hero" aria-label="FactoryMind home hero">
      <style>{styles}</style>
      <header className="fmx-hero__nav">
        <a href="#top" className="fmx-logo" aria-label="FactoryMind home">
          <img src="/icon.svg" alt="" />
          <span>FactoryMind</span>
        </a>
        <nav className="fmx-navlinks" aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="/demo">Demo</a>
          <a href="/app">App</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="fmx-start" href="/demo">Get Started <ArrowRight size={16}/></a>
        <button type="button" className="fmx-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={onToggleMenu}>
          <Menu size={20} />
        </button>
      </header>

      <div className="fmx-hero__body">
        <div className="fmx-copy">
          <span className="fmx-badge">AI FOR REAL INDUSTRY</span>
          <h1>
            <span>Smarter</span>
            <span>Factories</span>
            <span className="blue">Stronger</span>
            <span className="blue">Tomorrow</span>
          </h1>
          <p>AI-powered solutions for modern manufacturing. Increase efficiency. Reduce costs. Build the future.</p>
          <div className="fmx-actions">
            <a className="fmx-btn fmx-btn--primary" href="/demo">See Live Demo <ArrowRight size={16}/></a>
            <a className="fmx-btn fmx-btn--ghost" href="#platform">Learn More</a>
          </div>
        </div>
        <div className="fmx-art">
          <img src="/reference/hero-factory.webp" alt="FactoryMind robotic production line" />
        </div>
      </div>
    </section>
  );
}
