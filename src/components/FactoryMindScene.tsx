'use client';

import { useEffect, useRef } from 'react';

export default function FactoryMindScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let frame = 0;
    let mounted = true;
    let renderer: any;
    let scene: any;
    let camera: any;
    let cleanup = () => {};

    const start = async () => {
      const THREE = await import('three');
      if (!mounted) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.15, 8.5);

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setClearColor(0x000000, 0);

      const root = new THREE.Group();
      const coreGroup = new THREE.Group();
      root.add(coreGroup);
      scene.add(root);

      scene.add(new THREE.AmbientLight(0xb9c7a0, 1.4));
      const key = new THREE.PointLight(0xd9ff3f, 28, 18);
      key.position.set(3, 3, 5);
      scene.add(key);
      const rim = new THREE.PointLight(0x6875ff, 15, 15);
      rim.position.set(-4, -2, -3);
      scene.add(rim);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.02, 4),
        new THREE.MeshStandardMaterial({ color: 0x10130e, metalness: 0.95, roughness: 0.18, emissive: 0x273118, emissiveIntensity: 1.1 })
      );
      coreGroup.add(core);

      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.34, 3)),
        new THREE.LineBasicMaterial({ color: 0xd9ff3f, transparent: true, opacity: 0.82 })
      );
      coreGroup.add(wire);

      const rings = [1.7, 2.15, 2.58].map((radius, index) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius, index === 2 ? 0.016 : 0.009, 8, 256),
          new THREE.MeshBasicMaterial({ color: index === 2 ? 0xd9ff3f : 0xaab49a, transparent: true, opacity: index === 2 ? 0.85 : 0.38 })
        );
        ring.rotation.set(index * 0.8, index * 0.55, index * 0.35);
        coreGroup.add(ring);
        return ring;
      });

      const particleCount = 1200;
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
      const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xc4ceb4, size: 0.018, transparent: true, opacity: 0.65, sizeAttenuation: true }));
      root.add(particles);

      const nodes = new THREE.Group();
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xd9ff3f });
      [[-2.65, 1.5, 0.3], [2.55, 0.85, -0.2], [-2, -1.75, 0.45], [1.8, -1.95, 0.15], [0.1, 2.65, -0.4]].forEach(([x, y, z], index) => {
        const node = new THREE.Mesh(new THREE.SphereGeometry(index === 4 ? 0.075 : 0.055, 14, 14), nodeMaterial);
        node.position.set(x, y, z);
        nodes.add(node);
      });
      root.add(nodes);

      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xd9ff3f, transparent: true, opacity: 0.3 });
      const lines = new THREE.Group();
      [[-2.65,1.5,0.3,0,0,0],[2.55,0.85,-0.2,0,0,0],[-2,-1.75,0.45,0,0,0],[1.8,-1.95,0.15,0,0,0],[0.1,2.65,-0.4,0,0,0]].forEach(([x,y,z]) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,y,z), new THREE.Vector3(x * 0.34,y * 0.34,z * 0.34)]);
        lines.add(new THREE.Line(geometry, lineMaterial));
      });
      root.add(lines);

      const target = { x: 0, y: 0, scroll: 0 };
      const current = { x: 0, y: 0, scroll: 0 };
      const pointerMove = (event: PointerEvent) => {
        const rect = canvas.getBoundingClientRect();
        target.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
        target.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
      };
      const pointerLeave = () => { target.x = 0; target.y = 0; };
      const scrollMove = () => { target.scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 4); };

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / Math.max(rect.height, 1);
        camera.updateProjectionMatrix();
      };

      const animate = () => {
        frame = requestAnimationFrame(animate);
        current.x += (target.x - current.x) * 0.045;
        current.y += (target.y - current.y) * 0.045;
        current.scroll += (target.scroll - current.scroll) * 0.025;

        const time = performance.now() * 0.001;
        root.rotation.y = time * 0.09 + current.x * 0.2;
        root.rotation.x = -current.y * 0.12 + current.scroll * 0.025;
        root.position.z = Math.sin(time * 0.45) * 0.08 - current.scroll * 0.08;
        core.rotation.y = time * 0.16;
        core.rotation.x = time * 0.045;
        wire.rotation.y = -time * 0.11;
        rings[0].rotation.z = time * 0.22;
        rings[1].rotation.x = -time * 0.14;
        rings[2].rotation.y = time * 0.18;
        particles.rotation.y = -time * 0.018;
        particles.rotation.x = time * 0.009;
        nodes.rotation.y = -time * 0.045;
        lines.rotation.y = -time * 0.045;

        camera.position.x += (current.x * 0.42 - camera.position.x) * 0.018;
        camera.position.y += (-current.y * 0.26 + current.scroll * 0.03 - camera.position.y) * 0.018;
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

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', resize);
        window.removeEventListener('scroll', scrollMove);
        canvas.removeEventListener('pointermove', pointerMove);
        canvas.removeEventListener('pointerleave', pointerLeave);
        particleGeometry.dispose();
        renderer.dispose();
      };
    };

    start();
    return () => { mounted = false; cleanup(); };
  }, []);

  return <canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Интерактивно 3D ядро на FactoryMind" />;
}
