const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.2} color="1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={2} />
      
      <pointLight position={[1, 5, 5]} 
      intensity={100} 
      color="#d00a4" />
    </>
  )
}

export default HeroLights
