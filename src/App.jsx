import Navbar from './components/Navbar'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'
import TechStack from './Sections/TechStack'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />

      <div id="skills">
        <FeatureCards />
      </div>

      <ExperienceSection />
      <TechStack/>
      <Contact />
      <Footer />

      {/* <section id="testimonials" className="testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>What people say</h2>
        </div> */}

        {/* <div className="testimonial-grid">
          {testimonials.slice(0, 3).map(({ name, mentions, review }) => (
            <article key={name} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{name.charAt(0)}</div>
                <div>
                  <h3>{name}</h3>
                  <p>{mentions}</p>
                </div>
              </div>
              <p className="testimonial-copy">“{review}”</p>
            </article>
          ))}
        </div>
      </section> */}

    
    </>
  )
}

export default App
