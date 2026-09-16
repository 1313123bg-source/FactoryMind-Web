'use client';

import { useEffect, useRef } from 'react';

export default function FactoryMindScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let frame = 0;
    let renderer: any;
    let scene: any;
    let camera: any;
    let cleanup = () => {};

    const start = async () => {
      const THREE = await import('three');
      const canvas = canvasRef.current;
      if (!canvas) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0, 0, 7.2);

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
      renderer.setClearColor(0x000000, 0);

      const root = new THREE.Group();
      const coreGroup = new THREE.Group();
      root.add(coreGroup);
      scene.add(root);

      scene.add(new THREE.AmbientLight(0xb9c7a0, 1.25));
      const key = new THREE.PointLight(0xd9ff3f, 22, 14);
      key.position.set(2.5, 2.5, 4);
      scene.add(key);
      const rim = new THREE.PointLight(0x7d8cff, 12, 12);
      rim.position.set(-3, -2, -2);
      scene.add(rim);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.02, 3),
        new THREE.MeshStandardMaterial({ color: 0x151812, metalness: 0.9, roughness: 0.2, emissive: 0x273118, emissiveIntensity: 0.8 })
      );
      coreGroup.add(core);

      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.3, 3)),
        new THREE.LineBasicMaterial({ color: 0xd9ff3f, transparent: true, opacity: 0.72 })
      );
      coreGroup.add(wire);

      const rings = [1.62, 2.02, 2.42].map((radius, index) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius, index === 2 ? 0.014 : 0.009, 8, 192),
          new THREE.MeshBasicMaterial({ color: index === 2 ? 0xd9ff3f : 0x9da78f, transparent: true, opacity: index === 2 ? 0.78 : 0.42 })
        );
        ring.rotation.set(index * 0.75, index * 0.48, index * 0.3);
        coreGroup.add(ring);
        return ring;
      });

      const particleCount = 900;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i += 1) {
        const radius = 2.35 + Math.random() * 2.4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.cos(phi);
        positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({ color: 0xc0ccad, size: 0.022, transparent: true, opacity: 0.72, sizeAttenuation: true })
      );
      root.add(particles);

      const nodeGroup = new THREE.Group();
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xd9ff3f, transparent: true, opacity: 0.95 });
      [
        [-2.2, 1.25, 0.25],
        [2.15, 0.6, -0.15],
        [-1.65, -1.55, 0.35],
        [1.35, -1.7, 0.1],
      ].forEach(([x, y, z], index) => {
        const node = new THREE.Mesh(new THREE.SphereGeometry(index % 2 ? 0.045 : 0.06, 12, 12), nodeMaterial);
        node.position.set(x, y, z);
        nodeGroup.add(node);
      });
      root.add(nodeGroup);

      const target = { x: 0, y: 0 };
      const current = { x: 0, y: 0 };
      const pointerMove = (event: PointerEvent) => {
        const rect = canvas.getBoundingClientRect();
        target.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
        target.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
      };
      const pointerLeave = () => { target.x = 0; target.y = 0; };

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

        root.rotation.y += 0.0015;
        particles.rotation.y -= 0.00035;
        particles.rotation.x += 0.00015;
        core.rotation.y += 0.0024;
        core.rotation.x += 0.0007;
        wire.rotation.y -= 0.0016;
        rings[0].rotation.z += 0.003;
        rings[1].rotation.x -= 0.002;
        rings[2].rotation.y += 0.0025;
        nodeGroup.rotation.y -= 0.001;

        root.rotation.y += (current.x * 0.22 - root.rotation.y) * 0.012;
        root.rotation.x += (-current.y * 0.13 - root.rotation.x) * 0.012;
        camera.position.x += (current.x * 0.35 - camera.position.x) * 0.018;
        camera.position.y += (-current.y * 0.22 - camera.position.y) * 0.018;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      resize();
      window.addEventListener('resize', resize);
      canvas.addEventListener('pointermove', pointerMove, { passive: true });
      canvas.addEventListener('pointerleave', pointerLeave, { passive: true });
      animate();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', resize);
        canvas.removeEventListener('pointermove', pointerMove);
        canvas.removeEventListener('pointerleave', pointerLeave);
        particleGeometry.dispose();
        renderer.dispose();
      };
    };

    start();
    return () => cleanup();
  }, []);

  return <canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Интерактивно 3D ядро на FactoryMind" />;
}
