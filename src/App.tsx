import {Canvas} from "@react-three/fiber";

function App() {
    return (
        <Canvas camera={{position: [0, 2, -6]}} shadows>
            <mesh position={[-3, 0, 0]}>
                <boxGeometry/>
                <meshStandardMaterial color="red"/>
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry/>
                <meshStandardMaterial color="blue"/>
            </mesh>
            <mesh position={[3, 0, 0]}>
                <boxGeometry/>
                <meshStandardMaterial color="green"/>
            </mesh>

            <ambientLight intensity={0.5}/>
            <directionalLight position={[0, 0, 3]} intensity={1}/>
            <directionalLight position={[0, 3, 3]} intensity={0.5}/>
        </Canvas>
    );
}

export default App;