import React from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {useMediaQuery} from 'react-responsive'
const HeroExp = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
    <ambientLight intensity={0.2} color="1a1a40"/>
    <mesh></mesh>
    </Canvas>
  )
}

export default HeroExp
