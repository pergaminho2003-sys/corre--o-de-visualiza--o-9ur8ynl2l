import { Plane, Car, ShieldCheck, Headphones, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SERVICES = [
  {
    icon: Plane,
    title: 'Passagens & Hospedagens',
    description:
      'Emissão de passagens aéreas para grupos e reservas de hospedagens selecionadas com foco em conforto e logística.',
    tag: 'Logística Total',
  },
  {
    icon: Car,
    title: 'Locação de veículos / translado',
    description:
      'Veículos reservados para deslocamento de atletas, comissão técnica e dirigentes durante a viagem, com flexibilidade de horários e rotas.',
    tag: 'Mobilidade Local',
  },
  {
    icon: ShieldCheck,
    title: 'Documentação & Seguros',
    description:
      'Passaportes, emissão de vistos, autorizações de menores e apólices de seguro-saúde de alta cobertura resolvidos.',
    tag: 'Zero Risco',
  },
  {
    icon: Headphones,
    title: 'Suporte 24h',
    description:
      'Acompanhamento completo durante toda a viagem, com nossa equipe bilíngue sempre disponível presencialmente ou por plantão.',
    tag: 'Plantão VIP',
  },
]

export function ServicesSection() {
  const scrollToForm = () => {
    const el = document.querySelector('#orcamento')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="experiencias" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase font-bold tracking-widest text-red-500">
          Serviços Especializados
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Tudo o que o seu clube precisa
        </h2>
        <div className="sprint-line mx-auto" />
        <p className="text-slate-400 text-sm sm:text-base pt-2">
          Cuidamos de cada etapa da logística para sua comissão técnica , funcionários e jogadores.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-red-500/10 group relative overflow-hidden"
            >
              {/* Corner accent glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none group-hover:bg-red-500/15 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-2.5 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-red-400 group-hover:text-red-300">
                <span className="group-hover:mr-2 transition-all">Consulte personalização</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Action banner */}
      <div className="mt-12 text-center">
        <Button
          onClick={scrollToForm}
          variant="outline"
          className="border-slate-800 hover:border-red-500/40 text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-900 px-6 py-5 rounded-xl text-sm"
        >
          Precisa de um roteiro especial para amistosos ou torneio oficial? Fale com a gente
        </Button>
      </div>
    </section>
  )
}
