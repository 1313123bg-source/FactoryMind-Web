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
        camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
        camera.position.set(0, 0, 8.8);
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);

        const stage = new THREE.Group();
        const coreGroup = new THREE.Group();
        const orbitGroup = new THREE.Group();
        stage.add(coreGroup, orbitGroup);
        scene.add(stage);

        scene.add(new THREE.AmbientLight(0x9bb8c8, 1.7));
        const cyanLight = new THREE.PointLight(0x43d9ff, 42, 18);
        cyanLight.position.set(3.5, 2.8, 4);
        scene.add(cyanLight);
        const orangeLight = new THREE.PointLight(0xff8b45, 18, 14);
        orangeLight.position.set(-3, -2, 1);
        scene.add(orangeLight);

        const metal = new THREE.MeshStandardMaterial({ color: 0x17232c, metalness: 0.95, roughness: 0.2, emissive: 0x08202d, emissiveIntensity: 1.4 });
        const cyan = new THREE.MeshStandardMaterial({ color: 0x16718c, metalness: 0.8, roughness: 0.18, emissive: 0x087a9d, emissiveIntensity: 2.6 });
        const orange = new THREE.MeshStandardMaterial({ color: 0x8b3b1b, metalness: 0.75, roughness: 0.22, emissive: 0x7d2b0b, emissiveIntensity: 2.2 });
        const line = (color: number, opacity = 0.65) => new THREE.LineBasicMaterial({ color, transparent: true, opacity });

        const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.12, 3), metal);
        coreGroup.add(core);
        const coreWire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.28, 2)), line(0x7be6ff, 0.8));
        coreGroup.add(coreWire);

        const innerGlow = new THREE.Mesh(new THREE.SphereGeometry(0.82, 32, 32), new THREE.MeshBasicMaterial({ color: 0x0b91b9, transparent: true, opacity: 0.16 }));
        coreGroup.add(innerGlow);

        [1.55, 1.95, 2.38].forEach((radius, index) => {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, index === 2 ? 0.045 : 0.028, 10, 128), index === 2 ? orange : cyan);
          ring.rotation.set(index * 0.58, index * 0.42, index * 0.26);
          orbitGroup.add(ring);
        });

        for (let i = 0; i < 8; i += 1) {
          const angle = (i / 8) * Math.PI * 2;
          const arm = new THREE.Mesh(new THREE.BoxGeometry(0.075, 2.95, 0.075), i % 2 ? cyan : metal);
          arm.position.set(Math.cos(angle) * 1.48, Math.sin(angle) * 1.48, 0.12);
          arm.rotation.z = angle;
          coreGroup.add(arm);
        }

        for (let i = 0; i < 12; i += 1) {
          const angle = (i / 12) * Math.PI * 2;
          const module = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.46), i % 4 === 0 ? orange : metal);
          module.position.set(Math.cos(angle) * 2.02, Math.sin(angle) * 2.02, Math.sin(angle * 2) * 0.18);
          module.rotation.z = angle;
          orbitGroup.add(module);
        }

        const nodePositions = [[-2.65, 1.45, 0.2], [2.55, 0.8, -0.2], [-2.1, -1.65, 0.1], [2.05, -1.7, 0.2]];
        nodePositions.forEach(([x, y, z], index) => {
          const node = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 16), index % 2 ? orange : cyan);
          node.position.set(x, y, z);
          orbitGroup.add(node);
          orbitGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)]), line(index % 2 ? 0xff9b52 : 0x54d9ff, 0.34)));
        });

        const particleCount = 650;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i += 1) {
          const radius = 2.8 + Math.random() * 2.5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.cos(phi);
          positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0x8bdcff, size: 0.025, transparent: true, opacity: 0.65 }));
        stage.add(particles);

        const target = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };
        const move = (event: PointerEvent) => {
          const rect = canvas.getBoundingClientRect();
          target.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
          target.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
        };
        const leave = () => { target.x = 0; target.y = 0; };
        const resize = () => {
          const rect = canvas.getBoundingClientRect();
          renderer.setSize(rect.width, rect.height, false);
          camera.aspect = rect.width / Math.max(rect.height, 1);
          camera.updateProjectionMatrix();
        };
        const animate = () => {
          frame = requestAnimationFrame(animate);
          const time = performance.now() * 0.001;
          current.x += (target.x - current.x) * 0.04;
          current.y += (target.y - current.y) * 0.04;
          stage.rotation.y = time * 0.08 + current.x * 0.14;
          stage.rotation.x = -current.y * 0.08;
          core.rotation.y = time * 0.18;
          coreWire.rotation.y = -time * 0.12;
          orbitGroup.rotation.y = -time * 0.1;
          orbitGroup.rotation.x = Math.sin(time * 0.25) * 0.08;
          particles.rotation.y = -time * 0.018;
          innerGlow.scale.setScalar(0.94 + Math.sin(time * 1.8) * 0.045);
          cyanLight.intensity = 38 + Math.sin(time * 1.8) * 5;
          camera.position.x += (current.x * 0.3 - camera.position.x) * 0.02;
          camera.position.y += (current.y * -0.18 - camera.position.y) * 0.02;
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        };

        resize();
        window.addEventListener('resize', resize);
        canvas.addEventListener('pointermove', move, { passive: true });
        canvas.addEventListener('pointerleave', leave, { passive: true });
        animate();
        cleanup = () => {
          cancelAnimationFrame(frame);
          window.removeEventListener('resize', resize);
          canvas.removeEventListener('pointermove', move);
          canvas.removeEventListener('pointerleave', leave);
          scene.traverse((object: any) => {
            object.geometry?.dispose();
            if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material: any) => material.dispose());
          });
          renderer.dispose();
          renderer.forceContextLoss?.();
        };
      } catch { if (mounted) setFailed(true); }
    };
    start();
    return () => { mounted = false; cleanup(); };
  }, []);

  return <div className={`fm-scene-shell${failed ? ' is-fallback' : ''}`} aria-label="Интерактивна индустриална 3D сцена на FactoryMind"><div className="fm-css-orb" aria-hidden="true"><span /><span /><span /></div><canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Индустриално ядро на FactoryMind" /></div>;
}
