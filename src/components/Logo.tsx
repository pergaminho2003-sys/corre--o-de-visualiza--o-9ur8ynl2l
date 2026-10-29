import { Link } from 'react-router-dom'
import logoAsset from '@/assets/download-4b9e3.png'
import { useTransparentLogo } from '@/hooks/use-transparent-logo'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact' | 'horizontal'
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  containerVariant?: 'header' | 'footer' | 'card' | 'ghost' | 'hero'
  asLink?: boolean
  showGlow?: boolean
}

export function Logo({
  className = '',
  onClick,
  size = 'md',
  containerVariant = 'header',
  asLink = true,
  showGlow = false,
}: LogoProps) {
  // Process the asset to ensure white background is 100% removed
  // and typography is rendered crisply in white over dark backgrounds
  const { processedSrc } = useTransparentLogo(logoAsset, { brightenText: true })

  // Size presets for image height
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-16 sm:h-20 md:h-24',
    hero: 'h-24 sm:h-32 md:h-40 lg:h-48 max-w-[85vw] sm:max-w-md md:max-w-lg',
  }

  const containerStyles = {
    header:
      'bg-slate-900/40 border border-slate-800/60 shadow-md shadow-black/30 hover:border-red-600/40 hover:bg-slate-900/60 p-1.5 sm:p-2 rounded-2xl backdrop-blur-md',
    footer:
      'bg-slate-900/60 border border-slate-800/70 shadow-lg shadow-black/40 hover:border-red-600/40 p-2 sm:p-2.5 rounded-2xl backdrop-blur-md',
    card: 'bg-slate-950/80 border border-slate-800/90 shadow-md hover:border-red-600/40 p-2 rounded-2xl',
    ghost: 'bg-transparent border-none p-0 shadow-none rounded-none',
    hero: 'bg-transparent border-none p-0 shadow-none rounded-none',
  }

  const content = (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${containerStyles[containerVariant]}`}
    >
      {/* Red accent glow */}
      {showGlow && (
        <div
          className="absolute inset-0 -m-6 sm:-m-10 bg-radial from-red-600/35 via-red-600/15 to-transparent rounded-full blur-2xl pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />
      )}

      {containerVariant !== 'ghost' && containerVariant !== 'hero' && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-600/20 via-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
      )}

      <img
        src={processedSrc}
        alt="Player Mindset Viagens"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_8px_24px_rgba(196,39,39,0.3)]`}
        loading="eager"
      />
    </div>
  )

  if (!asLink) {
    return <div className={`inline-flex items-center justify-center ${className}`}>{content}</div>
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl transition-all duration-200 ${className}`}
      aria-label="Player Mindset Viagens"
    >
      {content}
    </Link>
  )
}
