import React, { useRef } from 'react';
import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Grid, useHelper } from "@react-three/drei";
import * as THREE from 'three';
import { Leva, useControls } from "leva";

/**
 * Box component that renders a 3D box with a helper grid.
 * It uses the Leva library to control the position, color, opacity, and transparency of the box.
 * @returns {JSX.Element} The rendered Box component.
 */
const Box = () => {
    // Create a reference for the mesh
    const ref = useRef();

    // Use the helper to create a box helper for the mesh
    useHelper(ref, THREE.BoxHelper, 'red')

    // Use the Leva library to control the position, color, opacity, and transparency of the box
    const { position, color, opacity, transparent } = useControls({
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
        color: "#ff0000",
        opacity: {
            value: 0.5,
            min: 0,
            max: 1,
            step: 0.01,
        },
        transparent: true,
    });

    return (
        // Render the mesh with the box geometry and basic material
        <mesh ref={ref} position={[position.x, position.y, position.z]} >
            <boxGeometry />
            <meshBasicMaterial color={color} transparent={transparent} opacity={opacity} />
        </mesh>
    );
};

/**
 * App component that renders the main application.
 * It includes a Leva panel for controlling the Box component, a Stats component for performance monitoring, and a Grid component for visual reference.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
    return (
        <>
            <Leva hidden />
            <Canvas camera={{ position: [3, 3, 3] }}>
                <Stats />
                <Grid
                    sectionSize={3}
                    sectionColor={"purple"}
                    sectionThickness={1}
                    cellSize={1}
                    cellColor={"#6f6f6f"}
                    cellThickness={0.6}
                    infiniteGrid
                    fadeDistance={50}
                    fadeStrength={5}
                />
                <Box />
            </Canvas>
        </>
    );
}

export default App;