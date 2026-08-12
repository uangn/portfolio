import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { HeroVisual } from '../ui/HeroVisual'

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill">
            <span />
            {portfolio.availability}
          </div>
          <p className="eyebrow">FULL-STACK ENGINEERING · AI-ENABLED SOFTWARE</p>
          <h1>{portfolio.heroTitle}</h1>
          <p className="hero-text">{portfolio.heroText}</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#projects">
              View projects <ArrowDown size={17} />
            </a>
            <a className="btn btn--ghost" href="#contact">Contact me</a>
          </div>
          <div className="socials">
            <a href={portfolio.github} aria-label="GitHub"><Github size={20} /></a>
            <a href={portfolio.linkedin} aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${portfolio.email}`} aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
