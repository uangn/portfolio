import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <p className="eyebrow">LET'S BUILD SOMETHING USEFUL</p>
            <h2>
              Looking for a full-stack developer who can move between product,
              frontend, backend and AI?
            </h2>
            <p>
              I'm open to opportunities where I can contribute to real software
              and keep growing as an engineer.
            </p>
            <a className="btn btn--primary" href={`mailto:${portfolio.email}`}>
              Email me <ArrowUpRight size={17} />
            </a>
            <div className="contact-links">
              <a href={portfolio.github} target="_blank">
                <Github size={18} /> GitHub
              </a>
              <a href={portfolio.linkedin} target="_blank">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={`mailto:${portfolio.email}`}>
                <Mail size={18} /> {portfolio.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
