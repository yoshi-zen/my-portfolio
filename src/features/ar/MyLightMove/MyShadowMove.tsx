'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MyShadowMove = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // let mouseX = 0;
  // let mouseY = 0;

  const mouseX = useRef(0);
  const mouseY = useRef(0);

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

    // 光源の作成
    const light = new THREE.PointLight(0xffffff, 100, 100);
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

    // 地面を作成（？）
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
      // cube.rotation.z += 0.01;

      // マウス座標を使って光源の位置を更新
      light.position.x = mouseX.current * 10;
      light.position.y = mouseY.current * 10;

      renderer.render(scene, camera);
    };

    animate();

    // マウスの位置を取得
    const onMouseMove = (event: MouseEvent) => {
      mouseX.current =
        (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener(
      'mousemove',
      onMouseMove,
      false
    );

    return () => {
      document.removeEventListener(
        'mousemove',
        onMouseMove,
        false
      );
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef}></div>;
};
