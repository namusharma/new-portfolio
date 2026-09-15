import {Environment , Float , OrbitControls , useGLTF} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {useEffect} from 'react'
// GLTF or Canvas is used in 3d react js
const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);
    useEffect(() => {
        if(model.name === 'Interactive Designer'){
            scene.scene.traverse((child)=>{
                if(child.isMesh && child.name === 'Object_5'){
                    child.material.color.set('white')
                }
            })
        }

    } , [model.name, scene])
  return (
    <Canvas>
      <ambientLight intensity ={0.3}/>
      <directionalLight position={[5 , 5, 5]} intensity={1}/>
      <Environment preset='city'/>
      <OrbitControls enableZoom={false} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} scale={model.scale} rotation={model.rotation}/>
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
