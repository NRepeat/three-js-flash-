import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Flash } from "./Flash";




export const Sceen = () => { 
    return(
        <>
        <ambientLight intensity={0.1}/>
        <directionalLight 
        color='white'
        position={[15,15,15]} 
        castShadow 
        shadow-mapSize-width ={2048}  
        shadow-mapSize-hight ={2048} />
       <Flash/>
        </>
    );
};
