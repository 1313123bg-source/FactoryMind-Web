'use client';

import { useEffect, useRef, useState } from 'react';

export default function FactoryMindScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let frame = 0;
    let mounted = true;
    let renderer: any;
    let scene: any;
    let camera: any;
    let cleanup = () => {};

    const start = async () => {
      try {
        const THREE = await import('three');
        if (!mounted || !canvasRef.current) return;
        const canvas = canvasRef.current;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
        camera.position.set(0, 0.2, 9.2);
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.setClearColor(0x000000, 0);

        const root = new THREE.Group();
        const reactor = new THREE.Group();
        root.add(reactor);
        scene.add(root);
        scene.add(new THREE.AmbientLight(0x9db8c8, 1.7));
        const cyanLight = new THREE.PointLight(0x54d9ff, 45, 20);
        cyanLight.position.set(4, 4, 5);
        scene.add(cyanLight);
        const orangeLight = new THREE.PointLight(0xff8b45, 28, 18);
        orangeLight.position.set(-4, -2, -3);
        scene.add(orangeLight);

        const metal = new THREE.MeshStandardMaterial({ color: 0x17232d, metalness: 0.95, roughness: 0.18, emissive: 0x0c2637, emissiveIntensity: 1.8 });
        const cyan = new THREE.MeshStandardMaterial({ color: 0x1c5267, metalness: 0.8, roughness: 0.22, emissive: 0x07516b, emissiveIntensity: 2.8 });
        const orange = new THREE.MeshStandardMaterial({ color: 0x7b351b, metalness: 0.75, roughness: 0.24, emissive: 0x6e260e, emissiveIntensity: 2.5 });
        const line = (color: number, opacity = 0.85) => new THREE.LineBasicMaterial({ color, transparent: true, opacity });

        const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 4), metal);
        reactor.add(core);
        reactor.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.42, 3)), line(0x54d9ff)));

        const cage = new THREE.Group();
        for (let i = 0; i < 8; i += 1) {
          const a = (i / 8) * Math.PI * 2;
          const beam = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.9, 0.24), i % 2 ? cyan : metal);
          beam.position.set(Math.cos(a) * 1.72, Math.sin(a) * 1.72, 0);
          beam.rotation.z = a + Math.PI / 2;
          cage.add(beam);
        }
        [1.65, 2.05, 2.45].forEach((r, i) => {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(r, i === 2 ? 0.07 : 0.035, 12, 96), i === 2 ? orange : cyan);
          ring.rotation.set(i * 0.7, i * 0.45, i * 0.3);
          cage.add(ring);
        });
        for (let i = 0; i < 12; i += 1) {
          const a = i / 12 * Math.PI * 2;
          const block = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.22, 0.6), i % 3 === 0 ? orange : metal);
          block.position.set(Math.cos(a) * 2.05, Math.sin(a) * 2.05, Math.sin(a * 2) * 0.25);
          block.rotation.z = a;
          cage.add(block);
        }
        reactor.add(cage);

        const shockwaves = [1.25, 1.55].map((r, i) => {
          const s = new THREE.Mesh(new THREE.TorusGeometry(r, 0.025, 8, 128), line(i ? 0xff9b52 : 0x9bdcff, 0.65));
          s.rotation.x = Math.PI / 2;
          reactor.add(s);
          return s;
        });

        const particleCount = 1500;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i += 1) {
          const r = 2.7 + Math.random() * 3.4;
          const t = Math.random() * Math.PI * 2;
          const p = Math.acos(2 * Math.random() - 1);
          positions[i * 3] = r * Math.sin(p) * Math.cos(t);
          positions[i * 3 + 1] = r * Math.cos(p);
          positions[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0x9bdcff, size: 0.035, transparent: true, opacity: 0.9, sizeAttenuation: true }));
        root.add(particles);

        const satellites = new THREE.Group();
        [2.8, 3.25, 3.7, 4.1].forEach((r, i) => {
          const sat = new THREE.Mesh(new THREE.OctahedronGeometry(i === 1 ? 0.18 : 0.12, 1), i % 2 ? orange : cyan);
          sat.userData = { r, phase: i * 1.7, speed: 0.2 + i * 0.06 };
          satellites.add(sat);
        });
        root.add(satellites);

        const nodes = new THREE.Group();
        const nodePositions = [[-2.7, 1.6, 0.3], [2.6, 0.9, -0.2], [-2.1, -1.8, 0.4], [1.9, -2, 0.2], [0, 2.8, -0.4]];
        nodePositions.forEach(([x, y, z], i) => {
          const n = new THREE.Mesh(new THREE.SphereGeometry(i === 4 ? 0.13 : 0.09, 16, 16), orange);
          n.position.set(x, y, z);
          nodes.add(n);
          reactor.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)]), line(0x54d9ff, 0.5)));
        });
        root.add(nodes);

        const target = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };
        const move = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); target.x = ((e.clientX - r.left) / Math.max(r.width, 1) - 0.5) * 2; target.y = ((e.clientY - r.top) / Math.max(r.height, 1) - 0.5) * 2; };
        const leave = () => { target.x = 0; target.y = 0; };
        const resize = () => { const r = canvas.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); camera.aspect = r.width / Math.max(r.height, 1); camera.updateProjectionMatrix(); };
        const animate = () => {
          frame = requestAnimationFrame(animate);
          current.x += (target.x - current.x) * 0.045;
          current.y += (target.y - current.y) * 0.045;
          const time = performance.now() * 0.001;
          root.rotation.y = time * 0.1 + current.x * 0.2;
          root.rotation.x = -current.y * 0.12;
          core.rotation.y = time * 0.22;
          cage.rotation.y = -time * 0.12;
          cage.rotation.x = Math.sin(time * 0.3) * 0.12;
          shockwaves.forEach((s, i) => { const p = (Math.sin(time * 1.8 + i * Math.PI) + 1) / 2; s.scale.setScalar(0.82 + p * 0.4); s.rotation.z = time * (i ? -0.45 : 0.6); });
          particles.rotation.y = -time * 0.025;
          satellites.rotation.x = time * 0.12;
          satellites.children.forEach((s: any) => { const a = time * s.userData.speed + s.userData.phase; s.position.set(Math.cos(a) * s.userData.r, Math.sin(a * 1.27) * s.userData.r * 0.62, Math.sin(a) * s.userData.r); s.rotation.x = time * 1.4; s.rotation.y = time * 1.8; });
          cyanLight.intensity = 38 + Math.sin(time * 2.2) * 8;
          orangeLight.intensity = 24 + Math.cos(time * 1.7) * 5;
          camera.position.x += (current.x * 0.45 - camera.position.x) * 0.018;
          camera.position.y += (-current.y * 0.28 + 0.2 - camera.position.y) * 0.018;
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        };
        resize();
        window.addEventListener('resize', resize);
        canvas.addEventListener('pointermove', move, { passive: true });
        canvas.addEventListener('pointerleave', leave, { passive: true });
        animate();
        cleanup = () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave); scene.traverse((o: any) => { o.geometry?.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m: any) => m.dispose()); }); renderer.dispose(); renderer.forceContextLoss?.(); };
      } catch { if (mounted) setFailed(true); }
    };
    start();
    return () => { mounted = false; cleanup(); };
  }, []);

  return <div className={`fm-scene-shell${failed ? ' is-fallback' : ''}`} aria-label="Интерактивна 3D сцена на FactoryMind"><div className="fm-css-orb" aria-hidden="true"><span /><span /><span /></div><canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Индустриален 3D реактор на FactoryMind" /></div>;
}
