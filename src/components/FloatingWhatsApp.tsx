import { APP_CONSTANTS } from '@/config/constants'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${APP_CONSTANTS.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    APP_CONSTANTS.WHATSAPP_DEFAULT_MESSAGE,
  )}`

  return (
    <aside
      aria-label="Atendimento rápido no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      {/* Desktop Hover Tooltip */}
      <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 bg-slate-900 border border-slate-700/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-xl pointer-events-none items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Fale conosco no WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Player Mindset Viagens"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />
      </a>
    </aside>
  )
}
