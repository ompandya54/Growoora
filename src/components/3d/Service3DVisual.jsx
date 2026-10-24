"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function Service3DVisual({ type, isHovered }) {
  const groupRef = useRef(null);
  const orbitRef = useRef(null);
  const ringRef2 = useRef(null);
  const cursorRef = useRef(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const speed = isHovered ? 1.6 : 0.9;
      groupRef.current.rotation.y += delta * speed * 0.45;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.z += delta * 1.2;
      orbitRef.current.rotation.x += delta * 0.4;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.9;
    }

    if (cursorRef.current) {
      cursorRef.current.position.y = Math.sin(state.clock.elapsedTime * 2.5) * 0.04;
    }
  });

  const renderVisual = () => {
    switch (type) {
      case "web":
        // 3D Cyber Browser & Dev Terminal with floating code cards and orbital ring
        return (
          <group ref={groupRef}>
            {/* Main Obsidian Chassis */}
            <RoundedBox args={[2.5, 1.65, 0.16]} radius={0.08} smoothness={4}>
              <meshStandardMaterial
                color="#0D1412"
                roughness={0.2}
                metalness={0.8}
              />
            </RoundedBox>

            {/* Glowing Emerald Screen Bezel Edge */}
            <mesh position={[0, 0, 0.085]}>
              <planeGeometry args={[2.36, 1.5]} />
              <meshBasicMaterial color="#060A09" />
            </mesh>

            {/* Browser Top Bar */}
            <mesh position={[0, 0.62, 0.09]}>
              <planeGeometry args={[2.32, 0.22]} />
              <meshBasicMaterial color="#131C19" />
            </mesh>

            {/* Traffic Light Window LEDs */}
            <mesh position={[-0.96, 0.62, 0.1]}>
              <circleGeometry args={[0.045, 16]} />
              <meshBasicMaterial color="#FF5F56" />
            </mesh>
            <mesh position={[-0.82, 0.62, 0.1]}>
              <circleGeometry args={[0.045, 16]} />
              <meshBasicMaterial color="#FFBD2E" />
            </mesh>
            <mesh position={[-0.68, 0.62, 0.1]}>
              <circleGeometry args={[0.045, 16]} />
              <meshBasicMaterial color="#8FE63B" />
            </mesh>

            {/* Mini URL pill */}
            <mesh position={[0.1, 0.62, 0.1]}>
              <planeGeometry args={[1.1, 0.11]} />
              <meshBasicMaterial color="#0A0F0D" />
            </mesh>

            {/* Floating 3D Code Editor Lines */}
            <mesh position={[-0.15, 0.28, 0.12]}>
              <boxGeometry args={[1.7, 0.08, 0.04]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[-0.45, 0.1, 0.12]}>
              <boxGeometry args={[1.1, 0.07, 0.04]} />
              <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={0.6} />
            </mesh>
            <mesh position={[0.05, -0.08, 0.12]}>
              <boxGeometry args={[1.5, 0.07, 0.04]} />
              <meshStandardMaterial color="#52605D" />
            </mesh>
            <mesh position={[-0.35, -0.26, 0.12]}>
              <boxGeometry args={[0.9, 0.07, 0.04]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.9} />
            </mesh>
            <mesh position={[0.2, -0.44, 0.12]}>
              <boxGeometry args={[1.2, 0.07, 0.04]} />
              <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={0.5} />
            </mesh>

            {/* Floating 3D React/Next Neon Atom Orbit Ring */}
            <group ref={orbitRef}>
              <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[1.75, 0.025, 16, 64]} />
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.2} />
              </mesh>
              {/* Satellite node on ring */}
              <mesh position={[1.75, 0, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#8FE63B" emissiveIntensity={1.5} />
              </mesh>
            </group>
          </group>
        );

      case "app":
        // 3D Glass Titanium Smartphone with floating parallax UI cards
        return (
          <group ref={groupRef}>
            {/* Smartphone Outer Titanium Frame */}
            <RoundedBox args={[1.35, 2.5, 0.18]} radius={0.16} smoothness={5}>
              <meshStandardMaterial color="#111817" metalness={0.9} roughness={0.15} />
            </RoundedBox>

            {/* Beveled Edge Highlight */}
            <RoundedBox args={[1.38, 2.53, 0.05]} radius={0.16} smoothness={4} position={[0, 0, 0]}>
              <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={0.2} metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* Screen Glass */}
            <mesh position={[0, 0, 0.095]}>
              <planeGeometry args={[1.2, 2.32]} />
              <meshBasicMaterial color="#080D0B" />
            </mesh>

            {/* Dynamic Island / Top Speaker Notch */}
            <mesh position={[0, 1.0, 0.11]}>
              <planeGeometry args={[0.34, 0.06]} />
              <meshBasicMaterial color="#000000" />
            </mesh>

            {/* Floating Parallax Card 1 (Top Metric Widget) */}
            <group position={[0, 0.52, 0.18]}>
              <RoundedBox args={[1.02, 0.52, 0.04]} radius={0.06} smoothness={3}>
                <meshStandardMaterial color="#15201C" metalness={0.5} roughness={0.2} />
              </RoundedBox>
              {/* Card Accent Glow Bar */}
              <mesh position={[-0.25, 0.1, 0.03]}>
                <planeGeometry args={[0.38, 0.08]} />
                <meshBasicMaterial color="#8FE63B" />
              </mesh>
              <mesh position={[0.25, 0.1, 0.03]}>
                <circleGeometry args={[0.07, 16]} />
                <meshBasicMaterial color="#20A85A" />
              </mesh>
            </group>

            {/* Floating Parallax Card 2 (Bottom Feed & Action Button) */}
            <group position={[0, -0.25, 0.22]}>
              <RoundedBox args={[1.02, 0.72, 0.04]} radius={0.06} smoothness={3}>
                <meshStandardMaterial color="#1A2823" metalness={0.4} roughness={0.3} />
              </RoundedBox>
              {/* Floating Action Button */}
              <mesh position={[0, -0.16, 0.04]}>
                <cylinderGeometry args={[0.18, 0.18, 0.06, 24]} rotation={[Math.PI / 2, 0, 0]} />
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1} />
              </mesh>
            </group>

            {/* Orbiting notification beacon */}
            <group ref={orbitRef} position={[0, 0, 0.1]}>
              <mesh position={[0.9, 0.4, 0.2]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.4} />
              </mesh>
            </group>
          </group>
        );

      case "seo":
        // 3D Holographic Search Radar with Ascending Exponential Growth Curve
        return (
          <group ref={groupRef}>
            {/* Heavy Emerald Radar Ring */}
            <mesh position={[0, 0, 0]}>
              <torusGeometry args={[1.1, 0.14, 16, 48]} />
              <meshStandardMaterial
                color="#111817"
                emissive="#20A85A"
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Glowing Inner Radar Grid Disk */}
            <mesh position={[0, 0, -0.05]}>
              <circleGeometry args={[0.95, 32]} />
              <meshStandardMaterial color="#0A120E" roughness={0.3} />
            </mesh>

            {/* Ascending Exponential Pillar Bars */}
            <mesh position={[-0.55, -0.35, 0.12]}>
              <boxGeometry args={[0.18, 0.35, 0.18]} />
              <meshStandardMaterial color="#1E332A" emissive="#20A85A" emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[-0.2, -0.2, 0.12]}>
              <boxGeometry args={[0.18, 0.65, 0.18]} />
              <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={0.6} />
            </mesh>
            <mesh position={[0.15, 0.05, 0.12]}>
              <boxGeometry args={[0.18, 1.05, 0.18]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.9} />
            </mesh>
            <mesh position={[0.5, 0.35, 0.12]}>
              <boxGeometry args={[0.18, 1.45, 0.18]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.3} />
            </mesh>

            {/* Floating "#1" Rank Badge */}
            <group position={[0.5, 1.25, 0.2]}>
              <RoundedBox args={[0.55, 0.32, 0.08]} radius={0.06} smoothness={3}>
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.2} />
              </RoundedBox>
            </group>

            {/* Orbiting Scanner Needle */}
            <group ref={orbitRef}>
              <mesh position={[0, 0.7, 0.15]} rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[0.04, 1.2, 0.02]} />
                <meshBasicMaterial color="#8FE63B" />
              </mesh>
            </group>
          </group>
        );

      case "marketing":
        // 3D High-Yield Analytics Funnel & Escalating Energy Columns
        return (
          <group ref={groupRef}>
            {/* Base Platform Ring */}
            <mesh position={[0, -0.9, 0]}>
              <cylinderGeometry args={[1.3, 1.4, 0.15, 32]} />
              <meshStandardMaterial color="#0E1613" roughness={0.3} metalness={0.7} />
            </mesh>

            {/* Stepped Energy Towers */}
            <mesh position={[-0.7, -0.3, 0]}>
              <cylinderGeometry args={[0.22, 0.22, 1.0, 24]} />
              <meshStandardMaterial color="#162620" emissive="#20A85A" emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[-0.24, -0.05, 0.2]}>
              <cylinderGeometry args={[0.22, 0.22, 1.5, 24]} />
              <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={0.6} />
            </mesh>
            <mesh position={[0.24, 0.25, 0.1]}>
              <cylinderGeometry args={[0.22, 0.22, 2.1, 24]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={0.9} />
            </mesh>
            <mesh position={[0.7, 0.55, -0.1]}>
              <cylinderGeometry args={[0.22, 0.22, 2.7, 24]} />
              <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.4} />
            </mesh>

            {/* Orbiting Compound Growth Halo */}
            <group ref={orbitRef} position={[0, 0.2, 0]}>
              <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[1.45, 0.03, 16, 64]} />
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.2} />
              </mesh>
            </group>
          </group>
        );

      case "branding":
        // 3D Floating Diamond Prism with Dual Gyro Orbit Rings
        return (
          <group ref={groupRef}>
            {/* Center Geometric Prism */}
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <octahedronGeometry args={[1.15, 0]} />
              <meshPhysicalMaterial
                color="#8FE63B"
                emissive="#20A85A"
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.2}
                transmission={0.4}
                thickness={0.8}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </mesh>

            {/* Inner Core Monogram Box */}
            <mesh scale={[0.5, 0.5, 0.5]} rotation={[-Math.PI / 4, 0, Math.PI / 4]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#0A0F0D" wireframe wireframeLinewidth={2} emissive="#8FE63B" emissiveIntensity={1} />
            </mesh>

            {/* Gimbal Ring 1 */}
            <group ref={orbitRef}>
              <mesh>
                <torusGeometry args={[1.6, 0.03, 16, 64]} />
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.2} />
              </mesh>
            </group>

            {/* Gimbal Ring 2 */}
            <group ref={ringRef2}>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.4, 0.025, 16, 64]} />
                <meshStandardMaterial color="#20A85A" emissive="#20A85A" emissiveIntensity={1.0} />
              </mesh>
            </group>
          </group>
        );

      case "uiux":
        // 3D Floating Exploded Interface Layers in Isometric Z-Space
        return (
          <group ref={groupRef} rotation={[0.4, -0.45, 0.15]}>
            {/* Layer 1: Bottom Obsidian Wireframe Foundation */}
            <group position={[0, 0, -0.38]}>
              <RoundedBox args={[2.2, 1.45, 0.04]} radius={0.06} smoothness={3}>
                <meshStandardMaterial color="#0B1310" metalness={0.6} roughness={0.3} />
              </RoundedBox>
            </group>

            {/* Layer 2: Middle Frosted Glass Component Cards */}
            <group position={[0, 0, 0]}>
              <RoundedBox args={[2.2, 1.45, 0.04]} radius={0.06} smoothness={3}>
                <meshPhysicalMaterial
                  color="#172620"
                  roughness={0.2}
                  transmission={0.6}
                  thickness={0.3}
                  transparent
                  opacity={0.8}
                />
              </RoundedBox>
              {/* UI Layout Grid Lines */}
              <mesh position={[-0.4, 0.2, 0.03]}>
                <planeGeometry args={[0.9, 0.6]} />
                <meshBasicMaterial color="#20A85A" opacity={0.4} transparent />
              </mesh>
              <mesh position={[0.45, 0.2, 0.03]}>
                <planeGeometry args={[0.6, 0.6]} />
                <meshBasicMaterial color="#1E332A" />
              </mesh>
            </group>

            {/* Layer 3: Top Glowing Neon Active Elements */}
            <group position={[0, 0, 0.38]}>
              <RoundedBox args={[2.2, 1.45, 0.02]} radius={0.06} smoothness={3}>
                <meshStandardMaterial color="#060A08" opacity={0.2} transparent />
              </RoundedBox>

              {/* Active CTA Button */}
              <mesh position={[0.4, -0.3, 0.04]}>
                <planeGeometry args={[0.7, 0.24]} />
                <meshStandardMaterial color="#8FE63B" emissive="#8FE63B" emissiveIntensity={1.1} />
              </mesh>

              {/* Floating 3D Pointer Cursor */}
              <group ref={cursorRef} position={[0.55, -0.22, 0.14]}>
                <mesh rotation={[0, 0, Math.PI / 6]}>
                  <coneGeometry args={[0.09, 0.28, 3]} />
                  <meshStandardMaterial color="#FFFFFF" emissive="#8FE63B" emissiveIntensity={0.8} />
                </mesh>
              </group>
            </group>
          </group>
        );

      default:
        return null;
    }
  };

  return (
    <group>
      {/* Studio Lighting Setup tailored for high contrast & emerald glow */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[5, 6, 6]} intensity={1.8} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -2]} intensity={2.2} color="#8FE63B" />
      <pointLight position={[0, 2, 4]} intensity={2.5} color="#8FE63B" distance={8} />
      <pointLight position={[0, -2, -3]} intensity={1.5} color="#20A85A" distance={6} />

      {/* Floating 3D Object Group */}
      <Float speed={2.2} rotationIntensity={isHovered ? 0.8 : 0.35} floatIntensity={0.45}>
        {renderVisual()}
      </Float>

      {/* Ambient Neon Floating Sparkles */}
      <Sparkles
        count={32}
        scale={[4.2, 4.2, 4.2]}
        size={2.8}
        speed={0.4}
        opacity={0.65}
        color="#8FE63B"
      />
    </group>
  );
}


