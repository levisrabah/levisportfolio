
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface SkillNodeProps {
  position: [number, number, number];
  name: string;
  color: string;
  speed?: number;
}

const SkillNode = ({ position, name, color, speed = 1 }: SkillNodeProps) => {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.lookAt(0, 0, 0);
    ref.current.position.y += Math.sin(t) * 0.002;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={ref} position={position}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.15}
          color={color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#00000030"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
};

// Generate positions on a sphere
const generatePositions = (count: number, radius: number) => {
  const positions: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    positions.push([x * radius, y * radius, z * radius]);
  }

  return positions;
};

const SkillsCloud = ({ skills }: { skills: string[] }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const positions = generatePositions(skills.length, 2.5);
  const primaryColor = "#0EA5E9"; // Electric blue
  
  useFrame(({ clock }) => {
    if (cameraRef.current) {
      const t = clock.getElapsedTime() * 0.1;
      cameraRef.current.position.x = Math.sin(t) * 4;
      cameraRef.current.position.z = Math.cos(t) * 4;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {skills.map((skill, i) => (
        <SkillNode
          key={skill}
          name={skill}
          position={positions[i]}
          color={primaryColor}
          speed={(i % 3) + 0.5}
        />
      ))}
    </>
  );
};

interface SkillsVisualizationProps {
  skills: string[];
  className?: string;
}

const SkillsVisualization = ({ skills, className = "" }: SkillsVisualizationProps) => {
  return (
    <div className={`w-full h-64 md:h-80 ${className}`}>
      <Canvas dpr={[1, 2]}>
        <SkillsCloud skills={skills} />
      </Canvas>
    </div>
  );
};

export default SkillsVisualization;
