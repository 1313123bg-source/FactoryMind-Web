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
      camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.2, 6.5);
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      renderer.setClearColor(0x000000, 0);
      const group = new THREE.Group();
      scene.add(group);
      scene.add(new THREE.AmbientLight(0xb9c7a0, 1.8));
      const light = new THREE.PointLight(0xd9ff3f, 18, 12);
      light.position.set(2, 2, 3);
      scene.add(light);
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 2), new THREE.MeshStandardMaterial({ color: 0x20241c, metalness: 0.8, roughness: 0.24, emissive: 0x263018, emissiveIntensity: 0.7 }));
      group.add(core);
      const wire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.28, 2)), new THREE.LineBasicMaterial({ color: 0xd9ff3f, transparent: true, opacity: 0.8 }));
      group.add(wire);
      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xd9ff3f, transparent: true, opacity: 0.55, side: THREE.DoubleSide });
      [1.65, 2.05, 2.45].forEach((radius, index) => { const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.008, 8, 160), ringMaterial); ring.rotation.set(index * 0.8, index * 0.55, index * 0.35); group.add(ring); });
      const points = new THREE.Points(new THREE.SphereGeometry(2.8, 28, 18), new THREE.PointsMaterial({ color: 0x9ba98b, size: 0.018, transparent: true, opacity: 0.65 }));
      group.add(points);
      const resize = () => { const rect = canvas.getBoundingClientRect(); renderer.setSize(rect.width, rect.height, false); camera.aspect = rect.width / Math.max(rect.height, 1); camera.updateProjectionMatrix(); };
      const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); group.rotation.y = ((event.clientX - rect.left) / rect.width - 0.5) * 0.7; group.rotation.x = ((event.clientY - rect.top) / rect.height - 0.5) * -0.45; };
      const animate = () => { frame = requestAnimationFrame(animate); core.rotation.y += 0.003; wire.rotation.y -= 0.002; points.rotation.y += 0.0007; renderer.render(scene, camera); };
      resize(); window.addEventListener('resize', resize); canvas.addEventListener('pointermove', move); animate();
      cleanup = () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); canvas.removeEventListener('pointermove', move); renderer.dispose(); };
    };
    start();
    return () => cleanup();
  }, []);

  return <canvas ref={canvasRef} className="fm-webgl-canvas" aria-label="Интерактивно 3D ядро на FactoryMind" />;
}
