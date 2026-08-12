import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, type PointerEvent } from 'react'
import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'
import { ProjectVisual } from '../ui/ProjectVisual'

type VisualType = 'automl' | 'bim' | 'cv'

type Slide =
  | { type: 'visual'; visual: VisualType }
  | { type: 'image'; src: string }

function ProjectVisualCarousel({ visuals, images }: { visuals?: VisualType[]; images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const pointerStartX = useRef<number | null>(null)
  const slides: Slide[] = [
    ...(visuals ?? []).map((visual) => ({ type: 'visual' as const, visual })),
    ...(images ?? []).map((src) => ({ type: 'image' as const, src })),
  ]
  const total = slides.length
  const currentSlide = slides[currentIndex]

  const prevSlide = () => setCurrentIndex((value) => (value - 1 + total) % total)
  const nextSlide = () => setCurrentIndex((value) => (value + 1) % total)

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return
    const deltaX = event.clientX - pointerStartX.current
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    pointerStartX.current = null
  }

  const handlePointerCancel = () => {
    pointerStartX.current = null
  }

  return (
    <div
      className="project-visual-carousel"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >
      {currentSlide?.type === 'image' ? (
        <img src={currentSlide.src} alt="Project preview" className="project-image" />
      ) : currentSlide ? (
        <ProjectVisual type={currentSlide.visual} />
      ) : null}
      {total > 1 && (
        <div className="project-visual-controls">
          <button type="button" className="project-visual-arrow" onClick={prevSlide} aria-label="Previous image">
            <ChevronLeft size={18} />
          </button>
          <button type="button" className="project-visual-arrow" onClick={nextSlide} aria-label="Next image">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="FEATURED WORK"
            title="Projects that show how I build."
            text="Full-stack products combining thoughtful interfaces, backend systems, AI workflows and real engineering constraints."
          />
        </Reveal>

        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title} className={project.featured ? 'project-featured-wrap' : ''}>
              <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
                <div className="project-visual-wrap">
                  <ProjectVisualCarousel
                    visuals={project.visuals ?? [project.visual]}
                    images={project.images}
                  />
                  {project.featured && <span className="featured-tag">Featured</span>}
                </div>
                <div className="project-content">
                  <span className="project-index"></span>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => <TechBadge label={tech} key={tech} />)}
                  </div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={17} /> Code
                    </a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={17} /> Demo
                    </a>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
