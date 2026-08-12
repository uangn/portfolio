import { CheckCircle2 } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="ABOUT" title="Engineering with product thinking." />
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p className="about-copy">{portfolio.about}</p>
          </Reveal>
          <Reveal>
            <div className="principles">
              {portfolio.principles.map((item) => (
                <div key={item} className="principle">
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
