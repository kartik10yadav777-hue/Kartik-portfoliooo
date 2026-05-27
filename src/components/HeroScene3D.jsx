import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ position, rotation, scale, speed, color }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
    ref.current.rotation.y += speed * 0.005
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
  })

  return (
    <Float speed={speed} floatIntensity={0.5}>
      <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
          wireframe={false}
        />
      </mesh>
      <mesh position={position} rotation={rotation} scale={[scale[0]*1.02, scale[1]*1.02, scale[2]*1.02]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#C8A96B" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  )
}

function HeroParticles() {
  const count = 400
  const ref = useRef()

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5
      const t = Math.random()
      col[i * 3] = 0.7 + t * 0.3
      col[i * 3 + 1] = 0.6 + t * 0.2
      col[i * 3 + 2] = 0.4 + t * 0.1
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.5} />
    </points>
  )
}

function GridPlane() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.material.opacity = 0.04 + Math.sin(state.clock.elapsedTime * 0.5) * 0.01
  })
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[40, 40, 30, 30]} />
      <meshBasicMaterial color="#C8A96B" wireframe transparent opacity={0.05} />
    </mesh>
  )
}

export default function HeroScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#C8A96B" />
      <pointLight position={[-10, -5, -5]} intensity={0.5} color="#4466ff" />

      <FloatingGeometry position={[-5, 1, -2]} rotation={[0.5, 0.3, 0]} scale={[0.8, 0.8, 0.8]} speed={0.7} color="#C8A96B" />
      <FloatingGeometry position={[5, -1, -3]} rotation={[0.2, 0.6, 0]} scale={[0.5, 0.5, 0.5]} speed={0.5} color="#1a4a8a" />
      <FloatingGeometry position={[0, 3, -5]} rotation={[0.3, 0.1, 0]} scale={[0.4, 0.4, 0.4]} speed={0.9} color="#C8A96B" />
      <FloatingGeometry position={[-3, -3, -4]} rotation={[0.8, 0.4, 0]} scale={[0.35, 0.35, 0.35]} speed={0.6} color="#334155" />
      <FloatingGeometry position={[7, 3, -6]} rotation={[0.1, 0.7, 0]} scale={[0.6, 0.6, 0.6]} speed={0.4} color="#C8A96B" />

      <HeroParticles />
      <GridPlane />
    </Canvas>
  )
}
