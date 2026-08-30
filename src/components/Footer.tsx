import { Logo } from './Logo'
import { APP_CONSTANTS } from '@/config/constants'
import { Button } from '@/components/ui/button'
import {
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Heart,
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-300 relative overflow-hidden">
      {/* Pre-footer CTA Strip */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900/50 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-red-500 text-xs uppercase tracking-widest font-bold">
              Temporada Internacional
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
              Pronto para levar seu clube para o mundo?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Delegação segura, atletas focados e custo previsível em todas as viagens esportivas
              com o mindset de campeão.
            </p>
          </div>
          <Button
            onClick={() => scrollToSection('#orcamento')}
            className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-6 rounded-xl text-base shadow-lg shadow-red-600/25 shrink-0 transition-transform hover:scale-105"
          >
            Solicitar orçamento agora
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Main Footer 3 Columns */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-5">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Agência especializada em viagens e torneios esportivos internacionais para clubes de
              futebol, categorias de base e atletas profissionais.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
                aria-label="Instagram da Player Mindset"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${APP_CONSTANTS.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
                aria-label="WhatsApp da Player Mindset"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${APP_CONSTANTS.CONTACT_EMAIL}`}
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
                aria-label="E-mail da Player Mindset"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-heading">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('#numeros')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Números & Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#experiencias')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Experiências & Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#essencia')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Nossa Essência
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#como-funciona')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#depoimentos')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Depoimentos de Clubes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#diferenciais')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Nossos Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#faq')}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  Perguntas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-heading">
              Atendimento & Contato
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="block text-slate-300 font-medium">E-mail corporativo:</span>
                  <a
                    href={`mailto:${APP_CONSTANTS.CONTACT_EMAIL}`}
                    className="hover:text-red-400 transition-colors"
                  >
                    {APP_CONSTANTS.CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="block text-slate-300 font-medium">Plantão de Atendimento:</span>
                  <a
                    href={`https://wa.me/${APP_CONSTANTS.WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    {APP_CONSTANTS.CONTACT_PHONE} (WhatsApp 24/7)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <div>
                  <span className="block text-slate-300 font-medium">Sede Operacional:</span>
                  <span>São Paulo, SP — Brasil (Operação global)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-red-400/90 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Agência cadastrada & conformidade com órgãos oficiais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Player Mindset Viagens. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Feito para a alta performance no esporte</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  )
}
