/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: rivaiamin (https://sketchfab.com/rivaiamin)
License: CC-BY-ND-4.0 (http://creativecommons.org/licenses/by-nd/4.0/)
Source: https://sketchfab.com/3d-models/lost-programmer-43d32e4f459f4857a054579da61bb3d6
Title: Lost Programmer
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

export function Model(props) {
  const { nodes, materials } = useGLTF("../../scene.gltf");
  const groupref = useRef();
  console.log(groupref);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, degToRad(-90)]} ref={groupref}>
        <group position={[0, 0.752, -0.086]} rotation={[1.263, 0, 0]}>
          <primitive object={nodes.my_rig_rootJoint} />
          <skinnedMesh
            geometry={nodes.hair_0.geometry}
            material={materials.cloth}
            skeleton={nodes.hair_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.hair_1.geometry}
            material={materials.solidify}
            skeleton={nodes.hair_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me_0.geometry}
            material={materials.body}
            skeleton={nodes.me_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me_1.geometry}
            material={materials.solidify}
            skeleton={nodes.me_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me002_0.geometry}
            material={materials.cloth}
            skeleton={nodes.me002_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me002_1.geometry}
            material={materials.solidify}
            skeleton={nodes.me002_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.kemeja_0.geometry}
            material={materials.cloth}
            skeleton={nodes.kemeja_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.kemeja_1.geometry}
            material={materials.solidify}
            skeleton={nodes.kemeja_1.skeleton}
          />
        </group>
        <mesh
          geometry={nodes.Cube005_0.geometry}
          material={materials.laptop_tex}
          position={[-0.033, -0.442, -0.467]}
          rotation={[2.378, 0, 0]}
          scale={0.149}
        />
        <mesh
          geometry={nodes.bool1185_0.geometry}
          material={materials.Material}
          position={[2.403, 0.752, -0.428]}
          rotation={[-0.464, 0.296, -0.932]}
          scale={0.106}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../scene.gltf");
