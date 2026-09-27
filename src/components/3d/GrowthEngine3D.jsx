"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Sparkles } from "@react-three/drei";

const engineNodes = [
  { name: "STRATEGY", angle: 0, color: "#8FE63B" },
  { name: "DESIGN", angle: (Math.PI / 3) * 1, color: "#20A85A" },
  { name: "DEVELOPMENT", angle: (Math.PI / 3) * 2, color: "#8FE63B" },
  { name: "MARKETING", angle: (Math.PI / 3) * 3, color: "#20A85A" },
  { name: "SEO", angle: (Math.PI / 3) * 4, color: "#8FE63B" },
  { name: "GROWTH", angle: (Math.PI / 3) * 5, color: "#20A85A" },
];

export default function GrowthEngine3D({ scrollProgress = 0 }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    // Rotation animation driven by time + scroll progress
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }

    if (coreRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  const radius = 2.4;

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Glowing Green 3D Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial
          color="#8FE63B"
          emissive="#8FE63B"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe Energy Shell */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshBasicMaterial color="#20A85A" wireframe opacity={0.6} transparent />
      </mesh>

      {/* Orbit Ring 1 */}
      <group ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <torusGeometry args={[radius, 0.02, 16, 64]} />
          <meshBasicMaterial color="#8FE63B" opacity={0.4} transparent />
        </mesh>
      </group>

      {/* Orbit Ring 2 */}
      <group rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[radius * 1.1, 0.015, 16, 64]} />
          <meshBasicMaterial color="#20A85A" opacity={0.3} transparent />
        </mesh>
      </group>

      {/* Orbiting Ecosystem Nodes */}
      {engineNodes.map((node) => {
        const x = Math.cos(node.angle) * radius;
        const z = Math.sin(node.angle) * radius;

        return (
          <Float key={node.name} speed={2} floatIntensity={0.3}>
            <group position={[x, 0, z]}>
              {/* Connecting Beam to Core */}
              <line>
                <bufferGeometry
                  attach="geometry"
                  onUpdate={(geo) =>
                    geo.setFromPoints([
                      new THREE.Vector3(0, 0, 0),
                      new THREE.Vector3(-x, 0, -z),
                    ])
                  }
                />
                <lineBasicMaterial color={node.color} opacity={0.3} transparent />
              </line>

              {/* Node Orb */}
              <mesh>
                <sphereGeometry args={[0.22, 16, 16]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.5}
                />
              </mesh>

              {/* Node Label Text */}
              <Text
                position={[0, 0.45, 0]}
                fontSize={0.16}
                color="#111817"
                font="https://fonts.gstatic.com/s/plusjakartasans/v8/L0x8DF4xlV4-Bf1DAu58-N443W_g68466e0.woff"
                anchorX="center"
                anchorY="middle"
              >
                {node.name}
              </Text>
            </group>
          </Float>
        );
      })}

      <Sparkles count={50} scale={[6, 6, 6]} size={2.5} speed={0.5} color="#8FE63B" />
    </group>
  );
}
