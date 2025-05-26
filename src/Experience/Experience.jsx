import React from "react";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <Canvas>
        <OrbitControls/>
        <Scene />
      </Canvas>
    </>
  );
};

export default Experience;
