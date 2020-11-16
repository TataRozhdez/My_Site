import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Mandala = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')

  return (
    <>
      <primitive object={gltf.scene} position={[0, -10, 13]} />
    </>
  )
}
