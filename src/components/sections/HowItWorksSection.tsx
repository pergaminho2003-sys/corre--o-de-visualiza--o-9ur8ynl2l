import { MessageSquareText, MapPinned, Trophy, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: MessageSquareText,
    title: 'Conte seu plano',
    description: 'Compartilhe os objetivos e demandas do clube',
    highlight: 'Diagnóstico sem custo',
  },
  {
    step: '02',
    icon: MapPinned,
    title: 'Elaboramos as estratégias e condições de pagamento',
    description: 'Planejamento anual sob medida, com condições negociadas para o caixa do clube.',
    highlight: 'Planejamento 100% sob medida',
  },
  {
    step: '03',
    icon: Trophy,
    title: 'É só entrar em campo',
    description:
      'Acompanhamento integral do serviço e suporte jurídico dedicado para resolver qualquer imprevisto durante a viagem.',
    highlight: 'Suporte presencial e 24/7',
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-900 relative"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-red-500">
            Metodologia Player Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Do primeiro contato ao apito final
          </h2>
          <div className="sprint-line mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base pt-2">
            Um processo testado e aprovado para eliminar preocupações operacionais.
          </p>
        </div>

        {/* 3 Steps horizontal on desktop, vertical rail on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-red-600/10 via-red-500/40 to-red-600/10 -z-0" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="relative z-10 bg-slate-950/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-red-500/40 hover:bg-slate-950 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black font-heading text-slate-800 group-hover:text-red-500/30 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{step.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className="text-red-400 font-bold">{step.highlight}</span>
                  <span className="text-slate-600 group-hover:text-red-400 transition-colors">
                    Fase {idx + 1}/3
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
