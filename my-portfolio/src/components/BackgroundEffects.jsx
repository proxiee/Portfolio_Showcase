import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';

// Tesseract Component
const TesseractObject = () => {
    const { theme } = useTheme();
    // const color = theme === 'dark' ? '#FFFFFF' : '#DCDCDC'; // To be replaced by CSS variable
    // const opacityValue = theme === 'dark' ? 0.5 : 0.1; // To be updated and moved
    const materialRef1 = useRef();
    const materialRef2 = useRef();

    const groupRef = useRef();
    const { mouse } = useThree();
    const rotationSpeed = useRef({ x: 0, y: 0 });

    useFrame(() => {
        if (groupRef.current) {
            const targetSpeedX = mouse.y * 0.5;
            const targetSpeedY = mouse.x * 0.5;
            rotationSpeed.current.x = THREE.MathUtils.lerp(rotationSpeed.current.x, targetSpeedX, 0.05);
            rotationSpeed.current.y = THREE.MathUtils.lerp(rotationSpeed.current.y, targetSpeedY, 0.05);
            groupRef.current.rotation.x += rotationSpeed.current.x * 0.01;
            groupRef.current.rotation.y += rotationSpeed.current.y * 0.01;
        }
    });

    useEffect(() => {
        const rootStyle = getComputedStyle(document.documentElement);
        const tesseractColorValue = rootStyle.getPropertyValue('--theme-tesseract-color').trim();
        const newOpacity = theme === 'dark' ? 0.5 : 0.6; // Updated light theme opacity

        if (materialRef1.current) {
            materialRef1.current.color.set(tesseractColorValue);
            materialRef1.current.opacity = newOpacity;
        }
        if (materialRef2.current) {
            materialRef2.current.color.set(tesseractColorValue);
            materialRef2.current.opacity = newOpacity;
        }
    }, [theme]); // Re-run when theme changes

    return (
        <group ref={groupRef}>
            <mesh>
                <boxGeometry args={[6.5, 6.5, 6.5]} />
                <meshStandardMaterial ref={materialRef1} wireframe transparent />
            </mesh>
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial ref={materialRef2} wireframe transparent />
            </mesh>
        </group>
    );
};

// Particles Component
const Particles = ({ count = 2000 }) => {
    const { theme } = useTheme();
    // const color = theme === 'dark' ? '#FFFFFF' : '#000000'; // To be replaced by CSS variable
    const materialRef = useRef();

    const pointsRef = useRef();
    const { viewport, mouse } = useThree();
    const lastMouse = useRef({ x: 0, y: 0 });

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * viewport.width;
            const y = (Math.random() - 0.5) * viewport.height;
            const z = (Math.random() - 0.5) * 20;
            const baseVelocity = new THREE.Vector3((Math.random() - 0.5) * 0.001, (Math.random() - 0.5) * 0.001, 0);
            temp.push({
                position: new THREE.Vector3(x, y, z),
                velocity: new THREE.Vector3(0, 0, 0),
                baseVelocity: baseVelocity
            });
        }
        return temp;
    }, [count, viewport]);

    useFrame(() => {
        const mouseVelocityX = mouse.x - lastMouse.current.x;
        const mouseVelocityY = mouse.y - lastMouse.current.y;
        const windVector = new THREE.Vector3(mouseVelocityX, mouseVelocityY, 0).multiplyScalar(0.2);
        lastMouse.current.x = mouse.x;
        lastMouse.current.y = mouse.y;

        if (pointsRef.current) {
            const positions = pointsRef.current.geometry.attributes.position.array;
            for (let i = 0; i < count; i++) {
                const particle = particles[i];
                const i3 = i * 3;
                particle.velocity.add(particle.baseVelocity);
                particle.velocity.add(windVector);
                particle.position.add(particle.velocity);
                particle.velocity.multiplyScalar(0.96);

                const halfWidth = viewport.width / 2;
                const halfHeight = viewport.height / 2;
                if (particle.position.x > halfWidth) particle.position.x = -halfWidth;
                if (particle.position.x < -halfWidth) particle.position.x = halfWidth;
                if (particle.position.y > halfHeight) particle.position.y = -halfHeight;
                if (particle.position.y < -halfHeight) particle.position.y = halfHeight;

                positions[i3] = particle.position.x;
                positions[i3 + 1] = particle.position.y;
                positions[i3 + 2] = particle.position.z;
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    const initialPositions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for(let i = 0; i < count; i++) {
            const i3 = i * 3;
            pos[i3] = particles[i].position.x;
            pos[i3+1] = particles[i].position.y;
            pos[i3+2] = particles[i].position.z;
        }
        return pos;
    }, [particles, count]);

    useEffect(() => {
        const rootStyle = getComputedStyle(document.documentElement);
        const particlesColorValue = rootStyle.getPropertyValue('--theme-particles-color').trim();

        if (materialRef.current) {
            materialRef.current.color.set(particlesColorValue);
        }
    }, [theme]); // Re-run when theme changes

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={initialPositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial ref={materialRef} size={0.02} sizeAttenuation={true} />
        </points>
    );
};


// Main Export Component
const BackgroundEffects = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
             <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5}/>
                <TesseractObject />
                <Particles />
            </Canvas>
        </div>
    );
};

export default BackgroundEffects;
