import { Plane, Car, ShieldCheck, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SERVICES = [
  {
    icon: Plane,
    title: 'Passagens & Hospedagens',
    description: 'Deslocamento aéreo ou terrestre e hospedagens que atendam seu objetivo',
    tag: 'Logística Total',
  },
  {
    icon: Car,
    title: 'Locação de veículos / translado',
    description: 'Parceria Localiza e Movida',
    tag: 'Mobilidade Local',
  },
  {
    icon: ShieldCheck,
    title: 'Documentação & Seguros',
    description: 'Embarque de menores de idade, seguro viagem e check list',
    tag: 'Zero Risco',
  },
  {
    icon: Headphones,
    title: 'Suporte e assessoria jurídica',
    description: 'Acompanhamento e resolução de problemas',
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
