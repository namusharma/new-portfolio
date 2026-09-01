import {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {

const sectionRef = useRef(null);
const project1Ref = useRef(null);
const project2Ref = useRef(null);
const project3Ref = useRef(null);
const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
useGSAP(() => {
gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
},[]);
cards.forEach((card, index) => {

    gsap.fromTo(card, {opacity: 0, y: 50}, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: index * 0.2
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
   <div className ="w-full">
    <div className="showcaselayout">
{/* LEFT */}
<div className ="first-project-wrapper ref={project1Ref}">
    <div className="image-wrapper">
         <img src="/images/project1.png" alt="StackShow"/>

    </div>
    <div className="text-content">
      
  <h2> An interactive platform where developers can display their tech stack, skills, and projects. </h2>
  <p className ="text-white-50 md:text-xl">
    Built with React Native and Tailwind CSS to deliver a fast, responsive, and user-friendly experience.
 </p>
    </div>

</div>

{/* RIGHT */}
<div className ="project-list-wrapper overflow-hidden">
  <div className="project" ref={project2Ref}>
    <div className="image-wrapper bg-[#ffefdb]">
<img src="/images/project2.png" alt="Project 2"/>
  </div>
  <h2> Stock Market </h2>
  </div>
   <div className="project" ref={project3Ref}>
    <div className="image-wrapper bg-[#ffe7eb]">
<img src="/images/project3.png" alt="Project 3"/>
  </div>
  <h2> A startup showcase app </h2>
  </div>
</div>

    </div>

   </div>
    </div>
  )
}

export default ShowcaseSection
