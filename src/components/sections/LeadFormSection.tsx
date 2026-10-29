import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { APP_CONSTANTS } from '@/config/constants'
import { createLead } from '@/services/leads'
import { LeadPayload } from '@/types/landing'
import {
  CheckCircle2,
  Send,
  Loader2,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from 'lucide-react'

export function LeadFormSection() {
  const [formData, setFormData] = useState<LeadPayload>({
    club_name: '',
    contact_name: '',
    email: '',
    phone: '',
    estimated_trips: '1-10',
    message: '',
  })
  const [preferredMeeting, setPreferredMeeting] = useState<'presencial' | 'online' | 'indiferente'>(
    'indiferente',
  )

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  // Listen for custom meeting selection from other sections (e.g., PartnershipProposalSection)
  React.useEffect(() => {
    const handleMeetingSelection = (e: Event) => {
      const customEvent = e as CustomEvent<{ type?: 'presencial' | 'online' }>
      if (customEvent.detail?.type) {
        setPreferredMeeting(customEvent.detail.type)
      }
    }

    window.addEventListener('pmv:select-meeting-type', handleMeetingSelection)
    return () => {
      window.removeEventListener('pmv:select-meeting-type', handleMeetingSelection)
    }
  }, [])

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.club_name.trim()) {
      errors.club_name = 'Por favor, informe o nome do clube.'
    }
    if (!formData.contact_name.trim()) {
      errors.contact_name = 'Por favor, informe o nome do responsável.'
    }
    if (!formData.email.trim()) {
      errors.email = 'Por favor, informe o e-mail de contato.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Informe um e-mail válido.'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Por favor, informe um telefone ou WhatsApp.'
    }
    if (!formData.estimated_trips) {
      errors.estimated_trips = 'Selecione a estimativa de viagens.'
    }
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setFieldErrors({})

    const clientErrors = validateForm()
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors)
      return
    }

    setLoading(true)
    try {
      // Append preferred meeting type to message cleanly if specified
      let finalMessage = formData.message?.trim() || ''
      if (preferredMeeting === 'presencial') {
        const meetingNote = '[SOLICITAÇÃO DE REUNIÃO PRESENCIAL NO CLUBE]'
        finalMessage = finalMessage ? `${meetingNote}\n${finalMessage}` : meetingNote
      } else if (preferredMeeting === 'online') {
        const meetingNote = '[PREFERÊNCIA: REUNIÃO ONLINE / APRESENTAÇÃO VIRTUAL]'
        finalMessage = finalMessage ? `${meetingNote}\n${finalMessage}` : meetingNote
      }

      await createLead({
        club_name: formData.club_name.trim(),
        contact_name: formData.contact_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        estimated_trips: formData.estimated_trips,
        message: finalMessage,
      })
      setSuccess(true)
    } catch (err: any) {
      console.error('Falha ao enviar proposta:', err)
      if (err?.data?.data) {
        // Map backend validation errors if any
        const backendErrors: Record<string, string> = {}
        Object.entries(err.data.data).forEach(([key, val]: [string, any]) => {
          backendErrors[key] = val?.message || 'Campo inválido'
        })
        setFieldErrors(backendErrors)
      } else {
        setErrorMessage(
          'Não foi possível enviar sua solicitação no momento. Você também pode nos chamar diretamente no WhatsApp.',
        )
      }
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      club_name: '',
      contact_name: '',
      email: '',
      phone: '',
      estimated_trips: '1-10',
      message: '',
    })
    setPreferredMeeting('indiferente')
    setFieldErrors({})
    setErrorMessage(null)
    setSuccess(false)
  }

  return (
    <section id="orcamento" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Formulário de proposta centralizado */}
      <div className="max-w-3xl mx-auto">
        {/* Match Ticket Form Card */}
        <div>
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden ring-4 ring-red-500/20 border border-slate-200">
            {/* Ticket header perforation styling */}
            <div className="border-b-2 border-dashed border-slate-300 pb-6 mb-8 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-red-600 block">
                  FORMULÁRIO DE PROPOSTA
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-heading">
                  Passe de Embarque
                </h3>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono font-bold text-slate-700 border border-slate-200">
                  PMV-2025
                </span>
              </div>
            </div>

            {/* Error banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">Erro ao enviar</p>
                  <p className="text-xs">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Form or Success State */}
            {success ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-red-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-slate-900 font-heading">
                    Recebemos sua solicitação!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Nosso time de especialistas em logística esportiva entrará em contato em até 48
                    horas úteis para apresentar o roteiro ideal.
                  </p>
                </div>

                <div className="pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="border-slate-300 hover:bg-slate-100 text-slate-800 font-bold px-6 py-5 rounded-xl text-sm"
                  >
                    Enviar outra solicitação
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome do clube */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="club_name"
                      className="text-xs font-bold text-slate-800 uppercase tracking-wider"
                    >
                      Nome do clube / Associação <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="club_name"
                      placeholder="Ex: Associação Atlética Horizonte"
                      value={formData.club_name}
                      onChange={(e) => setFormData({ ...formData, club_name: e.target.value })}
                      className="bg-slate-50 border-slate-300 text-slate-900 focus-visible:ring-red-500"
                    />
                    {fieldErrors.club_name && (
                      <span className="text-xs text-red-600 font-medium block">
                        {fieldErrors.club_name}
                      </span>
                    )}
                  </div>

                  {/* Nome do contato */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact_name"
                      className="text-xs font-bold text-slate-800 uppercase tracking-wider"
                    >
                      Nome do responsável <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contact_name"
                      placeholder="Ex: Carlos Menezes"
                      value={formData.contact_name}
                      onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                      className="bg-slate-50 border-slate-300 text-slate-900 focus-visible:ring-red-500"
                    />
                    {fieldErrors.contact_name && (
                      <span className="text-xs text-red-600 font-medium block">
                        {fieldErrors.contact_name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-bold text-slate-800 uppercase tracking-wider"
                    >
                      E-mail corporativo <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contato@seutime.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-50 border-slate-300 text-slate-900 focus-visible:ring-red-500"
                    />
                    {fieldErrors.email && (
                      <span className="text-xs text-red-600 font-medium block">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="text-xs font-bold text-slate-800 uppercase tracking-wider"
                    >
                      Telefone / WhatsApp <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-50 border-slate-300 text-slate-900 focus-visible:ring-red-500"
                    />
                    {fieldErrors.phone && (
                      <span className="text-xs text-red-600 font-medium block">
                        {fieldErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantas viagens por ano? (select, required) with options: 1-10, 11-30, 31-60, 60+ */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="estimated_trips"
                    className="text-xs font-bold text-slate-800 uppercase tracking-wider"
                  >
                    Quantas viagens por ano o clube realiza? <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="estimated_trips"
                    value={formData.estimated_trips}
                    onChange={(e) => setFormData({ ...formData, estimated_trips: e.target.value })}
                    className="w-full h-10 px-3 py-2 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
                  >
                    <option value="1-10">1 a 10 viagens por ano</option>
                    <option value="11-30">11 a 30 viagens por ano</option>
                    <option value="31-60">31 a 60 viagens por ano</option>
                    <option value="60+">Mais de 60 viagens por ano</option>
                  </select>
                  {fieldErrors.estimated_trips && (
                    <span className="text-xs text-red-600 font-medium block">
                      {fieldErrors.estimated_trips}
                    </span>
                  )}
                </div>

                {/* Formato de atendimento / Reunião preferencial */}
                <div className="space-y-2 pt-1">
                  <Label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Como prefere iniciar a conversa?
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredMeeting('presencial')}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                        preferredMeeting === 'presencial'
                          ? 'bg-red-50 border-red-500 text-red-700 ring-2 ring-red-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>🏢 Reunião presencial</span>
                      {preferredMeeting === 'presencial' && (
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredMeeting('online')}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                        preferredMeeting === 'online'
                          ? 'bg-red-50 border-red-500 text-red-700 ring-2 ring-red-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>💻 Reunião online</span>
                      {preferredMeeting === 'online' && (
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs font-bold text-slate-800 uppercase tracking-wider"
                  >
                    Detalhes do clube, torneios previstos ou preferências (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder={
                      preferredMeeting === 'presencial'
                        ? 'Informe o local da sede/CT onde prefere realizar a reunião e melhores datas/horários...'
                        : 'Conte sobre o calendário de competições, número previsto de atletas/comissão técnica e datas estimadas...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-50 border-slate-300 text-slate-900 focus-visible:ring-red-500 resize-none"
                  />
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-base py-6 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-red-500" />
                      Enviando proposta...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-red-500" />
                      Enviar solicitação
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-center text-slate-500">
                  Ao enviar, você concorda em receber o contato da nossa equipe. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quick contact block moved below the sports proposal form */}
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center sm:text-left">
            Prefere falar agora com um consultor?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${APP_CONSTANTS.WHATSAPP_NUMBER}?text=${encodeURIComponent(
                APP_CONSTANTS.WHATSAPP_DEFAULT_MESSAGE,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 font-semibold text-sm transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-red-500" />
                <span>Fale direto no WhatsApp</span>
              </div>
              <span className="text-xs bg-red-500/20 px-2 py-0.5 rounded text-red-300">Online</span>
            </a>

            <a
              href={`mailto:${APP_CONSTANTS.CONTACT_EMAIL}`}
              className="flex items-center justify-center sm:justify-start gap-2.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{APP_CONSTANTS.CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
