'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MyFirstAR = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // three.js 初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer(); // divの子供に「canvasを追加」するためのレンダラー
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (!containerRef.current)
      throw Error('containerRef is not assigned');
    containerRef.current.appendChild(renderer.domElement);

    // 3Dオブジェクトの作成
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // レンダリング
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef}></div>;
};
