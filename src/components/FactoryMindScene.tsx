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
        const canvas = canvasRef.current;
        if (!mounted || !canvas) return;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
        camera.position.set(0, 0.15, 9.4);
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.setClearColor(0x000000, 0);

        const root = new THREE.Group();
        const reactor = new THREE.Group();
        const machinery = new THREE.Group();
        root.add(reactor, machinery);
        scene.add(root);
        scene.add(new THREE.AmbientLight(0x9db8c8, 1.8));
        const cyanLight = new THREE.PointLight(0x54d9ff, 48, 22);
        cyanLight.position.set(4, 4, 5);
        scene.add(cyanLight);
        const orangeLight = new THREE.PointLight(0xff8b45, 30, 18);
        orangeLight.position.set(-4, -2, -3);
        scene.add(orangeLight);

        const metal = new THREE.MeshStandardMaterial({ color: 0x17232d, metalness: 0.96, roughness: 0.18, emissive: 0x0b2638, emissiveIntensity: 1.8 });
        const cyan = new THREE.MeshStandardMaterial({ color: 0x1b5369, metalness: 0.82, roughness: 0.2, emissive: 0x07516b, emissiveIntensity: 3.2 });
        const orange = new THREE.MeshStandardMaterial({ color: 0x7b351b, metalness: 0.78, roughness: 0.23, emissive: 0x6e260e, emissiveIntensity: 2.8 });
        const glow = (color: number, opacity = 0.85) => new THREE.LineBasicMaterial({ color, transparent: true, opacity });

        const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 4), metal);
        reactor.add(core);
        reactor.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.43, 3)), glow(0x54d9ff)));

        for (let i = 0; i < 8; i += 1) {
          const angle = i * Math.PI / 4;
          const beam = new THREE.Mesh(new THREE.BoxGeometry(0.18, 4.2, 0.28), i % 2 ? cyan : metal);
          beam.position.set(Math.cos(angle) * 1.72, Math.sin(angle) * 1.72, 0);
          beam.rotation.z = angle + Math.PI / 2;
          machinery.add(beam);
        }

        [1.65, 2.08, 2.52].forEach((radius, index) => {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, index === 2 ? 0.075 : 0.04, 12, 128), index === 2 ? orange : cyan);
          ring.rotation.set(index * 0.7, index * 0.45, index * 0.3);
          machinery.add(ring);
        });

        for (let i = 0; i < 16; i += 1) {
          const angle = i / 16 * Math.PI * 2;
          const module = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.24, 0.7), i % 4 === 0 ? orange : metal);
          module.position.set(Math.cos(angle) * 2.08, Math.sin(angle) * 2.08, Math.sin(angle * 2) * 0.3);
          module.rotation.z = angle;
          machinery.add(module);
        }

        for (let i = 0; i < 6; i += 1) {
          const angle = i / 6 * Math.PI * 2;
          const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.9, 0.08), cyan);
          arm.position.set(Math.cos(angle) * 1.45, Math.sin(angle) * 1.45, 0.45);
          arm.rotation.z = angle;
          reactor.add(arm);
        }

        const shockwaves = [1.25, 1.58].map((radius, index) => {
          const shockwave = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.026, 8, 128), glow(index ? 0xff9b52 : 0x9bdcff, 0.7));
          shockwave.rotation.x = Math.PI / 2;
          reactor.add(shockwave);
          return shockwave;
        });

        const particleCount = 1650;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i += 1) {
          const radius = 2.7 + Math.random() * 3.5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.cos(phi);
          positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0x9bdcff, size: 0.035, transparent: true, opacity: 0.9, sizeAttenuation: true }));
        root.add(particles);

        const satellites = new THREE.Group();
        [2.8, 3.25, 3.7, 4.1].forEach((radius, index) => {
          const satellite = new THREE.Mesh(new THREE.OctahedronGeometry(index === 1 ? 0.18 : 0.12, 1), index % 2 ? orange : cyan);
          satellite.userData = { radius, phase: index * 1.7, speed: 0.2 + index * 0.06 };
          satellites.add(satellite);
        });
        root.add(satellites);

        const nodePositions = [[-2.7, 1.6, 0.3], [2.6, 0.9, -0.2], [-2.1, -1.8, 0.4], [1.9, -2, 0.2], [0, 2.8, -0.4]];
        const nodes = new THREE.Group();
        nodePositions.forEach(([x, y, z], index) => {
          const node = new THREE.Mesh(new THREE.SphereGeometry(index === 4 ? 0.13 : 0.09, 16, 16), orange);
          node.position.set(x, y, z);
          nodes.add(node);
          reactor.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)]), glow(0x54d9ff, 0.5)));
        });
        root.add(nodes);

        const target = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };
        const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); target.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2; target.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2; };
        const leave = () => { target.x = 0; target.y = 0; };
        const resize = () => { const rect = canvas.getBoundingClientRect(); renderer.setSize(rect.width, rect.height, false); camera.aspect = rect.width / Math.max(rect.height, 1); camera.updateProjectionMatrix(); };
        const animate = () => {
          frame = requestAnimationFrame(animate);
          current.x += (target.x - current.x) * 0.045;
          current.y += (target.y - current.y) * 0.045;
          const time = performance.now() * 0.001;
          root.rotation.y = time * 0.1 + current.x * 0.2;
          root.rotation.x = -current.y * 0.12;
          core.rotation.y = time * 0.22;
          machinery.rotation.y = -time * 0.12;
          machinery.rotation.x = Math.sin(time * 0.3) * 0.12;
          shockwaves.forEach((shockwave, index) => { const pulse = (Math.sin(time * 1.8 + index * Math.PI) + 1) / 2; shockwave.scale.setScalar(0.82 + pulse * 0.4); shockwave.rotation.z = time * (index ? -0.45 : 0.6); });
          particles.rotation.y = -time * 0.025;
          satellites.rotation.x = time * 0.12;
          satellites.children.forEach((satellite: any) => { const angle = time * satellite.userData.speed + satellite.userData.phase; const radius = satellite.userData.radius; satellite.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.27) * radius * 0.62, Math.sin(angle) * radius); satellite.rotation.x = time * 1.4; satellite.rotation.y = time * 1.8; });
          cyanLight.intensity = 40 + Math.sin(time * 2.2) * 8;
          orangeLight.intensity = 24 + Math.cos(time * 1.7) * 5;
          camera.position.x += (current.x * 0.45 - camera.position.x) * 0.018;
          camera.position.y += (current.y * -0.28 + 0.15 - camera.position.y) * 0.018;
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        };
        resize();
        window.addEventListener('resize', resize);
        canvas.addEventListener('pointermove', move, { passive: true });
        canvas.addEventListener('pointerleave', leave, { passive: true });
        animate();
        cleanup = () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); canvas.removeEventListener('pointermove', move); canvas.removeEventListener('pointerleave', leave); scene.traverse((object: any) => { object.geometry?.dispose(); if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material: any) => material.dispose()); }); renderer.dispose(); renderer.forceContextLoss?.(); };
      } catch { if (mounted) setFailed(true); }
    };
    start();
    return () => { mounted = false; cleanup(); };
  }, []);

  return <div className={`fm-scene-shell${failed ? ' is-fallback' : ''}`} aria-label="Интерактивна индустриална 3D сцена на FactoryMind"><div className="fm-css-orb" aria-hidden="true"><span /><span /><span /></div><canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Индустриален 3D реактор на FactoryMind" /></div>;
}
