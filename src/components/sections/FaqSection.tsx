import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQS = [
  {
    q: 'Com quanto tempo de antecedência devemos iniciar o planejamento da viagem?',
    a: 'Para torneios internacionais na Europa ou Estados Unidos, recomendamos iniciar com 3 a 6 meses de antecedência para garantir as melhores tarifas aéreas de grupo e vagas nos principais campeonatos. Para viagens nacionais ou na América do Sul, 30 a 60 dias costumam ser suficientes.',
  },
  {
    q: 'Como funciona a autorização de viagem e documentação para categorias de base?',
    a: 'Nossa equipe de assessoria cuida de toda a orientação passo a passo: modelos de autorização de viagem internacional com reconhecimento em cartório para menores desacompanhados ou acompanhados pela comissão, orientação para passaportes e emissão de vistos consulares.',
  },
  {
    q: 'É possível parcelar ou faturar os custos para o clube ou para as famílias dos atletas?',
    a: 'Sim! Oferecemos opções flexíveis de faturamento direto para o clube/instituto esportivo, além de links de pagamento individualizados para que cada família de atleta parcele sua respectiva cota no cartão de crédito em até 12x.',
  },
  {
    q: 'O que acontece em caso de cancelamento de voos, alterações de datas ou lesão de atleta?',
    a: 'Trabalhamos com contratos de tarifas corporativas e de grupos esportivos com políticas facilitadas de remarcação e substituição de nomes de passageiros. Além disso, todos os nossos pacotes incluem seguro-viagem com cobertura para cancelamento por motivo de força maior ou lesão com laudo médico.',
  },
  {
    q: 'Vocês também organizam amistosos com clubes locais no país de destino?',
    a: 'Sim. Graças à nossa rede de contatos internacionais, podemos intermediar jogos amistosos com academias e categorias de base locais, além de agendar sessões de treinamento em centros esportivos oficiais.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-500 text-xs uppercase tracking-widest font-bold">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-heading">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Principais questões sobre nossa logística esportiva internacional.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-800 rounded-xl px-5 bg-slate-900/40"
            >
              <AccordionTrigger className="text-white hover:text-red-400 font-semibold text-left py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
