import { portfolio } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <span>Built with React + TypeScript</span>
      </div>
    </footer>
  )
}
