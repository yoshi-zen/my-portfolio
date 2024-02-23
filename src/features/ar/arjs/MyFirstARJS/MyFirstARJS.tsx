'use client';

import * as THREE from 'three';
import { THREEx } from '@ar-js-org/ar.js-threejs';
import { useEffect, useRef, useState } from 'react';

export const MyFirstARJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    // const renderer = new THREE.WebGLRenderer({
    //   antialias: true,
    //   alpha: true,
    // });
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvasRef.current as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(new THREE.Color('lightgrey'), 1);
    // renderer.setSize(640, 480);
    // renderer.domElement.style.position = 'absolute';
    // renderer.domElement.style.top = '0px';
    // renderer.domElement.style.left = '0px';
    // document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      640 / 480,
      0.01,
      20
    );
    camera.position.set(1, 1.5, 1.5);
    camera.lookAt(new THREE.Vector3(0, 0.5, 0));
    scene.add(camera);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2.4, 2, 5);
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xe5e5e5,
      opacity: 0.8,
    });
    const model = new THREE.Mesh(geometry, material);

    model.position.set(0, 1, 0);
    model.rotation.y = (Math.PI / 180) * -90;

    /* ARのとこ */
    const arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: 'camera_para.dat',
      detectionMode: 'mono',
    });

    arToolkitContext.init(() => {
      camera.projectionMatrix.copy(
        arToolkitContext.getProjectionMatrix()
      );
    });

    const arToolkitSource = new THREEx.ArToolkitSource({
      sourceType: 'webcam',
      sourceHeight: 480,
      sourceWidth: 640,
    });

    arToolkitSource.init(
      () => {
        document
          .getElementById('__next')
          ?.appendChild(arToolkitSource.domElement);
        setTimeout(() => {
          arToolkitSource.onResizeElement();
          arToolkitSource.copyElementSizeTo(
            renderer.domElement
          );
          document.body.style.opacity = '1';
        }, 2000);
      },
      () => {}
    );

    const markerRoot = new THREE.Group();
    markerRoot.add(model);
    scene.add(markerRoot);

    const arMarkerControls = new THREEx.ArMarkerControls(
      arToolkitContext,
      markerRoot,
      {
        type: 'pattern',
        patternUrl: 'pattern-marker.patt',
      }
    );

    arMarkerControls.addEventListener('markerFound', () => {
      setIsFound(true);
    });

    // レンダリング
    renderer.setAnimationLoop(() => {
      if (arToolkitSource.ready) {
        arToolkitContext.update(arToolkitSource.domElement);
      }
      renderer.render(scene, camera);
    });

    return () => renderer.setAnimationLoop(null);
  }, [canvasRef]);

  return (
    <div className='w-screen h-screen'>
      <canvas ref={canvasRef}></canvas>
      {!isFound && (
        <div className='absolute w-full h-full top-0 left-0 opacity-50 bg-black'>
          探せ
        </div>
      )}
    </div>
  );
};
