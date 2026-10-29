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
    <section id="diferenciais" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase font-bold tracking-widest text-red-500">
          Por que a Player Mindset
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Nossos Diferenciais Estratégicos
        </h2>
        <div className="sprint-line mx-auto" />
        <p className="text-slate-400 text-sm sm:text-base pt-2">
          Estrutura e know-how dedicados exclusivamente a atletas, comissões técnicas e delegações
          de alto rendimento.
        </p>
      </div>

      {/* Differentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIFFERENTIALS.map((diff, index) => {
          const Icon = diff.icon
          return (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 hover:border-red-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/90"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">{diff.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {diff.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
