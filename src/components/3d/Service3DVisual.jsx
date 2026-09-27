"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles, Ring } from "@react-three/drei";
import * as THREE from "three";

export default function Service3DVisual({ type, isHovered, activeProgress = 1 }) {
  const meshRef = useRef(null);
  const coreRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Dynamic rotation physics
      const speed = isHovered ? 2.2 : 0.8;
      meshRef.current.rotation.y += delta * speed * 0.6;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }

    if (coreRef.current) {
      coreRef.current.rotation.z += delta * 0.5;
    }
  });

  // Render object geometry based on service type
  const renderVisual = () => {
    switch (type) {
      case "web":
        // 3D Glass Browser Window Frame with glowing neon code bars
        return (
          <group ref={meshRef}>
            <RoundedBox args={[2.4, 1.6, 0.18]} radius={0.1} smoothness={5}>
              <meshPhysicalMaterial
                color="#FFFFFF"
                roughness={0.1}
                metalness={0.1}
                clearcoat={1}
                clearcoatRoughness={0.1}
                transmission={0.2}
              />
            </RoundedBox>
            {/* Header Toolbar & Dots */}
            <mesh position={[-0.9, 0.6, 0.1]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#FF5F56" />
            </mesh>
            <mesh position={[-0.7, 0.6, 0.1]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#FFBD2E" />
            </mesh>
            <mesh position={[-0.5, 0.6, 0.1]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#27C93F" />
            </mesh>

            {/* Glowing Code Bars */}
            <mesh position={[0.1, 0.15, 0.1]}>
              <boxGeometry args={[1.7, 0.12, 0.04]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[-0.2, -0.12, 0.1]}>
              <boxGeometry args={[1.1, 0.1, 0.04]} />
              <meshStandardMaterial color="#111817" />
            </mesh>
            <mesh position={[-0.4, -0.38, 0.1]}>
              <boxGeometry args={[0.7, 0.1, 0.04]} />
              <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );

      case "app":
        // 3D Metallic Smartphone Frame
        return (
          <group ref={meshRef}>
            <RoundedBox args={[1.2, 2.3, 0.2]} radius={0.14} smoothness={5}>
              <meshStandardMaterial color="#111817" roughness={0.15} metalness={0.85} />
            </RoundedBox>
            {/* Screen */}
            <mesh position={[0, 0, 0.11]}>
              <planeGeometry args={[1.05, 2.1]} />
              <meshStandardMaterial color="#0A0F0D" roughness={0.1} />
            </mesh>
            {/* Dynamic UI Cards */}
            <mesh position={[0, 0.45, 0.13]}>
              <boxGeometry args={[0.85, 0.55, 0.03]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.6} />
            </mesh>
            <mesh position={[0, -0.28, 0.13]}>
              <boxGeometry args={[0.85, 0.75, 0.03]} />
              <meshStandardMaterial color="#20A85A" roughness={0.2} />
            </mesh>
          </group>
        );

      case "seo":
        // 3D Glass Search Lens & Upward Rocket Curve
        return (
          <group ref={meshRef}>
            <mesh position={[-0.2, 0.2, 0]}>
              <torusGeometry args={[0.75, 0.14, 16, 32]} />
              <meshPhysicalMaterial
                color="#20A85A"
                roughness={0.1}
                metalness={0.4}
                clearcoat={1}
                emissive="#20A85A"
                emissiveIntensity={0.3}
              />
            </mesh>
            {/* Handle */}
            <mesh position={[0.55, -0.65, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <cylinderGeometry args={[0.09, 0.09, 1.0, 16]} />
              <meshStandardMaterial color="#111817" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Organic Growth Arrow */}
            <mesh position={[-0.2, 0.2, 0.12]}>
              <boxGeometry args={[0.9, 0.12, 0.04]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.9} />
            </mesh>
          </group>
        );

      case "marketing":
        // 3D Analytics Pillars Chart
        return (
          <group ref={meshRef}>
            <mesh position={[-0.75, -0.35, 0]}>
              <boxGeometry args={[0.32, 0.9, 0.32]} />
              <meshStandardMaterial color="#111817" roughness={0.2} metalness={0.5} />
            </mesh>
            <mesh position={[-0.25, -0.1, 0]}>
              <boxGeometry args={[0.32, 1.4, 0.32]} />
              <meshStandardMaterial color="#20A85A" roughness={0.2} emissive="#20A85A" emissiveIntensity={0.4} />
            </mesh>
            <mesh position={[0.25, 0.25, 0]}>
              <boxGeometry args={[0.32, 2.0, 0.32]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.7} />
            </mesh>
            <mesh position={[0.75, 0.55, 0]}>
              <boxGeometry args={[0.32, 2.6, 0.32]} />
              <meshStandardMaterial color="#111817" roughness={0.1} metalness={0.9} />
            </mesh>
          </group>
        );

      case "branding":
        // 3D Diamond Octahedron Prism with inner core
        return (
          <group ref={meshRef}>
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <octahedronGeometry args={[1.2, 0]} />
              <meshPhysicalMaterial
                color="#8FE63B"
                emissive="#20A85A"
                emissiveIntensity={0.4}
                roughness={0.08}
                metalness={0.2}
                transmission={0.5}
                thickness={0.6}
                clearcoat={1}
              />
            </mesh>
            <mesh ref={coreRef} scale={[0.65, 0.65, 0.65]} rotation={[-Math.PI / 4, 0, Math.PI / 4]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#111817" wireframe emissive="#8FE63B" emissiveIntensity={0.3} />
            </mesh>
          </group>
        );

      case "uiux":
        // 3D Floating Interface Layer Stack
        return (
          <group ref={meshRef}>
            <mesh position={[0, -0.35, -0.25]} rotation={[-0.3, 0.25, 0]}>
              <boxGeometry args={[2.0, 1.3, 0.06]} />
              <meshStandardMaterial color="#E5E9E2" roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]} rotation={[-0.3, 0.25, 0]}>
              <boxGeometry args={[2.0, 1.3, 0.06]} />
              <meshStandardMaterial color="#111817" opacity={0.9} transparent metalness={0.5} />
            </mesh>
            <mesh position={[0, 0.35, 0.25]} rotation={[-0.3, 0.25, 0]}>
              <boxGeometry args={[2.0, 1.3, 0.06]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.6} />
            </mesh>
          </group>
        );

      default:
        return null;
    }
  };

  return (
    <group>
      <ambientLight intensity={1.1} />
      <directionalLight position={[6, 8, 6]} intensity={1.6} />
      <directionalLight position={[-6, -6, -3]} intensity={0.6} color="#8FE63B" />
      <pointLight position={[0, 0, 4]} intensity={2.2} color="#8FE63B" distance={9} />

      <Float speed={2} rotationIntensity={isHovered ? 0.9 : 0.3} floatIntensity={0.5}>
        {renderVisual()}
      </Float>

      {/* Ambient particles for 3D visual */}
      <Sparkles count={25} scale={[4, 4, 4]} size={2.5} speed={0.4} opacity={0.5} color="#8FE63B" />
    </group>
  );
}

