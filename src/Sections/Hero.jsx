import { words } from "../constants/index.js";
import Button from "../components/Button";
import HeroExp from "../components/HeroModels/HeroExp";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {

  useGSAP(() =>{
    gsap.fromTo('.hero-text h1',
    {
      y:50,
      opacity : 0
    },
    {
      y:0,
      opacity : 1,
      stagger : 0.2,
      duration : 1,
      erase : 'power2.inOut'
    }
    )
  }

)
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
                {words.map((word, index) => (
                  <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
                    <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                    </span>
                ))}
              </span>
             </span>
             </h1>
             
          <h1> Built with quiet </h1>
          <h1>Relentless precision. </h1>
        </div>
   <p className="text-neutral-300 md:text-xl font-normal leading-relaxed mb-8 max-w-xl relative z-10">
  Hi, I'm Namya, a developer and designer with a passion for creating innovative solutions. 
  I specialize in building web applications that are both functional and visually appealing. 
</p>


             <Button
             className="md:w-80 md:h-16 w-60 h-12"
             id="button"
             text="see my work"
             />
        </div>
     </header>
    {/* Right: 3D model */}
    <figure>
      <div className="hero-3d-layout ">
         <HeroExp/>
      </div>
    </figure>

  </div>
  <AnimatedCounter />
  </section>
  )
}

export default Hero
