import Navbar from './components/Navbar'
import Hero from './Sections/Hero'
import ShowcaseSection from './Sections/ShowcaseSection'
import FeatureCards from './Sections/FeatureCards'
import ExperienceSection from './Sections/ExperienceSection'
import { socialImgs, testimonials } from './constants'
import TechStack from './Sections/TechStack'

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

      <footer id="contact" className="site-footer">
        <div className="footer-content">
          <div>
            <p className="eyebrow">Let’s build</p>
            <h3>Ready to turn ideas into a polished product?</h3>
          </div>
          <a href="mailto:hello@namyasharma.dev">hello@namyasharma.dev</a>
        </div>

        <div className="social-row">
          {socialImgs.map(({ name, url, imgPath }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
              <img src={imgPath} alt={name} />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}

export default App
