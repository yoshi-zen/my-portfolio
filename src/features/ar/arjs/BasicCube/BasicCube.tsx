'use client';

import { THREEx } from '@ar-js-org/ar.js-threejs';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MyFirstAR = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(new THREE.Color('lightgrey'), 1);
    renderer.setSize(640, 480);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';
    document.body.appendChild(renderer.domElement);

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

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0xe5e5e5 })
    );
    box.position.set(0, 0.5, 0);
    scene.add(box);

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
      box.visible = true;
    });

    // レンダリング
    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef}></div>;
};
