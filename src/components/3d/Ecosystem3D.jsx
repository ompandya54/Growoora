"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const networkNodes = [
  { id: "web", name: "WEB", angle: 0, color: "#8FE63B" },
  { id: "app", name: "APP", angle: (Math.PI / 3) * 1, color: "#20A85A" },
  { id: "seo", name: "SEO", angle: (Math.PI / 3) * 2, color: "#8FE63B" },
  { id: "marketing", name: "MARKETING", angle: (Math.PI / 3) * 3, color: "#20A85A" },
  { id: "branding", name: "BRANDING", angle: (Math.PI / 3) * 4, color: "#8FE63B" },
  { id: "design", name: "DESIGN", angle: (Math.PI / 3) * 5, color: "#20A85A" },
];

export default function Ecosystem3D({ activeId, onHoverNode }) {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />

      {/* Center GROOWORA Core Node */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#111817"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.78, 32, 32]} />
        <meshBasicMaterial color="#8FE63B" wireframe opacity={0.5} transparent />
      </mesh>
      <Text
        position={[0, 0, 0.8]}
        fontSize={0.18}
        color="#8FE63B"
        font="https://fonts.gstatic.com/s/plusjakartasans/v8/L0x8DF4xlV4-Bf1DAu58-N443W_g68466e0.woff"
        anchorX="center"
        anchorY="middle"
      >
        GROOWORA
      </Text>

      {/* Orbiting Satellite Nodes */}
      {networkNodes.map((node) => {
        const isActive = activeId === node.id;
        const radius = isActive ? 1.4 : 2.5;
        const x = Math.cos(node.angle) * radius;
        const z = Math.sin(node.angle) * radius;

        return (
          <Float key={node.id} speed={2} floatIntensity={0.2}>
            <group
              position={[x, 0, z]}
              onPointerOver={() => onHoverNode && onHoverNode(node.id)}
              onPointerOut={() => onHoverNode && onHoverNode(null)}
            >
              {/* Connection Beam Line to Center */}
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
                <lineBasicMaterial
                  color={isActive ? "#8FE63B" : "#20A85A"}
                  opacity={isActive ? 1 : 0.25}
                  transparent
                  linewidth={isActive ? 3 : 1}
                />
              </line>

              {/* Node Mesh */}
              <mesh scale={isActive ? [1.3, 1.3, 1.3] : [1, 1, 1]}>
                <sphereGeometry args={[0.24, 16, 16]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={isActive ? 1 : 0.3}
                />
              </mesh>

              {/* Text Label */}
              <Text
                position={[0, 0.4, 0]}
                fontSize={0.15}
                color={isActive ? "#8FE63B" : "#111817"}
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

      <Sparkles count={40} scale={[7, 7, 7]} size={2} speed={0.4} color="#8FE63B" />
    </group>
  );
}
