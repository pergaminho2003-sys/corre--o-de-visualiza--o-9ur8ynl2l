import { CalendarCheck, PlaneTakeoff, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ExecutiveDiagnosisCard() {
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
    <section className="px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto pt-16 sm:pt-20">
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
    </section>
  )
}
