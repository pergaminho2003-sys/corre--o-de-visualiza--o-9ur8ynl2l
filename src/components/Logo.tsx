import { Link } from 'react-router-dom'
import logoAsset from '@/assets/apresentacao-e959a.png'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact' | 'horizontal'
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  containerVariant?: 'header' | 'footer' | 'card' | 'ghost'
}

export function Logo({
  className = '',
  variant = 'horizontal',
  onClick,
  size = 'md',
  containerVariant = 'header',
}: LogoProps) {
  // Size presets for image height
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
  }

  const containerStyles = {
    header:
      'bg-slate-900/70 border border-slate-800/80 shadow-md shadow-black/40 hover:border-red-600/40 hover:bg-slate-900/90 p-1.5 sm:p-2',
    footer:
      'bg-slate-900/90 border border-slate-800 shadow-lg shadow-black/50 hover:border-red-600/40 p-2 sm:p-2.5',
    card: 'bg-slate-950/80 border border-slate-800/90 shadow-md hover:border-red-600/40 p-2',
    ghost: 'bg-transparent border-none p-0 shadow-none',
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl transition-all duration-200 ${className}`}
      aria-label="Player Mindset Viagens"
    >
      {/* Organic badge container designed to blend the asset seamlessly into the dark sports pitch theme */}
      <div
        className={`relative flex items-center shrink-0 rounded-2xl backdrop-blur-md transition-all duration-300 ${containerStyles[containerVariant]}`}
      >
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-600/20 via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
        <img
          src={logoAsset}
          alt="Player Mindset Viagens"
          className={`${sizeClasses[size]} w-auto object-contain rounded-xl transition-transform duration-200 group-hover:scale-[1.02]`}
        />
      </div>
    </Link>
  )
}
