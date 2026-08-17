import { words } from "../constants/index.js";

const Hero = () => {
  return (
  <section id="hero" className ="relative overflow-hidden"> 
  <div className="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="background"/>
    
  </div>
  <div className="hero-layout">
    {/* Left: Hero content */}

    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5"> 
      <div className="flex flex-col gap-7">
        <div className ="hero-text">
          <h1>
             Big ideas
             <span className="slide">
              <span className="wrapper">
                {words.map((word) => (
                  <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                    <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                    </span>
                ))}
              </span>
             </span>
             </h1>
             
          <h1> Built with quiet </h1>
          <h1>Relentless precision. </h1>
        </div>
    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I'm Namya, a developer and designer with a passion for creating innovative solutions. I specialize in building web applications that are both functional and visually appealing. My goal is to bring ideas to life through code and design, ensuring a seamless user experience.

             </p>
             <Button/>
        </div>
     </header>
    {/* Right: 3D model */}

  </div>
  
  </section>
  )
}

export default Hero
