'use client';

import { ArrowRight, Menu } from 'lucide-react';

type Props = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

const styles = `
.fmx-hero{position:relative;overflow:hidden;border:1px solid #133a56;border-radius:18px;background:#02070d;color:#f7fbff}
.fmx-hero__nav{position:relative;z-index:10;display:flex;align-items:center;gap:28px;height:70px;padding:0 28px;border-bottom:1px solid rgba(74,171,232,.18);background:rgba(2,7,13,.84);backdrop-filter:blur(10px)}
.fmx-logo{display:inline-flex;align-items:center;gap:9px;color:#f7fbff;text-decoration:none;font-size:20px;font-weight:800;letter-spacing:-.02em}
.fmx-logo img{width:28px;height:28px;display:block}
.fmx-navlinks{display:flex;align-items:center;gap:26px;margin-left:auto}
.fmx-navlinks a{color:#dbe8f3;text-decoration:none;font-size:14px;font-weight:500;transition:color .2s ease}
.fmx-navlinks a:hover{color:#59cbff}
.fmx-start{display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border:1px solid rgba(85,205,255,.52);border-radius:8px;background:linear-gradient(135deg,#39baff,#178fe8);box-shadow:0 12px 36px rgba(18,153,238,.18);color:#fff;text-decoration:none;font-size:13px;font-weight:800}
.fmx-menu{display:none;margin-left:auto;width:42px;height:42px;align-items:center;justify-content:center;border:1px solid rgba(102,193,238,.34);border-radius:10px;background:rgba(5,18,29,.86);color:#fff}
.fmx-hero__body{position:relative;display:grid;grid-template-columns:minmax(0,46%) minmax(0,54%);min-height:555px;background:
  radial-gradient(circle at 78% 48%,rgba(15,138,225,.16),transparent 35%),
  linear-gradient(120deg,#02070d 0%,#03111b 49%,#02070d 100%)}
.fmx-copy{position:relative;z-index:5;display:flex;flex-direction:column;align-items:flex-start;padding:70px 28px 58px 62px}
.fmx-badge{display:inline-flex;align-items:center;padding:8px 14px;border:1px solid #1b6e9d;border-radius:999px;background:rgba(4,25,40,.72);color:#69d5ff;font-size:12px;font-weight:700;letter-spacing:.08em}
.fmx-copy h1{margin:18px 0 18px;max-width:700px;font-size:clamp(46px,5.4vw,78px);line-height:.92;letter-spacing:-.052em;font-weight:850}
.fmx-copy h1 span{display:block}
.fmx-copy h1 .blue{color:#18a8ff;text-shadow:0 0 24px rgba(24,168,255,.12)}
.fmx-copy p{max-width:460px;margin:0;color:#c8d7e4;font-size:17px;line-height:1.46}
.fmx-actions{display:flex;gap:12px;margin-top:28px}
.fmx-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:46px;padding:0 19px;border-radius:9px;text-decoration:none;font-size:14px;font-weight:800;transition:transform .18s ease,border-color .18s ease,background .18s ease}
.fmx-btn:hover{transform:translateY(-2px)}
.fmx-btn--primary{border:1px solid #64d3ff;background:linear-gradient(135deg,#38b8ff,#1e95ed);color:#fff;box-shadow:0 14px 38px rgba(18,160,246,.22)}
.fmx-btn--ghost{border:1px solid rgba(134,197,229,.38);background:rgba(4,15,24,.54);color:#f3f8fb}
.fmx-art{position:relative;min-height:555px;overflow:hidden;background:#020a12}
.fmx-art svg{position:absolute;inset:0;width:100%;height:100%;display:block}
.fmx-art:after{content:"";position:absolute;inset:0;pointer-events:none;background:
  linear-gradient(90deg,rgba(2,7,13,.78) 0%,rgba(2,7,13,.14) 25%,rgba(2,7,13,0) 58%,rgba(2,7,13,.16) 100%),
  linear-gradient(0deg,rgba(2,7,13,.52) 0%,rgba(2,7,13,0) 34%)}
.fmx-ai-card{position:absolute;right:32px;bottom:34px;z-index:6;width:min(244px,44%);padding:18px 18px 16px;border:1px solid rgba(76,196,255,.46);border-radius:14px;background:rgba(4,17,28,.88);box-shadow:0 18px 70px rgba(0,0,0,.42);backdrop-filter:blur(12px)}
.fmx-ai-card strong{display:block;margin-bottom:14px;font-size:19px;line-height:1.1}
.fmx-ai-row{display:flex;justify-content:space-between;gap:14px;padding:5px 0;color:#c7d6e2;font-size:12px}
.fmx-ai-row b{color:#62d1ff;font-size:13px}
.fmx-bars{height:52px;margin-top:13px;padding-top:8px;border-top:1px solid rgba(100,177,220,.2);display:flex;align-items:flex-end;gap:7px}
.fmx-bars i{display:block;flex:1;border-radius:1px 1px 0 0;background:linear-gradient(180deg,#2cb8ff,#1482bb)}
.fmx-bars i:nth-child(1){height:35%}.fmx-bars i:nth-child(2){height:50%}.fmx-bars i:nth-child(3){height:66%}.fmx-bars i:nth-child(4){height:52%}.fmx-bars i:nth-child(5){height:82%}.fmx-bars i:nth-child(6){height:100%}

@media (max-width:1000px){
  .fmx-hero{border-radius:15px}
  .fmx-hero__nav{height:62px;padding:0 22px}
  .fmx-navlinks,.fmx-start{display:none}
  .fmx-menu{display:flex}
  .fmx-hero__body{grid-template-columns:1fr;min-height:0}
  .fmx-copy{padding:44px 30px 24px}
  .fmx-copy h1{max-width:520px;font-size:clamp(50px,8vw,70px)}
  .fmx-copy p{font-size:16px;max-width:580px}
  .fmx-art{min-height:390px}
  .fmx-ai-card{right:24px;bottom:22px}
}

@media (max-width:650px){
  .fmx-hero{border-radius:12px}
  .fmx-hero__nav{height:58px;padding:0 16px}
  .fmx-logo{font-size:18px}
  .fmx-logo img{width:24px;height:24px}
  .fmx-copy{padding:28px 18px 16px}
  .fmx-badge{padding:7px 10px;font-size:10px}
  .fmx-copy h1{margin:14px 0 16px;font-size:clamp(43px,12.5vw,56px);line-height:.9}
  .fmx-copy p{max-width:none;font-size:15px;line-height:1.45}
  .fmx-actions{width:100%;gap:9px;margin-top:22px}
  .fmx-btn{flex:1;min-height:44px;padding:0 9px;font-size:12px}
  .fmx-art{min-height:324px}
  .fmx-ai-card{right:12px;bottom:15px;width:206px;padding:14px 14px 12px;border-radius:12px}
  .fmx-ai-card strong{margin-bottom:10px;font-size:16px}
  .fmx-ai-row{font-size:10px;padding:4px 0}
  .fmx-ai-row b{font-size:11px}
  .fmx-bars{height:42px;margin-top:10px}
}

@media (prefers-reduced-motion:reduce){
  .fmx-btn{transition:none}
}
`;

