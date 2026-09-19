'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function FactoryMindScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const belts = Array.from(root.querySelectorAll<HTMLElement>('.fm3d-box'));
    const leds = Array.from(root.querySelectorAll<HTMLElement>('.fm3d-led'));
    const arm = root.querySelector<HTMLElement>('.fm3d-arm');
    const camera = root.querySelector<HTMLElement>('.fm3d-camera');
    const panel = root.querySelector<HTMLElement>('.fm3d-hud');

    const boxLoop = anime({
      targets: belts,
      translateX: () => anime.random(-34, 34),
      translateZ: () => anime.random(-12, 12),
      rotateY: () => anime.random(-4, 4),
      duration: 1800,
      delay: anime.stagger(170),
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });

    anime({
      targets: arm,
      rotateZ: ['-4deg', '7deg'],
      rotateY: ['-10deg', '10deg'],
      duration: 2600,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });

    anime({
      targets: leds,
      opacity: [0.2, 1],
      scale: [0.8, 1.3],
      duration: 900,
      delay: anime.stagger(180),
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
    });

    anime({
      targets: panel,
      translateY: [-5, 7],
      rotateX: ['3deg', '-3deg'],
      duration: 3400,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      anime({
        targets: camera,
        rotateY: x * 7,
        rotateX: y * -4,
        duration: 700,
        easing: 'easeOutQuad',
      });
    };

    const onLeave = () => {
      anime({
        targets: camera,
        rotateY: 0,
        rotateX: 0,
        duration: 900,
        easing: 'easeOutElastic(1, .7)',
      });
    };

    root.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', onLeave, { passive: true });

    return () => {
      boxLoop.pause();
      anime.remove([belts, leds, arm, panel, camera]);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="fm-scene-shell fm3d-scene" aria-hidden="true">
      <div className="fm3d-camera">
        <div className="fm3d-factory">
          <div className="fm3d-ceiling"><i/><i/><i/><i/></div>

          <div className="fm3d-floor">
            <span/><span/><span/><span/>
          </div>

          <div className="fm3d-conveyor">
            <div className="fm3d-belt"/>
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="fm3d-box" key={index}><b/><b/><b/></div>
            ))}
          </div>

          <div className="fm3d-arm">
            <div className="fm3d-joint fm3d-j1"/>
            <div className="fm3d-link fm3d-link1"/>
            <div className="fm3d-joint fm3d-j2"/>
            <div className="fm3d-link fm3d-link2"/>
            <div className="fm3d-joint fm3d-j3"/>
            <div className="fm3d-gripper"><span/><span/></div>
          </div>

          <div className="fm3d-light fm3d-light1"><i className="fm3d-led"/></div>
          <div className="fm3d-light fm3d-light2"><i className="fm3d-led"/></div>
          <div className="fm3d-light fm3d-light3"><i className="fm3d-led"/></div>

          <div className="fm3d-hud">
            <strong>AI OPTIMIZING</strong>
            <span>Production <b>+24%</b></span>
            <span>Energy <b>-18%</b></span>
            <span>Downtime <b>-67%</b></span>
            <div className="fm3d-chart"><i/><i/><i/><i/><i/><i/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
