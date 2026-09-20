'use client';

export default function FactoryMindScene() {
  return (
    <div className="fm-scene-shell fm-factory-art" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="fm-factory-svg">
        <defs>
          <linearGradient id="bg" x2="0" y2="1"><stop stopColor="#07141f"/><stop offset=".55" stopColor="#071019"/><stop offset="1" stopColor="#02070d"/></linearGradient>
          <linearGradient id="floor" x2="1"><stop stopColor="#06111a"/><stop offset=".5" stopColor="#132c3b"/><stop offset="1" stopColor="#040a10"/></linearGradient>
          <linearGradient id="glass" x2="1"><stop stopColor="#3ecbff" stopOpacity=".08"/><stop offset="1" stopColor="#178fe3" stopOpacity=".55"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="1600" height="900" fill="url(#bg)"/>
        <g opacity=".6" stroke="#24485b" strokeWidth="8" fill="none">
          <path d="M60 570V90M300 570V90M550 570V90M810 570V90M1080 570V90M1350 570V90M1540 570V90"/>
          <path d="M60 120H1540M60 220H1540M60 320H1540M60 420H1540"/>
        </g>
        <g opacity=".2" stroke="#9ce7ff" strokeWidth="4"><path d="M0 120L410 570M240 120L580 570M650 120L810 570M1100 120L930 570M1600 120L1210 570"/></g>
        <g filter="url(#glow)" fill="#d9f7ff"><rect x="120" y="122" width="210" height="14" rx="7"/><rect x="520" y="122" width="230" height="14" rx="7"/><rect x="930" y="122" width="230" height="14" rx="7"/><rect x="1300" y="122" width="150" height="14" rx="7"/></g>
        <polygon points="0,560 1600,505 1600,900 0,900" fill="url(#floor)"/>
        <g opacity=".45" stroke="#2384b2" strokeWidth="3"><path d="M0 840L1600 680M0 750L1600 625M0 675L1600 575"/><path d="M160 545L500 900M430 535L670 900M800 530V900M1160 520L960 900M1420 515L1190 900"/></g>
        <g transform="translate(390 500) rotate(-5)">
          <rect x="0" y="62" width="1000" height="92" rx="16" fill="#091d2a" stroke="#2b9dcc" strokeWidth="6"/>
          <rect x="0" y="51" width="1000" height="12" fill="#56d8ff" opacity=".72"/>
          <g fill="url(#glass)" stroke="#67d9ff" strokeWidth="5">
            <rect x="70" y="-5" width="120" height="82" rx="7"/><rect x="250" y="-14" width="120" height="82" rx="7"/><rect x="430" y="-23" width="120" height="82" rx="7"/><rect x="610" y="-32" width="120" height="82" rx="7"/><rect x="790" y="-41" width="120" height="82" rx="7"/>
          </g>
          <g fill="#8ee8ff" opacity=".22"><rect x="88" y="13" width="82" height="4"/><rect x="268" y="4" width="82" height="4"/><rect x="448" y="-5" width="82" height="4"/><rect x="628" y="-14" width="82" height="4"/><rect x="808" y="-23" width="82" height="4"/></g>
        </g>
        <g transform="translate(930 205)">
          <g stroke="#aebbc3" strokeWidth="38" strokeLinecap="round" fill="none"><path d="M0 310L92 110L250 190L340 36"/><path d="M340 36L390 4"/></g>
          <g fill="#354957" stroke="#79dcff" strokeWidth="6"><circle cx="0" cy="310" r="58"/><circle cx="92" cy="110" r="36"/><circle cx="250" cy="190" r="36"/><rect x="330" y="-15" width="92" height="44" rx="10"/></g>
          <path d="M407 10l40 30-27 46-38-27z" fill="#5b7180" stroke="#7cdefe" strokeWidth="5"/>
        </g>
        <g opacity=".72" fill="#5bd8ff" filter="url(#glow)"><circle cx="540" cy="250" r="4"/><circle cx="780" cy="170" r="5"/><circle cx="1210" cy="290" r="5"/><circle cx="1360" cy="200" r="4"/></g>
        <g opacity=".18" fill="#63d9ff"><rect x="1240" y="350" width="150" height="230" rx="8"/><rect x="1420" y="315" width="95" height="265" rx="8"/></g>
      </svg>
    </div>
  );
}
