"use client";

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function TextModel() {
  const ref = useRef<THREE.Group | null>(null);
  const { scene } = useGLTF("/ieeecs.glb");

  // Auto center model
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  // Small idle rotation (for testing visibility)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} scale={8} />;
}