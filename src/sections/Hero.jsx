import React from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Astronaut from "../components/Astronaut";
// import { SpinningText } from './SpinningText'

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <Astronaut />
      <ParallaxBackground />

      {/* <SpinningText text="Rishangi yadav!" className="absolute top-20 left-1/2 -translate-x-1/2 z-10" /> */}

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <OrbitControls />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
