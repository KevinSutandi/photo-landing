export default function AnimatedScribble() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-1 left-0 h-4 w-full"
      viewBox="0 0 140 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main artistic scribble path */}
      <path
        d="M3 8C8 4 15 12 25 7C35 3 42 11 52 8C62 5 68 13 78 9C88 6 95 12 105 8C115 4 125 10 135 7"
        stroke="#d4af37"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-scribble"
        style={{
          strokeDasharray: '180',
          strokeDashoffset: '180',
          animation: 'drawScribble 2.5s ease-out 1s forwards',
          filter: 'drop-shadow(0 0 3px rgba(212, 175, 55, 0.4))',
        }}
      />
      {/* Second layer for more artistic depth */}
      <path
        d="M5 9C12 6 18 11 28 8C38 5 45 12 55 9C65 6 72 11 82 8C92 5 98 11 108 8C118 5 128 11 137 8"
        stroke="#f2e6b6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-scribble-second"
        style={{
          strokeDasharray: '170',
          strokeDashoffset: '170',
          animation: 'drawScribble 2.2s ease-out 1.3s forwards',
          opacity: '0.7',
        }}
      />
    </svg>
  )
}
