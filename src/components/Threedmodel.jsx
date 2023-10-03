import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Model } from "./Scene.jsx";
import Loading from "./Loading.jsx";
import { degToRad } from "three/src/math/MathUtils.js";

const Threedmodel = () => {
  return (
    <Canvas>
      <ProgLostInSpace />
    </Canvas>
  );
};

const ProgLostInSpace = () => {
  const orbitRef = useRef();

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.setAzimuthalAngle(degToRad(state.mouse.x * 10));
      orbitRef.current.setPolarAngle(degToRad(90 + state.mouse.y * 10));
    }
  });

  return (
    <Suspense fallback={<Loading />}>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <OrbitControls ref={orbitRef} />
      <Model />
    </Suspense>
  );
};
export default Threedmodel;
