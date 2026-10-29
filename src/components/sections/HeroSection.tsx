import { APP_CONSTANTS } from '@/config/constants'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ChevronDown, Compass, Shield, Award } from 'lucide-react'
import heroLogoAsset from '@/assets/sem-nome-851-x-310-px-logotipo-1-921c2.png'
import { useTransparentLogo } from '@/hooks/use-transparent-logo'

export function HeroSection() {
  const { processedSrc } = useTransparentLogo(heroLogoAsset, { brightenText: true })

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Background Stadium Photo with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={APP_CONSTANTS.DEFAULT_HERO_IMAGE}
          alt="Estádio de futebol iluminado à noite"
          className="w-full h-full object-cover object-center animate-ken-burns filter brightness-75 contrast-125"
          loading="eager"
        />
        {/* Layered overlays: gradient fade, radial spotlight, dark wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-75" />
        {/* Subtle brand red central glow behind the centered logo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-red-600/18 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#c42727_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Hero Content - Centered Layout */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center">
        {/* Centered Brand Mark / Logo - Hero Main Spotlight com glow vermelho sutil da marca */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center justify-center relative group">
          {/* Subtle brand red glow behind the logo */}
          <div
            className="absolute inset-0 -m-8 sm:-m-12 bg-radial from-red-600/25 via-red-600/10 to-transparent rounded-full blur-2xl pointer-events-none animate-pulse-glow"
            aria-hidden="true"
          />

          {/* Logo tratada para fundo escuro: asa e MINDSET em vermelho #C42727, PLAYER em branco nítido */}
          <div className="relative z-10 flex items-center justify-center py-2 sm:py-3 px-4">
            <img
              src={processedSrc}
              alt="Player Mindset Viagens"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto max-w-[88vw] sm:max-w-md md:max-w-lg object-contain transition-transform duration-300 hover:scale-[1.02] filter drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] drop-shadow-[0_2px_8px_rgba(196,39,39,0.25)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Content Block Below Logo */}
        <div className="max-w-[840px] space-y-6 flex flex-col items-center">
          {/* Headline - "Seu clube foca no jogo. A gente cuida da viagem." / "Transforme viagens em vitórias" */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading uppercase">
            Seu clube foca no jogo.{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
              A gente cuida da viagem.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            Organizamos sua demanda e atendemos a sua necessidade: passagens, hospedagens e
            logística completa — para a sua equipe jogar o melhor jogo em qualquer lugar do mundo.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              onClick={() => scrollTo('#orcamento')}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-6 rounded-xl text-base shadow-xl shadow-red-600/30 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Solicitar reunião
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
          <div className="pt-6 sm:pt-8 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-400 w-full max-w-2xl">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-red-500 shrink-0" />
              <span>Logística 100% blindada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-red-400 shrink-0" />
              <span>Agilidade e condições especiais</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
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
