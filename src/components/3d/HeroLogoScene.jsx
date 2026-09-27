"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshTransmissionMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

// Procedural 3D Growoora "G" Shape with bevels & scroll reactivity
function GrowooraGLogoMesh({ pointerPos, scrollProgress = 0 }) {
  const meshGroupRef = useRef(null);
  const leafRef = useRef(null);

  // Build extruded G shape geometry
  const { gGeometry, leafGeometry } = useMemo(() => {
    // 1. "G" Arc & Bar Shape
    const gShape = new THREE.Shape();
    gShape.absarc(0, 0, 1.6, 0.4, Math.PI * 1.85, false);
    gShape.lineTo(0.3, -0.3);
    gShape.lineTo(1.1, -0.3);
    gShape.lineTo(1.1, 0.3);
    gShape.lineTo(0.3, 0.3);
    gShape.absarc(0, 0, 1.0, Math.PI * 1.85, 0.4, true);

    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 0.12,
      bevelThickness: 0.12,
    };

    const gGeo = new THREE.ExtrudeGeometry(gShape, extrudeSettings);
    gGeo.center();

    // 2. Leaf Accent Shape
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(0.6, 0.8, 1.4, 0.8, 1.2, 0);
    leafShape.bezierCurveTo(1.0, -0.8, 0.2, -0.6, 0, 0);

    const leafExtrude = {
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 5,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    };

    const leafGeo = new THREE.ExtrudeGeometry(leafShape, leafExtrude);
    leafGeo.center();

    return { gGeometry: gGeo, leafGeometry: leafGeo };
  }, []);

  // Smooth mouse tilt & scroll rotation loop
  useFrame((state, delta) => {
    if (meshGroupRef.current) {
      // Continuous base rotation + Scroll progress boost
      const scrollRotation = scrollProgress * Math.PI * 2.5;
      meshGroupRef.current.rotation.y += delta * 0.45;
      meshGroupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.08 + scrollProgress * 0.4;
      meshGroupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.08 + scrollProgress * 0.8;

      // Mouse reactivity (smooth lerp)
      if (pointerPos) {
        meshGroupRef.current.rotation.y += (pointerPos.x * 0.5 - meshGroupRef.current.rotation.y) * 0.05;
        meshGroupRef.current.rotation.x += (-pointerPos.y * 0.3 - meshGroupRef.current.rotation.x) * 0.05;
      }

      // Dynamic scale & depth shift on scroll
      const targetScale = 1 + scrollProgress * 0.25;
      meshGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    if (leafRef.current) {
      leafRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.05 + scrollProgress * 0.5;
    }
  });

  return (
    <group ref={meshGroupRef} position={[0, 0, 0]}>
      {/* Primary Metallic Glass G Mesh */}
      <mesh geometry={gGeometry} castShadow receiveShadow>
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.85}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.08}
          thickness={0.85}
          ior={1.48}
          chromaticAberration={0.08}
          anisotropy={0.15}
          distortion={0.12}
          distortionScale={0.25}
          temporalDistortion={0.1}
          color="#111817"
        />
      </mesh>

      {/* Inner Glowing Core Accent */}
      <mesh scale={[0.96, 0.96, 0.96]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#8FE63B"
          emissive="#8FE63B"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Fresh Lime-Emerald Leaf Accent on Top */}
      <group ref={leafRef} position={[0.75, 1.1, 0.2]} rotation={[0.2, -0.3, -0.4]}>
        <mesh geometry={leafGeometry} castShadow>
          <meshPhysicalMaterial
            color="#8FE63B"
            emissive="#20A85A"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.3}
            clearcoat={1}
            transmission={0.3}
          />
        </mesh>
      </group>

      {/* Subtle Floating Tech Tokens around the G */}
      <FloatingTechBadge position={[-1.8, 1.2, 0.5]} label="<CODE/>" color="#8FE63B" />
      <FloatingTechBadge position={[1.9, -1.0, 0.8]} label="SEO ↑" color="#20A85A" />
      <FloatingTechBadge position={[-1.6, -1.2, -0.4]} label="ANALYTICS" color="#8FE63B" />
      <FloatingTechBadge position={[1.7, 1.4, -0.3]} label="APPS" color="#20A85A" />
    </group>
  );
}

// Small floating subtle badges
function FloatingTechBadge({ position, label, color }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.12;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position}>
        <mesh>
          <boxGeometry args={[0.9, 0.35, 0.08]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.1} opacity={0.9} transparent />
        </mesh>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.12}
          color="#111817"
          font="https://fonts.gstatic.com/s/plusjakartasans/v8/L0x8DF4xlV4-Bf1DAu58-N443W_g68466e0.woff"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
        <mesh position={[0.38, 0.12, 0.05]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </Float>
  );
}

// Hero Main Scene Wrapper with lights and sparkles
export default function HeroLogoScene({ pointerPos, scrollProgress = 0 }) {
  return (
    <group>
      {/* Lighting Setup */}
      <ambientLight intensity={0.95} />
      <directionalLight position={[10, 15, 10]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#8FE63B" />
      <pointLight position={[0, 0, 3]} intensity={2.2} color="#8FE63B" distance={9} />

      {/* Main Floating 3D G Logo */}
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.45}>
        <GrowooraGLogoMesh pointerPos={pointerPos} scrollProgress={scrollProgress} />
      </Float>

      {/* Ambient Rising Green Particles */}
      <Sparkles
        count={50}
        scale={[9, 9, 9]}
        size={3.2}
        speed={0.5}
        opacity={0.65}
        color="#8FE63B"
      />
    </group>
  );
}

