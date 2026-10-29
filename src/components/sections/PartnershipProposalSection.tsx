import {
  Users2,
  Zap,
  ReceiptText,
  LifeBuoy,
  CalendarCheck,
  Building2,
  ArrowRight,
  ShieldCheck,
  Clock,
  PlaneTakeoff,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const PARTNERSHIP_PILLARS = [
  {
    id: 'atendimento-direto',
    number: '01',
    icon: Users2,
    badge: 'Sem Intermediários',
    title: 'Atendimento Direto & Exclusivo',
    subtitle: 'Contato próximo com quem respira o futebol',
    description:
      'Canal dedicado com especialistas em delegações esportivas. Você fala diretamente com tomadores de decisão que entendem a pressão de viagens, cronogramas de treino e particularidades de atletas e comissões técnicas.',
    highlight: 'Gerente de conta exclusivo',
  },
  {
    id: 'agilidade-urgencias',
    number: '02',
    icon: Zap,
    badge: 'Pronto Atendimento',
    title: 'Agilidade para Demandas Urgentes',
    subtitle: 'Resposta imediata para janelas e viagens de última hora',
    description:
      'Janela de transferências, mudanças repentinas de tabela, convocações de última hora ou jogos decisivos: acione nossa equipe a qualquer momento com resposta ágil para emissões expressas e reacomodações sem burocracia.',
    highlight: 'Plantão tático 24/7',
  },
  {
    id: 'faturamento-flexivel',
    number: '03',
    icon: ReceiptText,
    badge: 'Controle Financeiro',
    title: 'Faturamento Conforme as Necessidades do Clube',
    subtitle: 'Flexibilidade alinhada ao fluxo de caixa de cada entidade',
    description:
      'Estruturamos modelos customizados para a realidade do clube: faturamento mensal consolidado, por operação/torneio ou faturamento direto com centro de custos detalhado para prestação de contas com total transparência.',
    highlight: 'Mensal, por torneio ou por atleta',
  },
  {
    id: 'suporte-toda-operacao',
    number: '04',
    icon: LifeBuoy,
    badge: 'Do Embarque ao Retorno',
    title: 'Suporte Durante Toda a Operação',
    subtitle: 'Acompanhamento antes, durante e depois da viagem',
    description:
      'Não abandonamos sua equipe após a emissão dos bilhetes. Monitoramos cada conexão de voo, recepção em aeroportos, check-in esportivo, pontualidade de traslados e seguro completo até o retorno de todos ao clube.',
    highlight: 'Gestão de ponta a ponta',
  },
]

export function PartnershipProposalSection() {
  const scrollToOrcamento = (meetingType?: 'presencial' | 'online') => {
    const el = document.querySelector('#orcamento')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      if (meetingType) {
        // Dispatch custom event or set selection in form if available
        window.dispatchEvent(
          new CustomEvent('pmv:select-meeting-type', {
            detail: { type: meetingType },
          }),
        )
      }
    }
  }

  return (
    <section
      id="proposta-parceria"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 border-y border-slate-800/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-slate-800/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-widest backdrop-blur-sm">
            <Building2 className="w-3.5 h-3.5 text-red-500" />
            Parceria Institucional para Novos Clubes
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Uma Parceria Estratégica em{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
              Logística & Performance
            </span>
          </h2>

          <div className="sprint-line mx-auto" />

          <p className="text-slate-300 text-sm sm:text-base md:text-lg pt-2 leading-relaxed">
            Estruturamos a operação de viagens do seu clube com padrão profissional internacional.
            Menos desgaste operacional para a diretoria, máxima economia para o orçamento e total
            segurança para atletas e comissão técnica.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERSHIP_PILLARS.map((pillar) => {
            const Icon = pillar.icon

            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-slate-950/80 border border-slate-800/90 hover:border-red-500/40 hover:bg-slate-950"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                    <span className="text-3xl font-black font-heading text-slate-800 group-hover:text-red-500/40 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-13 h-13 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white font-heading mb-1.5 group-hover:text-red-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-3.5">{pillar.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer tag */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className="text-red-400">{pillar.highlight}</span>
                  <div className="w-2 h-2 rounded-full bg-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Strong Commercial Callout Card (Meeting Invite: Presential or Online) */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border-2 border-red-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden ring-1 ring-red-500/20">
          {/* Subtle background plane graphic */}
          <PlaneTakeoff className="absolute -bottom-10 -right-10 w-72 h-72 text-red-600/5 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-xs font-bold text-red-300 uppercase tracking-widest">
              <CalendarCheck className="w-4 h-4 text-red-400" />
              Diagnóstico Estratégico & Reunião Executiva
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading leading-tight">
              Vamos conversar sobre o calendário de viagens do seu clube?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Solicite uma reunião com nossos diretores de logística esportiva —{' '}
              <strong className="text-white font-semibold">
                inclusive presencial na sede do seu clube ou centro de treinamento
              </strong>{' '}
              — para mapear o calendário de viagens, entender suas demandas e apresentar um estudo
              exclusivo de economia.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => scrollToOrcamento('presencial')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-extrabold px-8 py-6 rounded-xl text-base shadow-xl shadow-red-600/30 transition-transform duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Solicitar reunião presencial
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToOrcamento('online')}
                className="w-full sm:w-auto border-slate-700 bg-slate-950/70 hover:bg-slate-900 text-slate-200 hover:text-white px-7 py-6 rounded-xl text-base backdrop-blur-sm flex items-center justify-center gap-2 hover:border-red-500/40"
              >
                <Clock className="w-4 h-4 text-red-500" />
                Agendar reunião online / proposta
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Guarantee badges */}
            <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Sem compromisso contratual prévio</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span>Resposta e agendamento em até 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Disponibilidade para viagens de diretoria em todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
