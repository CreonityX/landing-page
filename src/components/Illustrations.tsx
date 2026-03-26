export const HeroIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract Background Elements */}
    <rect x="20" y="20" width="360" height="360" fill="#18181b" stroke="#ffffff" strokeWidth="4" />
    <circle cx="200" cy="200" r="140" fill="none" stroke="#ffffff" strokeWidth="4" strokeDasharray="10 10" />
    
    {/* Creator Character */}
    <g transform="translate(100, 150)">
      <circle cx="50" cy="40" r="30" fill="#bbf7d0" stroke="#ffffff" strokeWidth="4" />
      <path d="M20,130 C20,90 80,90 80,130" fill="#bbf7d0" stroke="#ffffff" strokeWidth="4" />
      <rect x="70" y="60" width="40" height="30" fill="#fca5a5" stroke="#ffffff" strokeWidth="4" transform="rotate(15 70 60)" />
    </g>

    {/* Brand Character */}
    <g transform="translate(200, 150)">
      <rect x="20" y="10" width="60" height="60" rx="10" fill="#fef08a" stroke="#ffffff" strokeWidth="4" />
      <path d="M20,130 C20,90 80,90 80,130" fill="#fef08a" stroke="#ffffff" strokeWidth="4" />
      <rect x="-10" y="60" width="40" height="50" fill="#e9d5ff" stroke="#ffffff" strokeWidth="4" transform="rotate(-15 -10 60)" />
    </g>
    
    {/* Connection / Deal */}
    <path d="M 160 170 L 240 170" stroke="#ffffff" strokeWidth="4" strokeDasharray="8 8" />
    <polygon points="200,150 220,170 200,190" fill="#fdba74" stroke="#ffffff" strokeWidth="4" />
    <polygon points="200,150 180,170 200,190" fill="#fdba74" stroke="#ffffff" strokeWidth="4" />
  </svg>
);
