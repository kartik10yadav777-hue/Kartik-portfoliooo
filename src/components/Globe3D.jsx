import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function GlobeMesh() {
  const meshRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005
      ringRef.current.rotation.x = Math.PI / 2.5
    }
  })

  const ringGeometry = useMemo(() => {
    return new THREE.RingGeometry(1.6, 2.0, 128)
  }, [])

  return (
    <>
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial
            color="#1a3a6e"
            emissive="#0a1f3d"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            distort={0.15}
            speed={1.5}
            wireframe={false}
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh>
          <sphereGeometry args={[1.22, 32, 32]} />
          <meshBasicMaterial
            color="#C8A96B"
            wireframe={true}
            transparent
            opacity={0.06}
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshBasicMaterial
            color="#2044a0"
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      {/* Orbital ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <ringGeometry args={[1.6, 1.65, 128]} />
        <meshBasicMaterial color="#C8A96B" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 3, 0.3, 0]}>
        <ringGeometry args={[2.0, 2.03, 128]} />
        <meshBasicMaterial color="#C8A96B" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

function ParticleField() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 2
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  const ref = useRef()
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.001
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#C8A96B" size={0.02} transparent opacity={0.6} />
    </points>
  )
}

export default function Globe3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#C8A96B" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#4466cc" />
      <pointLight position={[0, 0, 3]} intensity={2} color="#C8A96B" distance={10} />
      <GlobeMesh />
      <ParticleField />
    </Canvas>
  )
}
