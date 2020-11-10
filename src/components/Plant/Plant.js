import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// https://sketchfab.com/3d-models/orchid-flower-75d19624c0d04b65975e011a04ae77a0
function Plant() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')

  return (
    <>
      <primitive object={gltf.scene} position={[0, -10, -10]} />
    </>
  )
}

export default Plant
