const DESTINATIONS = [
  'Barcelona',
  'Lisboa',
  'Orlando',
  'Tóquio',
  'Paris',
  'Buenos Aires',
  'Londres',
  'Dubai',
  'Roma',
  'Miami',
  'Madri',
  'Doha',
]

export function MarqueeStrip() {
  return (
    <div
      id="destinos"
      className="relative w-full bg-slate-900/90 border-y border-slate-800/80 py-3.5 overflow-hidden z-20 backdrop-blur-sm"
    >
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center whitespace-nowrap select-none">
        {/* First repetition */}
        <div className="flex items-center gap-6 text-sm md:text-base font-bold uppercase tracking-wider text-emerald-400">
          {DESTINATIONS.map((city, i) => (
            <span key={`dest-1-${i}`} className="inline-flex items-center gap-6">
              <span className="hover:text-yellow-400 transition-colors">{city}</span>
              <span className="text-yellow-400/70 text-xs">★</span>
            </span>
          ))}
        </div>

        {/* Second repetition for smooth seamless loop */}
        <div className="flex items-center gap-6 text-sm md:text-base font-bold uppercase tracking-wider text-emerald-400 ml-6">
          {DESTINATIONS.map((city, i) => (
            <span key={`dest-2-${i}`} className="inline-flex items-center gap-6">
              <span className="hover:text-yellow-400 transition-colors">{city}</span>
              <span className="text-yellow-400/70 text-xs">★</span>
            </span>
          ))}
        </div>

        {/* Third repetition just in case on ultra-wide screens */}
        <div className="flex items-center gap-6 text-sm md:text-base font-bold uppercase tracking-wider text-emerald-400 ml-6">
          {DESTINATIONS.map((city, i) => (
            <span key={`dest-3-${i}`} className="inline-flex items-center gap-6">
              <span className="hover:text-yellow-400 transition-colors">{city}</span>
              <span className="text-yellow-400/70 text-xs">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
