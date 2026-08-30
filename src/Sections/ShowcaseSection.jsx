import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
   <div className ="w-full">
    <div className="showcaselayout">
{/* LEFT */}
<div className ="first-project-wrapper">
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
  <div className="project">
<img src="/images/project2.png" alt="Project 2"/>

  </div>
</div>

    </div>

   </div>
    </div>
  )
}

export default ShowcaseSection
