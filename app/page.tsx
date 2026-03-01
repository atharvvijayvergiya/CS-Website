"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

import TextModel from "@/src/components/ui/TextModel";
import { Skiper19 } from "@/src/components/ui/stroke";
import ImageHover from "@/src/components/common/ImageHover";
import CardStack from "@/src/components/common/CardStack";
import HorizontalGallery from "@/src/components/gallery/HorizontalGallery";
import TargetCursor from "@/src/components/common/TargetCursor";
import TeamCard from "@/src/components/common/TeamCard";

export default function Home() {
  return (
    <>
      {/* 🔥 3D HERO SECTION */}
      <section style={{ height: "100vh" }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={3} />

          <Suspense fallback={null}>
            <TextModel />
          </Suspense>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </section>

      {/* 🔥 Rest of website (normal scroll works now) */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <Skiper19 />
      <ImageHover />

      <TeamCard
        image="https://images.pexels.com/photos/34408249/pexels-photo-34408249.jpeg"
        name="John Doe"
        role="Lead Developer"
        socials={{
          linkedin: "https://linkedin.com/in/johndoe",
          twitter: "https://twitter.com/johndoe",
          github: "https://github.com/johndoe",
        }}
        className="w-[400px] h-[600px]"
      />

      <HorizontalGallery />
      <CardStack />
    </>
  );
}