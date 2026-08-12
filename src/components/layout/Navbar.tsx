import { portfolio } from '../../data/portfolio'

export function Navbar() {
  const links = [
    ['Projects', '#projects'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Education', '#education'],
  ]

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" className="brand" aria-label="Homepage">
          <span className="brand-mark">&lt;/&gt;</span>
          <span className="brand-name" style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>{portfolio.name}</span>
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <a className="btn btn--small btn--primary" href="#contact">Let's talk</a>
      </nav>
    </header>
  )
}
