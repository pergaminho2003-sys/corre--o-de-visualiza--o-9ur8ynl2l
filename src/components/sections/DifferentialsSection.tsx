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
    <section id="diferenciais" className="py-20 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-red-500 text-xs uppercase tracking-widest font-bold">
            Vantagens exclusivas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
            Por que viajar com a Player Mindset
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Estrutura e metodologia pensadas para equipes de alto rendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-red-600/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
