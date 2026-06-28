import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingRings({ scroll = 0 }) {
  const groupRef = useRef()
  const r1 = useRef()
  const r2 = useRef()
  const r3 = useRef()

  useFrame((_, dt) => {
    if (!groupRef.current) return

    r1.current.rotation.x += dt * 0.28
    r1.current.rotation.y += dt * 0.18

    r2.current.rotation.x -= dt * 0.35
    r2.current.rotation.z += dt * 0.22

    r3.current.rotation.y += dt * 0.15
    r3.current.rotation.z -= dt * 0.10

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -scroll * 3.5,
      0.04
    )
    groupRef.current.rotation.y += dt * 0.08
  })

  return (
    <group ref={groupRef} position={[2.2, 0.2, -1]}>

      <Torus ref={r1} args={[1.5, 0.045, 20, 90]}>
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={1}
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </Torus>

      <Torus ref={r2} args={[1.05, 0.03, 16, 80]} rotation={[Math.PI / 3, 0, Math.PI / 5]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          distort={0.25}
          speed={3}
          roughness={0}
          metalness={1}
          emissive="#0ea5e9"
          emissiveIntensity={0.6}
        />
      </Torus>

      <Torus ref={r3} args={[0.65, 0.025, 12, 60]} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <MeshDistortMaterial
          color="#10b981"
          distort={0.4}
          speed={2.5}
          roughness={0}
          metalness={1}
          emissive="#10b981"
          emissiveIntensity={0.5}
        />
      </Torus>

      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={2}
          roughness={0}
          metalness={0.5}
        />
      </mesh>

    </group>
  )
}