import { useEffect, useState, useRef } from 'react'
import { ResultRecord } from '@/types/landing'
import { getResults } from '@/services/results'
import { Trophy, TrendingUp, Users, Award, ShieldAlert } from 'lucide-react'

// Default fallback data if empty/loading/error
const FALLBACK_RESULTS: ResultRecord[] = [
  {
    id: '1',
    metric_value: 120,
    prefix: '+',
    suffix: '',
    label: 'viagens realizadas',
    order: 1,
    created: '',
    updated: '',
  },
  {
    id: '2',
    metric_value: 15,
    prefix: '',
    suffix: '',
    label: 'países visitados',
    order: 2,
    created: '',
    updated: '',
  },
  {
    id: '3',
    metric_value: 3500,
    prefix: '+',
    suffix: '',
    label: 'atletas embarcados',
    order: 3,
    created: '',
    updated: '',
  },
  {
    id: '4',
    metric_value: 98,
    prefix: '',
    suffix: '%',
    label: 'de aprovação das famílias',
    order: 4,
    created: '',
    updated: '',
  },
]

function CountUp({ endValue, duration = 1800 }: { endValue: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const startVal = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = Math.floor(startVal + (endValue - startVal) * easeProgress)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, endValue, duration])

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>
}

export function ResultsScoreboard({ results = [] }: { results?: ResultRecord[] }) {
  const displayResults = results.length > 0 ? results : FALLBACK_RESULTS

  const getIcon = (idx: number) => {
    switch (idx % 4) {
      case 0:
        return <Trophy className="w-5 h-5 text-yellow-400" />
      case 1:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />
      case 2:
        return <Users className="w-5 h-5 text-sky-400" />
      default:
        return <Award className="w-5 h-5 text-yellow-400" />
    }
  }

  return (
    <section
      id="numeros"
      className="relative z-20 -mt-6 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Scoreboard Shell */}
      <div className="bg-slate-900/95 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl ring-1 ring-emerald-500/20">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-1">
            Placar de Resultados
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Números de quem joga com a gente
          </h2>
          <div className="sprint-line mt-3" />
        </div>

        {/* 4-column scoreboard grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayResults.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-5 text-center flex flex-col items-center justify-center hover:border-emerald-500/40 hover:bg-slate-950 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getIcon(idx)}
              </div>

              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight flex items-center justify-center">
                {item.prefix && <span className="text-emerald-400 mr-0.5">{item.prefix}</span>}
                <CountUp endValue={item.metric_value} />
                {item.suffix && <span className="text-yellow-400 ml-0.5">{item.suffix}</span>}
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
