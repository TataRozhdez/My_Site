import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Text from '../Text/Text'
import Plant from '../Plant/Plant'
import { OrbitControls } from 'drei'

const Title = () => {
  return (
    <group>
      <Text hAlign='center' position={[15, 14.2, 0]} children='TATA' />
      <Text hAlign='center' position={[15, 10, 0]} children='ROZHDEZ' />
      <Plant />
      {/* <Text hAlign='left' position={[0, 0, 0]} children='ॐ गं गणपतये नमः' /> */}
    </group>
  )
}

export const MyCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 5, 25] }}>
      <ambientLight intensity={2} />
      <pointLight position={[10, 0, 10]} />
      <Suspense fallback={null}>
        <Title />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate={true} />
    </Canvas>
  )
}
