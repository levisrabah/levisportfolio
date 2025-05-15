
import { useRef, useEffect } from "react";
import { useThree, Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

// Cube component with floating animation
const FloatingCube = ({ position, color, size, speed = 1 }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.1;
    mesh.current.rotation.x = Math.sin(t / 4) / 4;
    mesh.current.rotation.y = Math.sin(t / 4) / 4;
    mesh.current.rotation.z = Math.sin(t / 4) / 4;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Scene setup with camera controls
const Scene = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <FloatingCube position={[-1, 0, 0]} color="#0EA5E9" size={[0.6, 0.6, 0.6]} speed={1} />
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <FloatingCube position={[1, 0, 0]} color="#0EA5E9" size={[0.3, 0.3, 0.3]} speed={1.5} />
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <FloatingCube position={[0, 1, 0]} color="#0EA5E9" size={[0.4, 0.4, 0.4]} speed={2} />
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
