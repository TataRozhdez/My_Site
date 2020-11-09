import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Text from '../Text/Text'
import Plant from '../Plant/Plant'
import { OrbitControls } from 'drei'

const Title = () => {
  const ref = useRef()
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.05)
  )
  return (
    <group ref={ref}>
      <Text hAlign='center' position={[15, 14.2, 0]} children='TATA' />
      <Text hAlign='center' position={[15, 10, 0]} children='ROZHDEZ' />
      {/* <Text hAlign='left' position={[0, 0, 0]} children='ॐ गं गणपतये नमः' /> */}
    </group>
  )
}

export const MyCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 25] }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 0, 10]} />
      <Suspense fallback={null}>
        <Title />
        <Plant />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
