import { Shield, Sparkles, Clock, Globe2, Banknote, UserCheck } from 'lucide-react'

const DIFFERENTIALS = [
  {
    icon: Banknote,
    title: 'Tarifas de Grupo Sem Intermediários',
    description:
      'Negociação direta com companhias aéreas e redes hoteleiras globais garantindo as menores taxas e franquia extra de bagagem para material esportivo.',
  },
  {
    icon: Clock,
    title: 'Plantão em Tempo Real 24/7',
    description:
      'Um gerente de operações dedicado acompanhando voos, conexões, traslados e imprevistos em tempo real para a sua tranquilidade.',
  },
  {
    icon: Shield,
    title: 'Segurança e Seguros Especializados',
    description:
      'Apólices internacionais específicas para a prática esportiva de alto rendimento, cobrindo eventuais lesões e pronto atendimento médico.',
  },
  {
    icon: Globe2,
    title: 'Rede Global de Contatos',
    description:
      'Parcerias com clubes, centros de treinamento e organizadores de torneios na Europa, América do Norte, América do Sul e Ásia.',
  },
  {
    icon: Sparkles,
    title: 'Roteiros 100% Personalizados',
    description:
      'Adaptação total ao calendário de competições do seu time, horários de treino, descanso pré-jogo e perfil nutricional.',
  },
  {
    icon: UserCheck,
    title: 'Expertise em Categorias de Base',
    description:
      'Cuidado redobrado com documentação de menores de idade, autorizações de viagem e comunicação constante com os familiares.',
  },
]

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-t border-slate-900 relative"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
            Por que a Player Mindset?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            O padrão de excelência para quem vive de futebol
          </h2>
          <div className="sprint-line mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base pt-2">
            Entendemos a rotina, a pressão e os detalhes que fazem uma comissão técnica ter sucesso
            fora de casa.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIALS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-7 hover:border-emerald-500/40 hover:bg-slate-950 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-2.5 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
