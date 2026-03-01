"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function TextModel() {
  const ref = useRef<THREE.Group | null>(null);
  const { scene } = useGLTF("/ieeecs.glb");

  // Center the model automatically
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.sub(center); // center it
    }
  }, [scene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // auto rotate for testing
    }
  });

  return <primitive ref={ref} object={scene} scale={2} />;
}