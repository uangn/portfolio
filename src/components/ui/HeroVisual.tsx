import { FaReact, FaPython } from "react-icons/fa"
import { SiTypescript, SiOllama, SiFastapi} from "react-icons/si"
import { MdHub, MdAutoAwesome, MdSmartButton } from "react-icons/md"; 
import { Code2 } from "lucide-react"

const nodes = [
  {
    x: 170,
    y: 180,
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    x: 387,
    y: 178,
    icon: SiFastapi,
    color: "#FFD43B",
  },
  {
    x: 196,
    y: 346,
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    x: 399,
    y: 336,
    icon: MdAutoAwesome,
    color: "#ffffff",
  },
  {
    x: 280,
    y: 260,
    icon: Code2,
    color: "#ffffff",
  },
]

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 560 520">

        {nodes.map(({ x, y, icon: Icon, color }, i) => (
          <g
            key={i}
            className={`node node-${i}`}
          >
            <circle
              cx={x}
              cy={y}
              r={48}
              fill="#0b1324"
              stroke="#62759a"
              strokeWidth="2"
            />

            <foreignObject
              x={x - 24}
              y={y - 24}
              width="48"
              height="48"
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color,
                }}
              >
                <Icon size={32} />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  )
}