import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene, error } = useGLTF("./car/scene.gltf");

  if (error) {
    console.error("Error loading GLTF model:", error);
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={10.15} groundColor="black" />
      <spotLight
        position={[0, 0, 0]}
        angle={0}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />

      <primitive
        object={scene}
        scale={1}
        position={[0, -1, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Computers />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;