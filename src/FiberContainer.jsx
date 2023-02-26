import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sceen } from "./Sceen";
import { Ground } from "./Ground";
import { Flash } from "./Flash";
export function FiberContainer(){
    return (
        <Canvas camera ={{position: [-Math.PI/0.5,4,5],fov :50 }}shadows>
            <Sceen />  
            <Ground/>
            <OrbitControls minDistance={1} maxDistance={200}/>     
        </Canvas>
    );
    }