'use client';

import { useEffect, useRef, useState } from 'react';

export default function FactoryMindScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let frame = 0, mounted = true, renderer: any, scene: any, camera: any, cleanup = () => {};
    const start = async () => {
      try {
        const THREE = await import('three'); const canvas = canvasRef.current; if (!mounted || !canvas) return;
        scene = new THREE.Scene(); camera = new THREE.PerspectiveCamera(34, 1, .1, 100); camera.position.set(5.8,3.9,8.6);
        renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'}); renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)); renderer.setClearColor(0,0);
        scene.add(new THREE.HemisphereLight(0x9ac9e8,0x02070d,1.7)); const blue=new THREE.PointLight(0x25b9ff,35,16); blue.position.set(1,5,3); scene.add(blue);
        const warm=new THREE.PointLight(0xff873f,18,12); warm.position.set(-4,2,-2); scene.add(warm);
        const root=new THREE.Group(); root.rotation.y=-.18; scene.add(root);
        const floor=new THREE.Mesh(new THREE.PlaneGeometry(16,11),new THREE.MeshStandardMaterial({color:0x07131d,metalness:.8,roughness:.35})); floor.rotation.x=-Math.PI/2; floor.position.y=-.65; root.add(floor);
        const grid=new THREE.GridHelper(16,32,0x15516d,0x0d2938); grid.position.y=-.63; grid.material.transparent=true; grid.material.opacity=.45; root.add(grid);
        const belt=new THREE.Group(); belt.position.set(.5,-.35,.1); root.add(belt);
        const beltMat=new THREE.MeshStandardMaterial({color:0x0d202d,metalness:.8,roughness:.28}); const edgeMat=new THREE.MeshStandardMaterial({color:0x1b7da7,metalness:.75,roughness:.2,emissive:0x064b69,emissiveIntensity:1.8});
        belt.add(new THREE.Mesh(new THREE.BoxGeometry(7,.32,2.15),beltMat)); [-.95,.95].forEach(z=>{const r=new THREE.Mesh(new THREE.BoxGeometry(7,.14,.12),edgeMat);r.position.set(0,.25,z);belt.add(r)});
        for(let i=0;i<12;i++){const r=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,2,16),edgeMat);r.rotation.x=Math.PI/2;r.position.set(-3.1+i*.56,.02,0);belt.add(r)}
        const boxMat=new THREE.MeshStandardMaterial({color:0x123b54,metalness:.5,roughness:.22,emissive:0x06324c,emissiveIntensity:1.4}); const boxGlow=new THREE.MeshStandardMaterial({color:0x126d98,metalness:.45,roughness:.2,emissive:0x098ec5,emissiveIntensity:2.5}); const boxes:any[]=[];
        for(let i=0;i<7;i++){const g=new THREE.Group();g.add(new THREE.Mesh(new THREE.BoxGeometry(.68,.62,.72),i%3===0?boxGlow:boxMat));g.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(.7,.64,.74)),new THREE.LineBasicMaterial({color:0x64d8ff,transparent:true,opacity:.55})));g.position.set(-3+i*1.05,.2,.05);belt.add(g);boxes.push(g)}
        const robot=new THREE.Group();robot.position.set(2.15,0,-.95);root.add(robot); const base=new THREE.Mesh(new THREE.CylinderGeometry(.55,.7,.35,32),edgeMat);base.position.y=-.3;robot.add(base);
        const joint1=new THREE.Group();joint1.position.y=-.05;robot.add(joint1); const armMat=new THREE.MeshStandardMaterial({color:0x52616c,metalness:.9,roughness:.22});
        const upper=new THREE.Mesh(new THREE.BoxGeometry(.38,2,.38),armMat);upper.position.y=.72;upper.rotation.z=-.35;joint1.add(upper); const joint2=new THREE.Group();joint2.position.set(.34,1.58,0);joint1.add(joint2);
        const fore=new THREE.Mesh(new THREE.BoxGeometry(.32,1.55,.32),armMat);fore.position.y=.65;fore.rotation.z=.65;joint2.add(fore); const hand=new THREE.Mesh(new THREE.BoxGeometry(.6,.22,.5),edgeMat);hand.position.set(.2,1.34,0);joint2.add(hand);
        const claw1=new THREE.Mesh(new THREE.BoxGeometry(.12,.55,.12),edgeMat);claw1.position.set(.42,1.58,.16);claw1.rotation.z=-.25;joint2.add(claw1);const claw2=claw1.clone();claw2.position.z=-.16;joint2.add(claw2);
        const beamMat=new THREE.MeshStandardMaterial({color:0x244152,metalness:.8,roughness:.25,emissive:0x06202d,emissiveIntensity:1.1}); const overhead=new THREE.Mesh(new THREE.BoxGeometry(7,.16,.16),beamMat);overhead.position.set(0,2.7,0);root.add(overhead);
        for(let x=-2.4;x<=2.4;x+=1.2){const light=new THREE.Mesh(new THREE.BoxGeometry(.55,.08,.2),new THREE.MeshBasicMaterial({color:0xb9ecff}));light.position.set(x,2.55,.1);root.add(light)}
        const pg=new THREE.BufferGeometry(), pos=new Float32Array(500*3); for(let i=0;i<500;i++){pos[i*3]=(Math.random()-.5)*10;pos[i*3+1]=Math.random()*5-1;pos[i*3+2]=(Math.random()-.5)*5} pg.setAttribute('position',new THREE.BufferAttribute(pos,3)); const points=new THREE.Points(pg,new THREE.PointsMaterial({color:0x64d8ff,size:.018,transparent:true,opacity:.55}));root.add(points);
        const target={x:0,y:0},cur={x:0,y:0}; const move=(e:PointerEvent)=>{const r=canvas.getBoundingClientRect();target.x=((e.clientX-r.left)/Math.max(r.width,1)-.5)*2;target.y=((e.clientY-r.top)/Math.max(r.height,1)-.5)*2}; const leave=()=>{target.x=0;target.y=0};
        const resize=()=>{const r=canvas.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/Math.max(r.height,1);camera.updateProjectionMatrix()};
        const animate=()=>{frame=requestAnimationFrame(animate);const t=performance.now()*.001;cur.x+=(target.x-cur.x)*.04;cur.y+=(target.y-cur.y)*.04;root.rotation.y=-.18+t*.025+cur.x*.09;root.rotation.x=cur.y*.035;
          boxes.forEach((g,i)=>{g.position.x=-3.5+((i*1.15+t*.55)%7);g.position.y=.2+Math.sin(t*2+i)*.025}); belt.children.forEach((o:any,i:number)=>{if(i>2)o.rotation.z=t*1.5});
          joint1.rotation.z=Math.sin(t*.65)*.13-.28;joint2.rotation.z=Math.sin(t*.9+.8)*.2+.62;hand.position.y=1.3+Math.sin(t*.9)*.06;points.rotation.y=t*.012;blue.intensity=31+Math.sin(t*2)*5;
          camera.position.x=5.8+cur.x*.45;camera.position.y=3.9-cur.y*.25;camera.lookAt(.3,.55,0);renderer.render(scene,camera)};
        resize();addEventListener('resize',resize);canvas.addEventListener('pointermove',move,{passive:true});canvas.addEventListener('pointerleave',leave,{passive:true});animate();
        cleanup=()=>{cancelAnimationFrame(frame);removeEventListener('resize',resize);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerleave',leave);scene.traverse((o:any)=>{o.geometry?.dispose();if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach((m:any)=>m.dispose())});renderer.dispose();renderer.forceContextLoss?.()};
      } catch {if(mounted)setFailed(true)}
    }; start(); return ()=>{mounted=false;cleanup()};
  },[]);
  return <div className={'fm-scene-shell'+(failed?' is-fallback':'')}><canvas ref={canvasRef} className='fm-webgl-canvas' aria-label='3D производствена линия и роботизирана ръка'/></div>;
}
