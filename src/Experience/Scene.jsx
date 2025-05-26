import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
const Scene = () => {
  const model = useGLTF("/models/castle.glb");
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} castShadow />
      <Suspense>
        <primitive
          object={model.scene}
          scale={0.0019}
          rotation={[Math.PI / 6, Math.PI / 5, 0]}
          position={[0, 0.5, 0]}
        />
        {/* <Room/> */}
      </Suspense>
    </>
  );
};

export default Scene;
