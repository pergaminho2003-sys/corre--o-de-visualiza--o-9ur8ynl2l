import { TestimonialRecord } from '@/types/landing'
import { Quote, Star, Award, UserCheck } from 'lucide-react'

// Fallback testimonials if none from PocketBase
const FALLBACK_TESTIMONIALS: TestimonialRecord[] = [
  {
    id: '1',
    name: 'Carlos Menezes',
    role: 'Presidente',
    club: 'Associação Atlética Horizonte',
    quote:
      'A viagem para a Copa Europeia foi impecável. A logística deixou nossos atletas 100% focados em campo e as famílias receberam atualizações diárias.',
    highlight_metric: '16 atletas embarcados',
    featured: true,
    order: 1,
    created: '',
    updated: '',
  },
  {
    id: '2',
    name: 'Fernanda Lopes',
    role: 'Coordenadora de Base',
    club: 'Clube Esportivo Sul-Brasil',
    quote:
      'Tudo organizado: treinos com campos profissionais, hospedagem e jogos de alto nível. Voltamos com o título e com pais felizes com o cuidado.',
    highlight_metric: '98% de aprovação',
    featured: false,
    order: 2,
    created: '',
    updated: '',
  },
  {
    id: '3',
    name: 'Rafael Torres',
    role: 'Diretor Técnico',
    club: 'Nacional Futebol Clube',
    quote:
      'Do aeroporto ao estádio, cada detalhe foi pensado. É outro nível de profissionalismo e economia em passagens de grupo.',
    highlight_metric: '3 países em 10 dias',
    featured: false,
    order: 3,
    created: '',
    updated: '',
  },
  {
    id: '4',
    name: 'Patrícia Gomes',
    role: 'Gestora de Projetos',
    club: 'Instituto Esporte Jovem',
    quote:
      'Excelente custo-benefício e suporte 24h em qualquer fuso horário. A confiança que a Player Mindset passa é incomparável.',
    highlight_metric: '5 anos de parceria',
    featured: false,
    order: 4,
    created: '',
    updated: '',
  },
]

function getInitials(name: string) {
  if (!name) return 'PM'
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function TestimonialsSection({ testimonials = [] }: { testimonials?: TestimonialRecord[] }) {
  const data = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS

  // Identify featured testimonial
  const featuredItem = data.find((item) => item.featured) || data[0]
  const otherItems = data.filter((item) => item.id !== featuredItem?.id)

  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
          Casos de Sucesso
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Clubes que já jogaram fora de casa com a gente
        </h2>
        <div className="sprint-line mx-auto" />
        <p className="text-slate-400 text-sm sm:text-base pt-2">
          Depoimentos de dirigentes, coordenadores e gestores que confiam suas delegações à Player
          Mindset.
        </p>
      </div>

      {/* Testimonials Layout: Big featured on left, stack on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Featured Testimonial Card */}
        {featuredItem && (
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden ring-1 ring-emerald-500/20">
            {/* Background quote watermark */}
            <Quote className="absolute -bottom-6 -right-6 w-44 h-44 text-emerald-500/5 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>

                {featuredItem.highlight_metric && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-yellow-400" />
                    {featuredItem.highlight_metric}
                  </span>
                )}
              </div>

              <Quote className="w-10 h-10 text-emerald-400 mb-4 opacity-70" />

              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic mb-8">
                "{featuredItem.quote}"
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
              <div className="w-13 h-13 rounded-full bg-slate-950 border-2 border-emerald-400 text-emerald-400 font-bold flex items-center justify-center text-base shrink-0 shadow-md shadow-emerald-500/20">
                {getInitials(featuredItem.name)}
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">{featuredItem.name}</h4>
                <p className="text-xs text-slate-400">
                  {featuredItem.role} •{' '}
                  <span className="text-emerald-400">{featuredItem.club}</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Other testimonials */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {otherItems.slice(0, 3).map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:bg-slate-900/90"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                  </div>
                  {item.highlight_metric && (
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {item.highlight_metric}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-4">"{item.quote}"</p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/60">
                <div className="w-9 h-9 rounded-full bg-slate-950 border border-slate-700 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                  {getInitials(item.name)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {item.role} — <span className="text-slate-300">{item.club}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
