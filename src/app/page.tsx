'use client';

import { useState } from 'react';
import FactoryMindScene from '@/components/FactoryMindScene';

const stats = [['+24%','Average Productivity'],['-18%','Energy Consumption'],['-67%','Downtime'],['100%','Future Focused']];
const features = [['◫','AI Analytics','Turn data into decisions'],['✦','Process Automation','Streamline operations'],['◇','Predictive Maintenance','Avoid costly downtime'],['▱','Scalable Solutions','Grow with confidence']];
const nav = [['Home','#top'],['Demo','/demo'],['App','/app'],['Contact','#contact']];

export default function HomePage(){
  const [menuOpen,setMenuOpen]=useState(false);

  return <main className="fm-site" id="top">
    <section className="fm-reference-hero">
      <FactoryMindScene menuOpen={menuOpen}/>

      <div className="fm-hotspots fm-desktop-hotspots" aria-label="Desktop navigation">
        <a href="#top" aria-label="Home" className="hs-home"/>
        <a href="/demo" aria-label="Demo" className="hs-demo"/>
        <a href="/app" aria-label="App" className="hs-app"/>
        <a href="#contact" aria-label="Contact" className="hs-contact"/>
        <a href="/demo" aria-label="Get Started" className="hs-start"/>
        <a href="/demo" aria-label="See Live Demo" className="hs-live"/>
        <a href="#platform" aria-label="Learn More" className="hs-learn"/>
      </div>

      <div className="fm-hotspots fm-tablet-hotspots" aria-label="Tablet navigation">
        <a href="#top" aria-label="Home" className="hs-home"/>
        <a href="/demo" aria-label="Demo" className="hs-demo"/>
        <a href="/app" aria-label="App" className="hs-app"/>
        <a href="#contact" aria-label="Contact" className="hs-contact"/>
        <a href="/demo" aria-label="Get Started" className="hs-start"/>
        <a href="/demo" aria-label="See Live Demo" className="hs-live"/>
        <a href="#platform" aria-label="Learn More" className="hs-learn"/>
      </div>

      <div className="fm-hotspots fm-mobile-hotspots" aria-label="Mobile navigation">
        <button type="button" aria-label={menuOpen?'Close menu':'Open menu'} className="hs-menu" onClick={()=>setMenuOpen(v=>!v)}/>
        {!menuOpen && <>
          <a href="/demo" aria-label="See Live Demo" className="hs-live"/>
          <a href="#platform" aria-label="Learn More" className="hs-learn"/>
        </>}
        {menuOpen && <>
          <a href="#top" aria-label="Home" className="hs-m-home" onClick={()=>setMenuOpen(false)}/>
          <a href="/demo" aria-label="Demo" className="hs-m-demo" onClick={()=>setMenuOpen(false)}/>
          <a href="/app" aria-label="App" className="hs-m-app" onClick={()=>setMenuOpen(false)}/>
          <a href="#contact" aria-label="Contact" className="hs-m-contact" onClick={()=>setMenuOpen(false)}/>
          <a href="/demo" aria-label="Get Started" className="hs-m-start" onClick={()=>setMenuOpen(false)}/>
        </>}
      </div>
    </section>

    <section className="fm-stats" id="platform">
      <p>Trusted by innovators in manufacturing</p>
      <div>{stats.map(([value,label])=><article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
    </section>

    <section className="fm-built">
      <div className="fm-built-panel">
        <div className="fm-section-heading">
          <h2>Built for Modern Industry</h2>
          <p>FactoryMind combines cutting-edge AI with real-world industrial expertise<br className="desktop-only"/> to deliver measurable results.</p>
        </div>
        <div className="fm-feature-grid">
          {features.map(([icon,title,desc])=><article key={title}><span className="fm-feature-icon">{icon}</span><h3>{title}</h3><p>{desc}</p></article>)}
        </div>
      </div>
    </section>

    <section className="fm-lower" id="contact">
      <a href="/demo"><span>/demo</span><b>Live Demo</b><small>Explore FactoryMind in action.</small><em>↗</em></a>
      <a href="/app"><span>/app</span><b>The FactoryMind App</b><small>Your factory. In your hands.</small><em>↗</em></a>
      <a href="#contact"><span>/contact</span><b>Contact FactoryMind</b><small>Tell us what your factory needs.</small><em>↗</em></a>
    </section>

    <footer className="fm-footer">
      <a className="fm-brand" href="#top"><span className="fm-brand-mark">⌬</span><b>FactoryMind</b></a>
      <span>AI-POWERED MANUFACTURING</span>
      <span>A SMARTER TOMORROW.</span>
    </footer>
  </main>;
}
