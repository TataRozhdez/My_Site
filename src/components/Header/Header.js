import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Mandala } from '../Mandala/Mandala'
// import { OrbitControls } from 'drei'
import './Header.scss'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='custom-canvas'>
        <Canvas camera={{ position: [0, 20, 20] }}>
          <ambientLight intensity={2} />
          <pointLight position={[10, 0, 10]} />
          <Suspense fallback={null}>
            <Mandala />
          </Suspense>
          {/* <OrbitControls enableZoom={false} autoRotate={true} /> */}
        </Canvas>
      </div>
      <h1 className='header-mantra'>ॐ गं गणपतये नमः</h1>
    </div>
  )
}
