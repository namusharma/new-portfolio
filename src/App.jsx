// import LogoSection from './Sections/LogoSection'
import Navbar from './components/Navbar'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <ShowcaseSection/>
   {/* <LogoSection/> */}
   < FeatureCards/>
   <ExperienceSection/>
   </>
  )
}

export default App
