import { APP_CONSTANTS } from '@/config/constants'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ChevronDown, Compass, Shield, Award } from 'lucide-react'

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Stadium Photo with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={APP_CONSTANTS.DEFAULT_HERO_IMAGE}
          alt="Estádio de futebol iluminado à noite"
          className="w-full h-full object-cover object-center animate-ken-burns filter brightness-75 contrast-125"
          loading="eager"
        />
        {/* Layered overlays: gradient fade, radial spotlight, dark wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#c42727_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        <div className="max-w-[720px] space-y-6 text-left">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-red-500/40 text-xs font-semibold text-red-300 shadow-lg shadow-red-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-red-500 absolute" />
            <span className="ml-1">Viagens&nbsp;para clubes e atletas</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-heading uppercase">
            Transforme viagens em{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-rose-300 bg-clip-text text-transparent">
              vitórias
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            Organizamos sua demanda e atendemos a sua necessidade: passagens, hospedagens e
            logística completa — para a sua equipe jogar o melhor jogo em qualquer lugar do mundo.
          </p>

          {/* CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              onClick={() => scrollTo('#orcamento')}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-6 rounded-xl text-base shadow-xl shadow-red-600/30 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Solicitar orçamento
              <ArrowUpRight className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollTo('#essencia')}
              className="border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white px-7 py-6 rounded-xl text-base backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 mr-2 text-red-500" />
              Nossa essência
            </Button>
          </div>

          {/* Quick trust badges */}
          <div className="pt-6 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-500 shrink-0" />
              <span>Logística 100% blindada</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-red-400 shrink-0" />
              <span>Agilidade e condições especiais</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span>Plantão 24/7 na viagem</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => scrollTo('#destinos')}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
          Rolar
        </span>
        <ChevronDown className="w-5 h-5 text-red-500 animate-bounce" />
      </div>
    </section>
  )
}
