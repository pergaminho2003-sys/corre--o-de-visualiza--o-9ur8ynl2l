import { Link } from 'react-router-dom'
import logoAsset from '@/assets/apresentacao-e959a.png'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact' | 'horizontal'
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', variant = 'horizontal', onClick, size = 'md' }: LogoProps) {
  // Size presets
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center gap-3 group focus:outline-none transition-transform hover:opacity-95 ${className}`}
      aria-label="Player Mindset Viagens"
    >
      {/* Official Logo Image from asset */}
      <div className="relative flex items-center shrink-0">
        <img
          src={logoAsset}
          alt="Player Mindset Viagens"
          className={`${sizeClasses[size]} w-auto object-contain rounded-md filter contrast-105 group-hover:scale-[1.02] transition-transform duration-200`}
        />
      </div>
    </Link>
  )
}
