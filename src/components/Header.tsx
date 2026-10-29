import { useState, useEffect } from 'react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface HeaderProps {
  activeSection?: string
}

const NAV_ITEMS = [
  { label: 'Números', href: '#numeros' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Nossa Essência', href: '#essencia' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Parceria', href: '#proposta-parceria' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'FAQ', href: '#faq' },
]

export function Header({ activeSection = '' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => handleNavClick('#orcamento')}
              className="bg-red-600 hover:bg-red-500 text-white font-bold shadow-lg shadow-red-600/25 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Solicitar orçamento
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <Logo onClick={() => setMobileOpen(false)} />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-lg font-medium text-slate-200 hover:text-red-400 py-1 transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <Button
                onClick={() => handleNavClick('#orcamento')}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-6 rounded-xl shadow-lg shadow-red-600/20"
              >
                Falar com o time&nbsp;
              </Button>
              <p className="text-center text-xs text-slate-500">
                Atendimento rápido para clubes e categorias de base
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
