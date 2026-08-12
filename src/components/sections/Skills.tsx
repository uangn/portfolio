import { portfolio } from '../../data/portfolio'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const logos: Record<string, string> = {
  React: '⚛',
  TypeScript: 'TS',
  JavaScript: 'JS',
  Python: 'Py',
  FastAPI: 'FA',
  'Node.js': 'N',
  'REST APIs': 'API',
  SQL: 'SQL',
  LLMs: 'LLM',
  RAG: 'RAG',
  'OpenAI API': 'AI',
  'scikit-learn': 'SK',
  TensorFlow: 'TF',
  MongoDB: 'M',
  MySQL: 'My',
  Docker: 'D',
  Git: 'Git',
  HTML: '5',
  CSS: '3',
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="TECH STACK"
            title="Tools I use to ship full-stack products."
          />
        </Reveal>
        <div className="skills-grid">
          {Object.entries(portfolio.skills).map(([group, items]) => (
            <Reveal key={group}>
              <div className="skill-group">
                <h3>{group}</h3>
                <div className="skill-items">
                  {items.map((skill) => (
                    <div className="skill-item" key={skill}>
                      <div className="skill-logo">{logos[skill] ?? skill.slice(0, 2)}</div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
