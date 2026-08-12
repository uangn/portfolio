export function ProjectVisual({ type }: { type: 'automl' | 'bim' | 'cv' }) {
  if (type === 'automl') {
    return (
      <svg viewBox="0 0 640 360" className="project-svg" role="img" aria-label="AutoML architecture visual">
        <defs>
          <linearGradient id="automlG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c5cff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
        </defs>
        <rect width="640" height="360" rx="28" fill="#09101f" />
        <rect x="42" y="54" width="170" height="252" rx="18" fill="#111a2e" stroke="#273652" />
        <rect x="67" y="84" width="120" height="14" rx="7" fill="#53657e" />
        <rect x="67" y="116" width="120" height="56" rx="12" fill="#0d1526" stroke="#33425d" />
        <text x="84" y="150" fill="#cbd5e1" fontSize="18">CSV</text>
        <rect x="67" y="194" width="120" height="70" rx="12" fill="url(#automlG)" opacity=".18" stroke="#645cff" />
        <text x="84" y="225" fill="#fff" fontSize="16">Prompt</text>
        <text x="84" y="247" fill="#a9b5c8" fontSize="11">predict age...</text>
        <path d="M228 180H302" stroke="#55d9ff" strokeWidth="4" strokeDasharray="9 8" />
        <circle cx="324" cy="180" r="28" fill="#111a2e" stroke="#7c5cff" strokeWidth="3" />
        <path d="M314 180l8 8 14-17" fill="none" stroke="#66f2b2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M352 180H426" stroke="#55d9ff" strokeWidth="4" strokeDasharray="9 8" />
        <rect x="444" y="82" width="154" height="196" rx="20" fill="#111a2e" stroke="#273652" />
        <rect x="468" y="108" width="105" height="24" rx="8" fill="#0d1526" />
        <rect x="468" y="149" width="105" height="12" rx="6" fill="#2f4664" />
        <rect x="468" y="174" width="82" height="12" rx="6" fill="#2f4664" />
        <rect x="468" y="217" width="105" height="34" rx="10" fill="url(#automlG)" />
        <text x="491" y="239" fill="#fff" fontSize="13">MODEL</text>
      </svg>
    )
  }

  if (type === 'bim') {
    return (
      <svg viewBox="0 0 640 360" className="project-svg" role="img" aria-label="BIM assistant visual">
        <rect width="640" height="360" rx="28" fill="#09101f" />
        <g fill="none" stroke="#3d4f6c" strokeWidth="2">
          <path d="M88 270L320 118l232 152" />
          <path d="M150 230v72h340v-72" />
          <path d="M320 118v184" />
          <path d="M215 187v115M425 187v115" />
          <path d="M150 230h340" />
        </g>
        <g fill="#0f1a2f" stroke="#637aa3">
          <rect x="176" y="236" width="90" height="54" rx="8" />
          <rect x="374" y="236" width="90" height="54" rx="8" />
        </g>
        <circle cx="320" cy="104" r="42" fill="#151d35" stroke="#8b6cff" strokeWidth="3" />
        <path d="M300 108c18-25 35-25 44 0-8 18-37 18-44 0z" fill="#8b6cff" opacity=".24" />
        <circle cx="321" cy="105" r="8" fill="#69e6ff" />
        <path d="M320 146v42" stroke="#8b6cff" strokeWidth="3" strokeDasharray="8 7" />
        <rect x="62" y="58" width="170" height="66" rx="16" fill="#111a2e" stroke="#2e4669" />
        <text x="82" y="87" fill="#fff" fontSize="13">"Find rooms with</text>
        <text x="82" y="107" fill="#b8c4d6" fontSize="13">more than 20 m²"</text>
        <path d="M232 91H270" stroke="#69e6ff" strokeWidth="3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 640 360" className="project-svg" role="img" aria-label="CV generator extension visual">
      <rect width="640" height="360" rx="28" fill="#09101f" />
      <rect x="80" y="55" width="480" height="250" rx="22" fill="#111a2e" stroke="#283957" />
      <rect x="80" y="55" width="480" height="45" rx="22" fill="#151f34" />
      <circle cx="108" cy="78" r="6" fill="#ef6d80" />
      <circle cx="130" cy="78" r="6" fill="#f6c75c" />
      <circle cx="152" cy="78" r="6" fill="#64df9b" />
      <rect x="108" y="125" width="170" height="144" rx="14" fill="#0c1425" />
      <rect x="305" y="125" width="225" height="18" rx="9" fill="#33445f" />
      <rect x="305" y="159" width="180" height="12" rx="6" fill="#26364f" />
      <rect x="305" y="184" width="205" height="12" rx="6" fill="#26364f" />
      <rect x="305" y="209" width="142" height="12" rx="6" fill="#26364f" />
      <rect x="305" y="244" width="112" height="34" rx="10" fill="#7c5cff" />
      <text x="328" y="266" fill="#fff" fontSize="12">GENERATE</text>
      <path d="M145 150h88M145 178h72M145 206h91M145 234h58" stroke="#4d6385" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}
