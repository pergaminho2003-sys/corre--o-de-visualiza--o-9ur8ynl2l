import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className = '', onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 group focus:outline-none ${className}`}
      aria-label="Player Mindset Viagens"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-slate-950 flex items-center justify-center shadow-md shadow-emerald-500/20 ring-1 ring-emerald-400/40 group-hover:scale-105 transition-transform duration-200">
        <Zap className="w-5 h-5 text-white fill-current" />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-base font-extrabold tracking-wider text-white font-heading uppercase">
            Player Mindset
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Viagens
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-medium tracking-tight mt-0.5">
          Logística esportiva de alta performance
        </span>
      </div>
    </Link>
  )
}