function HeroArtwork() {
  return (
    <svg viewBox="0 0 900 620" role="img" aria-labelledby="factory-visual-title factory-visual-desc" preserveAspectRatio="xMidYMid slice">
      <title id="factory-visual-title">Factory automation line</title>
      <desc id="factory-visual-desc">A robotic arm works above a glowing conveyor carrying intelligent production units.</desc>
      <defs>
        <linearGradient id="fmBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#04101a" />
          <stop offset=".6" stopColor="#061b2a" />
          <stop offset="1" stopColor="#020911" />
        </linearGradient>
        <linearGradient id="fmMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d2c40" />
          <stop offset=".45" stopColor="#244d65" />
          <stop offset="1" stopColor="#0a1c2a" />
        </linearGradient>
        <linearGradient id="fmCyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7de3ff" />
          <stop offset=".45" stopColor="#28b7ff" />
          <stop offset="1" stopColor="#0f6fa8" />
        </linearGradient>
        <linearGradient id="fmCube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#70d9ff" stopOpacity=".9" />
          <stop offset="1" stopColor="#0e6da4" stopOpacity=".35" />
        </linearGradient>
      </defs>

      <rect width="900" height="620" fill="url(#fmBg)" />

      <g opacity=".22" stroke="#2aa9df" strokeWidth="1">
        <path d="M0 150H900M0 230H900M0 330H900M0 450H900M0 560H900" />
        <path d="M130 0L70 620M300 0L260 620M470 0L450 620M640 0L650 620M820 0L860 620" />
      </g>

      <g fill="none" stroke="#37b8ef" strokeWidth="2" opacity=".34">
        <path d="M42 86h130l36 34h104" />
        <path d="M590 76h120l32 32h95" />
        <path d="M54 508h90l30-30h130" />
        <path d="M640 500h80l25-24h96" />
      </g>

      <g opacity=".18" stroke="#69d8ff" strokeWidth="2">
        <path d="M20 270h210l54 52h240" />
        <path d="M515 310h195l58-64h120" />
      </g>

      <g stroke="#2fd0ff">
        <path d="M585 128c60 0 98 26 126 57" fill="none" opacity=".35" />
        <circle cx="585" cy="128" r="5" fill="#89eaff" />
        <circle cx="711" cy="185" r="5" fill="#89eaff" />
      </g>

      <g transform="translate(535 82)">
        <circle cx="0" cy="0" r="30" fill="#0a1a27" stroke="#58d5ff" strokeWidth="2" />
        <circle cx="0" cy="0" r="12" fill="#0c3449" stroke="#9beaff" strokeWidth="2" />
        <path d="M-8 26L48 92" stroke="#0c1b29" strokeWidth="34" strokeLinecap="round" />
        <path d="M-8 26L48 92" stroke="url(#fmMetal)" strokeWidth="25" strokeLinecap="round" />
        <circle cx="48" cy="92" r="20" fill="#0c2332" stroke="#53cffb" strokeWidth="2" />
        <path d="M56 104L142 158" stroke="#0a1a27" strokeWidth="28" strokeLinecap="round" />
        <path d="M56 104L142 158" stroke="url(#fmMetal)" strokeWidth="20" strokeLinecap="round" />
        <circle cx="142" cy="158" r="15" fill="#0a2334" stroke="#60d8ff" strokeWidth="2" />
        <path d="M152 162l34 15M153 174l27 23M169 177l18 21" stroke="#58d5ff" strokeWidth="6" strokeLinecap="round" />
      </g>

      <g transform="translate(170 380)">
        <path d="M0 54L430 4L650 118L210 175Z" fill="#071621" stroke="#2aa8df" strokeWidth="2" />
        <path d="M0 54L210 175L210 212L0 91Z" fill="#05121c" stroke="#16445e" strokeWidth="1.5" />
        <path d="M210 175L650 118L650 154L210 212Z" fill="#0a2231" stroke="#215874" strokeWidth="1.5" />
        <path d="M30 68L212 164L620 112" fill="none" stroke="#44c9ff" strokeWidth="3" opacity=".7" />
      </g>

      <g stroke="#64dcff" strokeWidth="2" fill="url(#fmCube)">
        <g transform="translate(342 372)">
          <path d="M0 0l33-11 21 12-33 12z" />
          <path d="M0 0v32l33 18V12z" />
          <path d="M33 13v37l21-12V1z" />
        </g>
        <g transform="translate(458 359)">
          <path d="M0 0l30-10 20 12-30 10z" />
          <path d="M0 0v32l30 18V12z" />
          <path d="M30 12v38l20-12V2z" />
        </g>
        <g transform="translate(570 345)">
          <path d="M0 0l28-9 21 11-28 10z" />
          <path d="M0 0v31l28 17V12z" />
          <path d="M28 12v36l21-11V2z" />
        </g>
        <g transform="translate(675 333)">
          <path d="M0 0l27-8 19 11-27 9z" />
          <path d="M0 0v30l27 16V12z" />
          <path d="M27 12v34l19-10V3z" />
        </g>
      </g>

      <g fill="none" stroke="#2cbcff" strokeWidth="3" opacity=".65">
        <path d="M146 298h120" />
        <path d="M106 316h110" />
        <path d="M743 262h88" />
        <path d="M770 280h64" />
      </g>

      <g fill="#a9efff">
        <circle cx="164" cy="298" r="4" />
        <circle cx="124" cy="316" r="4" />
        <circle cx="760" cy="262" r="4" />
        <circle cx="785" cy="280" r="4" />
      </g>
    </svg>
  );
}

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

        <a className="fmx-start" href="/demo">
          Get Started <ArrowRight size={15} />
        </a>

        <button
          type="button"
          className="fmx-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
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
            <a className="fmx-btn fmx-btn--primary" href="/demo">
              See Live Demo <ArrowRight size={15} />
            </a>
            <a className="fmx-btn fmx-btn--ghost" href="#platform">
              Learn More
            </a>
          </div>
        </div>

        <div className="fmx-art">
          <HeroArtwork />

          <aside className="fmx-ai-card" aria-label="AI optimization results">
            <strong>AI Optimizing...</strong>
            <div className="fmx-ai-row"><span>Production</span><b>+24%</b></div>
            <div className="fmx-ai-row"><span>Energy Use</span><b>-18%</b></div>
            <div className="fmx-ai-row"><span>Downtime</span><b>-67%</b></div>
            <div className="fmx-bars" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
