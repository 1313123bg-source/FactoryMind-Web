'use client';

import { useEffect, useRef } from 'react';

export default function FactoryMindScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      el.style.setProperty('--mx', String(x));
      el.style.setProperty('--my', String(y));
    };
    const onLeave = () => {
      el.style.setProperty('--mx', '0');
      el.style.setProperty('--my', '0');
    };
    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="fm-scene-shell fm-factory-art" aria-hidden="true">
      <svg viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice" className="fm-factory-svg">
        <defs>
          <linearGradient id="fm-bg" x2="0" y2="1"><stop stopColor="#08111a"/><stop offset="1" stopColor="#02070d"/></linearGradient>
          <linearGradient id="fm-floor" x2="1"><stop stopColor="#07131d"/><stop offset=".5" stopColor="#102331"/><stop offset="1" stopColor="#050b11"/></linearGradient>
          <linearGradient id="fm-blue" x2="1"><stop stopColor="#42c9ff" stopOpacity=".18"/><stop offset="1" stopColor="#1598e8" stopOpacity=".65"/></linearGradient>
          <filter id="fm-glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="1400" height="700" fill="url(#fm-bg)"/>
        <g opacity=".75" stroke="#2c566d" strokeWidth="7" fill="none">
          <path d="M40 500V70M250 500V70M480 500V70M720 500V70M970 500V70M1190 500V70M1360 500V70"/>
          <path d="M40 105H1360M40 185H1360M40 265H1360M40 345H1360"/>
        </g>
        <g opacity=".35" stroke="#8bdcff" strokeWidth="3">
          <path d="M0 90L350 500M260 90L520 500M610 90L720 500M1000 90L850 500M1360 90L1080 500"/>
        </g>
        <g filter="url(#fm-glow)" fill="#d9f6ff">
          <rect x="110" y="105" width="150" height="13" rx="6"/><rect x="480" y="105" width="180" height="13" rx="6"/>
          <rect x="900" y="105" width="180" height="13" rx="6"/><rect x="1180" y="105" width="120" height="13" rx="6"/>
        </g>
        <polygon points="0,480 1400,430 1400,700 0,700" fill="url(#fm-floor)"/>
        <g opacity=".5" stroke="#1c759f" strokeWidth="3">
          <path d="M0 650L1400 560M0 590L1400 520M0 535L1400 485"/>
          <path d="M180 470L420 700M420 465L580 700M760 450L760 700M1080 440L930 700M1280 435L1100 700"/>
        </g>
        <g transform="translate(400 390) rotate(-8)">
          <rect x="0" y="70" width="850" height="70" rx="12" fill="#0a1b27" stroke="#2b9dcc" strokeWidth="5"/>
          <rect x="0" y="62" width="850" height="9" fill="#52d2ff" opacity=".65"/>
          <g fill="url(#fm-blue)" stroke="#63d8ff" strokeWidth="4">
            <rect x="55" y="10" width="105" height="70" rx="5"/><rect x="215" y="2" width="105" height="70" rx="5"/>
            <rect x="380" y="-8" width="105" height="70" rx="5"/><rect x="545" y="-18" width="105" height="70" rx="5"/>
            <rect x="705" y="-28" width="105" height="70" rx="5"/>
          </g>
        </g>
        <g transform="translate(650 170)" stroke="#b8c7d0" strokeWidth="30" strokeLinecap="round" fill="none">
          <path d="M0 260L80 80L210 155L285 20"/><path d="M285 20L325 0"/>
        </g>
        <g transform="translate(650 170)" fill="#354957" stroke="#76d8ff" strokeWidth="5">
          <circle cx="0" cy="260" r="48"/><circle cx="80" cy="80" r="30"/><circle cx="210" cy="155" r="30"/>
          <rect x="270" y="-15" width="75" height="35" rx="9"/>
        </g>
        <g opacity=".55" fill="#6bd9ff"><circle cx="520" cy="220" r="4"/><circle cx="850" cy="120" r="4"/><circle cx="1040" cy="280" r="4"/><circle cx="1150" cy="180" r="3"/></g>
      </svg>
    </div>
  );
}
