import { GraduationCap, MapPin } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section className="section section-muted" id="education">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="EDUCATION" title="Computer Science foundation." />
        </Reveal>
        <Reveal>
          <div className="education-card">
            <div className="education-icon"><GraduationCap size={30} /></div>
            <div>
              <p className="project-subtitle">{portfolio.education.university}</p>
              <h3>{portfolio.education.degree}</h3>
              <p className="education-location"><MapPin size={16} /> {portfolio.education.location}</p>
              <div className="education-meta">
                <span>October 2022 - March 2027</span>
                <p className="education-description">
                  Relevant coursework and passions: Data Structures & Algorithms (DSA), Machine Learning (ML),
                  and Software Systems — focused on scalable architecture, system design, and applied
                  learning through projects.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
