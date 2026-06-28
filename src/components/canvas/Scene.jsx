import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import StarField     from './StarField.jsx'
import FloatingRings from './FloatingRings.jsx'

export default function Scene() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const fn = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setScroll(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top:    0,
        left:   0,
        width:  '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]}    intensity={1.2} color="#7c3aed" />
          <pointLight position={[-5, -5, 3]}  intensity={0.8} color="#0ea5e9" />
          <pointLight position={[0, -4, 4]}   intensity={0.5} color="#10b981" />

          <StarField />
          <FloatingRings scroll={scroll} />

          <EffectComposer>
            <Bloom
              intensity={1.4}
              luminanceThreshold={0.08}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}