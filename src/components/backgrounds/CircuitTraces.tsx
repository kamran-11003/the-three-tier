export function CircuitTraces() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Horizontal main traces */}
        <path
          d="M0 200 H400 V320 H800 V200 H1440"
          stroke="#F2EDE6" strokeWidth="1"
          strokeDasharray="8 4"
          style={{ animation: 'trace-h 6s linear infinite' }}
        />
        <path
          d="M0 500 H300 V420 H700 V560 H1100 V480 H1440"
          stroke="#F2EDE6" strokeWidth="0.5"
          strokeDasharray="6 6"
          style={{ animation: 'trace-h 9s linear infinite 2s' }}
        />

        {/* Vertical traces */}
        <path
          d="M360 0 V200 M360 320 V800"
          stroke="#F2EDE6" strokeWidth="0.5"
          strokeDasharray="4 8"
          style={{ animation: 'trace-v 7s linear infinite 1s' }}
        />
        <path
          d="M900 0 V200 M900 560 V800"
          stroke="#F2EDE6" strokeWidth="0.5"
          strokeDasharray="4 8"
          style={{ animation: 'trace-v 8s linear infinite 3s' }}
        />

        {/* Nodes at intersections */}
        <circle cx="400" cy="200" r="3" fill="#F2EDE6" opacity="0.6" />
        <circle cx="800" cy="200" r="3" fill="#F2EDE6" opacity="0.6" />
        <circle cx="300" cy="500" r="2" fill="#F2EDE6" opacity="0.4" />
        <circle cx="700" cy="420" r="2" fill="#F2EDE6" opacity="0.4" />
        <circle cx="1100" cy="480" r="3" fill="#F2EDE6" opacity="0.6" />
      </svg>
    </div>
  )
}
