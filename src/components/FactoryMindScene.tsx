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
        if (!mounted) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.set(0, 0.15, 8.5);
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
        renderer.setClearColor(0x000000, 0);

        const root = new THREE.Group();
        const coreGroup = new THREE.Group();
        root.add(coreGroup);
        scene.add(root);
        scene.add(new THREE.AmbientLight(0xb9c7a0, 1.4));
        const key = new THREE.PointLight(0x54d9ff, 35, 18);
        key.position.set(3, 3, 5);
        scene.add(key);
        const rim = new THREE.PointLight(0xff9b52, 18, 15);
        rim.position.set(-4, -2, -3);
        scene.add(rim);

        const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.02, 4), new THREE.MeshStandardMaterial({ color: 0x101b27, metalness: 0.96, roughness: 0.14, emissive: 0x123b52, emissiveIntensity: 1.8 }));
        coreGroup.add(core);
        const wire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.38, 3)), new THREE.LineBasicMaterial({ color: 0x54d9ff, transparent: true, opacity: 0.95 }));
        coreGroup.add(wire);

        const rings = [1.7, 2.15, 2.58].map((radius, index) => {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, index === 2 ? 0.025 : 0.014, 12, 256), new THREE.MeshBasicMaterial({ color: index === 2 ? 0xff9b52 : 0x54d9ff, transparent: true, opacity: index === 2 ? 0.95 : 0.58 }));
          ring.rotation.set(index * 0.8, index * 0.55, index * 0.35);
          coreGroup.add(ring);
          return ring;
        });

        const shockwaves = [1.25, 1.55].map((radius, index) => {
          const shockwave = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.018, 8, 160), new THREE.MeshBasicMaterial({ color: index ? 0xff9b52 : 0x9bdcff, transparent: true, opacity: 0.5 }));
          shockwave.rotation.x = Math.PI / 2;
          coreGroup.add(shockwave);
          return shockwave;
        });

        const particleCount = 1900;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i += 1) {
          const radius = 2.6 + Math.random() * 3.2;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.cos(phi);
          positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0x9bdcff, size: 0.024, transparent: true, opacity: 0.8, sizeAttenuation: true }));
        root.add(particles);

        const nodes = new THREE.Group();
        const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xff9b52 });
        const nodePositions = [[-2.65, 1.5, 0.3], [2.55, 0.85, -0.2], [-2, -1.75, 0.45], [1.8, -1.95, 0.15], [0.1, 2.65, -0.4]];
        nodePositions.forEach(([x, y, z], index) => {
          const node = new THREE.Mesh(new THREE.SphereGeometry(index === 4 ? 0.1 : 0.075, 18, 18), nodeMaterial);
          node.position.set(x, y, z);
          nodes.add(node);
        });
        root.add(nodes);

        const satellites = new THREE.Group();
        const satelliteMaterials = [new THREE.MeshBasicMaterial({ color: 0x54d9ff }), new THREE.MeshBasicMaterial({ color: 0xff9b52 })];
        [2.9, 3.35, 3.8].forEach((radius, index) => {
          const satellite = new THREE.Mesh(new THREE.OctahedronGeometry(index === 1 ? 0.12 : 0.085, 1), satelliteMaterials[index % 2]);
          satellite.userData.radius = radius;
          satellite.userData.phase = index * 2.1;
          satellite.userData.speed = 0.22 + index * 0.07;
          satellites.add(satellite);
        });
        root.add(satellites);

        const energyLines = new THREE.Group();
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x54d9ff, transparent: true, opacity: 0.42 });
        nodePositions.forEach(([x, y, z]) => {
          const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)]);
          energyLines.add(new THREE.Line(geometry, lineMaterial));
        });
        coreGroup.add(energyLines);

        const target = { x: 0, y: 0, scroll: 0 };
        const current = { x: 0, y: 0, scroll: 0 };
        const pointerMove = (event: PointerEvent) => {
          const rect = canvas.getBoundingClientRect();
          target.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
          target.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
        };
        const pointerLeave = () => { target.x = 0; target.y = 0; };
        const scrollMove = () => { target.scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 4); };
        const resize = () => { const rect = canvas.getBoundingClientRect(); renderer.setSize(rect.width, rect.height, false); camera.aspect = rect.width / Math.max(rect.height, 1); camera.updateProjectionMatrix(); };
        const animate = () => {
          frame = requestAnimationFrame(animate);
          current.x += (target.x - current.x) * 0.045;
          current.y += (target.y - current.y) * 0.045;
          current.scroll += (target.scroll - current.scroll) * 0.025;
          const time = performance.now() * 0.001;
          root.rotation.y = time * 0.12 + current.x * 0.2;
          root.rotation.x = -current.y * 0.12 + current.scroll * 0.025;
          core.rotation.y = time * 0.2;
          core.rotation.x = time * 0.06;
          wire.rotation.y = -time * 0.16;
          rings[0].rotation.z = time * 0.3;
          rings[1].rotation.x = -time * 0.2;
          rings[2].rotation.y = time * 0.24;
          shockwaves.forEach((shockwave, index) => {
            const pulse = (Math.sin(time * 1.8 + index * Math.PI) + 1) / 2;
            shockwave.scale.setScalar(0.82 + pulse * 0.38);
            shockwave.material.opacity = 0.16 + pulse * 0.45;
            shockwave.rotation.z = time * (index ? -0.45 : 0.6);
          });
          particles.rotation.y = -time * 0.025;
          particles.rotation.x = Math.sin(time * 0.16) * 0.08;
          nodes.rotation.y = -time * 0.06;
          energyLines.rotation.y = time * 0.08;
          satellites.rotation.x = time * 0.12;
          satellites.rotation.z = -time * 0.18;
          satellites.children.forEach((satellite: any) => {
            const angle = time * satellite.userData.speed + satellite.userData.phase;
            const radius = satellite.userData.radius;
            satellite.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.27) * radius * 0.62, Math.sin(angle) * radius);
            satellite.rotation.x = time * 1.4;
            satellite.rotation.y = time * 1.8;
          });
          key.intensity = 28 + Math.sin(time * 2.2) * 8;
          rim.intensity = 14 + Math.cos(time * 1.7) * 5;
          camera.position.x += (current.x * 0.42 - camera.position.x) * 0.018;
          camera.position.y += (-current.y * 0.26 - camera.position.y) * 0.018;
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        };
        resize();
        scrollMove();
        window.addEventListener('resize', resize);
        window.addEventListener('scroll', scrollMove, { passive: true });
        canvas.addEventListener('pointermove', pointerMove, { passive: true });
        canvas.addEventListener('pointerleave', pointerLeave, { passive: true });
        animate();
        cleanup = () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); window.removeEventListener('scroll', scrollMove); canvas.removeEventListener('pointermove', pointerMove); canvas.removeEventListener('pointerleave', pointerLeave); scene.traverse((object: any) => { if (object.geometry) object.geometry.dispose(); if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material: any) => material.dispose()); }); renderer.dispose(); renderer.forceContextLoss?.(); };
      } catch {
        if (mounted) setFailed(true);
      }
    };
    start();
    return () => { mounted = false; cleanup(); };
  }, []);

  return (
    <div className={`fm-scene-shell${failed ? ' is-fallback' : ''}`} aria-label="Интерактивна 3D сцена на FactoryMind">
      <div className="fm-css-orb" aria-hidden="true"><span /><span /><span /></div>
      <canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Интерактивно 3D ядро на FactoryMind" />
    </div>
  );
}
