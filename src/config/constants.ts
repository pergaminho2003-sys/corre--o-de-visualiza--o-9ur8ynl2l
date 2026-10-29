export const APP_CONSTANTS = {
  BRAND_NAME: 'Player Mindset Viagens',
  CONTACT_EMAIL: 'contato@playermindset.com.br',
  CONTACT_PHONE: '+55 16 99708-6308',
  WHATSAPP_NUMBER: '5516997086308',
  WHATSAPP_DEFAULT_MESSAGE: 'Olá! Quero um orçamento para o meu clube.',
  DEFAULT_HERO_IMAGE:
    'https://img.usecurling.com/p/1920/1080?q=football%20stadium%20night%20floodlights&dpr=2',
}

export function buildWhatsAppProposalUrl(data: {
  club_name: string
  contact_name: string
  email: string
  phone: string
  estimated_trips: string
  preferred_meeting?: 'presencial' | 'online' | 'indiferente'
  message?: string
}): string {
  const meetingLabel =
    data.preferred_meeting === 'presencial'
      ? 'Reunião presencial no clube'
      : data.preferred_meeting === 'online'
        ? 'Reunião online / apresentação virtual'
        : 'Indiferente / A definir'

  const tripsMap: Record<string, string> = {
    '1-10': '1 a 10 viagens por ano',
    '11-30': '11 a 30 viagens por ano',
    '31-60': '31 a 60 viagens por ano',
    '60+': 'Mais de 60 viagens por ano',
  }

  const tripsLabel = tripsMap[data.estimated_trips] || data.estimated_trips

  const lines = [
    `Olá! Sou ${data.contact_name}, do clube/associação ${data.club_name}.`,
    `Gostaria de solicitar uma proposta para a Player Mindset Viagens:`,
    ``,
    `📋 *Resumo da solicitação:*`,
    `• *Clube:* ${data.club_name}`,
    `• *Responsável:* ${data.contact_name}`,
    `• *E-mail:* ${data.email}`,
    `• *Telefone/WhatsApp:* ${data.phone}`,
    `• *Viagens estimadas:* ${tripsLabel}`,
    `• *Formato de atendimento preferido:* ${meetingLabel}`,
  ]

  if (data.message && data.message.trim()) {
    lines.push(`• *Detalhes/Observações:* ${data.message.trim()}`)
  }

  lines.push(``)
  lines.push(`Acabei de preencher o formulário no site e aguardo retorno`)

  const text = lines.join('\n')
  return `https://wa.me/${APP_CONSTANTS.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
