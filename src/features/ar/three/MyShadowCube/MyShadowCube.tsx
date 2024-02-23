'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MyShadowCube = () => {
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

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7);
    scene.add(light);

    // 影を受けるオブジェクト
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff0000,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true; // 影をキャストする設定
    scene.add(cube);

    // 地面を作成
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.ShadowMaterial({
      opacity: 0.5,
    }); // 影のマテリアル
    const ground = new THREE.Mesh(
      groundGeometry,
      groundMaterial
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1; // 地面の位置
    ground.receiveShadow = true; // 影を受け入れる設定
    scene.add(ground);

    // レンダラーの設定
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    camera.position.z = 2;

    // レンダリング
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef}></div>;
};
