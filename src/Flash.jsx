
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Flash(props) {
  const { nodes, materials } = useGLTF("/Flash.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.48}
      position = {[2,0,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Flash.glb");
