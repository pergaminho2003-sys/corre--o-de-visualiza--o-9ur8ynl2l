import {
  Compass,
  Flame,
  Trophy,
  Globe,
  Heart,
  Shield,
  Sparkles,
  Footprints,
  Quote,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EssenceSection() {
  const scrollToOrcamento = () => {
    const el = document.querySelector('#orcamento')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="essencia" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-widest backdrop-blur-sm">
          <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          Nossa Essência & Filosofia
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
          Por Trás do <span className="text-red-500">Mindset</span>
        </h2>
        <div className="sprint-line mx-auto" />
        <p className="text-slate-400 text-sm sm:text-base pt-2">
          Da vivência real nos campos e quadras — onde cada viagem é a extensão da preparação de um
          campeão.
        </p>
      </div>

      {/* Main Two-Column Editorial Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
        {/* Left Column: Visual & Founder Athlete Persona Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-red-500/40 transition-all duration-300">
          {/* Subtle top red line accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />

          {/* Photo / Visual Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 mb-6 group-hover:border-red-500/30 transition-colors">
            <img
              src="https://img.usecurling.com/p/800/600?q=women%20soccer%20stadium%20field&dpr=2"
              alt="Visão ampla de campo e estádio de futebol feminino com jogadoras em partida"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-red-500/40 backdrop-blur-md text-xs font-semibold text-slate-200">
                <Trophy className="w-3.5 h-3.5 text-red-500" />
                <span>DNA de Atleta</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono font-medium bg-black/60 px-2 py-0.5 rounded">
                EXPERIÊNCIA REAL
              </span>
            </div>
          </div>

          {/* Persona Pitch */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading leading-tight">
              A experiência de quem já esteve dentro das quatro linhas
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A Player Mindset não foi criada atrás de uma mesa de escritório convencional. Ela
              nasceu da experiência direta da fundadora com o esporte, a paixão por viagens
              <span>&nbsp;e a vivência como atleta.</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Esse histórico moldou um conhecimento profundo da{' '}
              <strong className="text-slate-200 font-semibold">rotina rigorosa</strong>, da{' '}
              <strong className="text-slate-200 font-semibold">urgência de resultados</strong> e das
              particularidades que apenas quem viveu viagens esportivas de alto rendimento consegue
              compreender e antecipar.
            </p>
          </div>

          {/* Highlights Mini Grid */}
          <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <Shield className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-slate-300 font-medium">Urgência & Agilidade</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <Globe className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-slate-300 font-medium">Visão Global</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Manifesto & Mindset of Growth */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {/* Main Manifesto Card */}
          <div className="bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden ring-1 ring-red-500/20">
            {/* Background Quote Watermark */}
            <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-red-600/5 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Nosso Manifesto</span>
              </div>

              {/* Core Manifesto Highlight */}
              <blockquote className="border-l-4 border-red-600 pl-6 my-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-heading leading-snug tracking-tight">
                  “Viajar é o esporte mais transformador do mundo. Cada destino é um novo campo de
                  jogo, cada experiência é uma nova partida capaz de expandir quem você é.”
                </p>
              </blockquote>

              {/* Growth Mindset Text */}
              <div className="space-y-4 pt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Aqueles que cultivam o{' '}
                  <strong className="text-white font-semibold">mindset de crescimento</strong>{' '}
                  entendem que a vida acontece além das fronteiras — quando você se entrega ao
                  desconhecido com coragem e confiança.
                </p>
                <p className="text-slate-400">
                  Não se trata apenas de emitir bilhetes aéreos ou reservar hotéis. Trata-se de
                  construir o ambiente perfeito para que atletas, equipes e comissões técnicas
                  alcancem sua melhor versão quando a pressão é máxima.
                </p>
              </div>

              {/* Inspiring Closing Statement */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/50 via-slate-900/80 to-slate-950 border border-red-900/40 text-slate-200 text-sm sm:text-base font-medium leading-relaxed flex items-start gap-3.5 shadow-inner">
                <Footprints className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <p>
                  “Sentir o mundo dessa forma faz você compreender que, para dar o primeiro passo,
                  basta a curiosidade e você terá histórias, conexões, fôlego e alegria suficiente
                  para ir onde quiser.”
                </p>
              </div>
            </div>
          </div>

          {/* Pillars Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 text-center sm:text-left hover:border-red-500/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">Curiosidade Ativa</h4>
              <p className="text-xs text-slate-400 mt-1">
                O impulso inicial para desbravar novas fronteiras e desafios.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 text-center sm:text-left hover:border-red-500/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">Foco & Disciplina</h4>
              <p className="text-xs text-slate-400 mt-1">
                Cada detalhe logístico sincronizado para a vitória.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 text-center sm:text-left hover:border-red-500/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">Legado & Conexão</h4>
              <p className="text-xs text-slate-400 mt-1">
                Histórias e memórias que marcam a carreira para sempre.
              </p>
            </div>
          </div>

          {/* Mini CTA button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              Quer planejar a próxima viagem esportiva com quem entende o seu ritmo?
            </p>
            <Button
              onClick={scrollToOrcamento}
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-5 rounded-xl text-sm shadow-lg shadow-red-600/20 shrink-0 transition-transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Falar com o time
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
