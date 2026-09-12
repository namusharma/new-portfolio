import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray('.exp-item')

    gsap.fromTo(
      items,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.18,
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 70%',
        },
      }
    )

    gsap.fromTo(
      '.experience-timeline',
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        duration: 1.1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section id="experience" className="section-padding w-full md:mt-40 mt-20 xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Work Experience" sub="Overview" />

        <div className="experience-wrap mt-20 md:mt-24">
          <div className="experience-timeline" aria-hidden="true" />

          <div className="experience-list">
            {expCards.map((card, index) => {
              const initials = card.company
                ?.split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((word) => word[0])
                .join('')
                .toUpperCase() || card.title.slice(0, 2).toUpperCase()

              return (
                <article key={`${card.title}-${index}`} className="exp-item">
                  <div className="timeline-marker" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>

                  <div className="experience-card">
                    <div className="experience-card-header">
                      <div className="timeline-logo" aria-label={`${card.company} logo`}>
                        <span>{initials}</span>
                      </div>

                      <div className="experience-meta">
                        <h3>{card.title}</h3>
                        <p className="company-name">{card.company}</p>
                        <p className="experience-date">📅 {card.date}</p>
                      </div>
                    </div>

                    <div className="experience-body">
                      <p className="experience-label">Responsibilities</p>
                      <ul>
                        {card.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
