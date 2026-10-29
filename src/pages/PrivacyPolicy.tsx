import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { APP_CONSTANTS } from '@/config/constants'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto text-slate-300">
      <div className="mb-8">
        <Button
          asChild
          variant="ghost"
          className="text-slate-400 hover:text-white hover:bg-slate-900 gap-2 p-0 h-auto font-medium"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4 text-red-500" />
            Voltar para a página inicial
          </Link>
        </Button>
      </div>

      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-400 uppercase tracking-widest backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
          Segurança e Transparência
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
          Política de Privacidade
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Última atualização:{' '}
          {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-xl">
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-lg font-heading">
            <Lock className="w-5 h-5 text-red-500" />
            <h2>1. Compromisso com a Proteção de Dados (LGPD)</h2>
          </div>
          <p>
            A <strong className="text-white">{APP_CONSTANTS.BRAND_NAME}</strong> preza pela total
            privacidade, sigilo e segurança dos dados fornecidos por dirigentes, clubes, atletas,
            responsáveis e visitantes do nosso site, em conformidade com a Lei Geral de Proteção de
            Dados Pessoais (Lei nº 13.709/2018 - LGPD).
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-lg font-heading">
            <FileText className="w-5 h-5 text-red-500" />
            <h2>2. Dados Coletados e Finalidade</h2>
          </div>
          <p>
            Coletamos exclusivamente as informações estritamente necessárias para a prestação dos
            nossos serviços de consultoria e logística esportiva:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-300 ml-2">
            <li>
              <strong className="text-white">Dados de Contato:</strong> Nome do responsável, nome do
              clube/associação, e-mail corporativo e número de telefone/WhatsApp;
            </li>
            <li>
              <strong className="text-white">Informações da Demanda:</strong> Estimativa anual de
              viagens, necessidades de itinerários e mensagens descritivas para a elaboração de
              cotações personalizadas;
            </li>
            <li>
              <strong className="text-white">Dados de Navegação:</strong> Informações anônimas de
              métricas e desempenho para aprimoramento da usabilidade.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-lg font-heading">
            <Eye className="w-5 h-5 text-red-500" />
            <h2>3. Uso e Compartilhamento de Informações</h2>
          </div>
          <p>Os dados coletados são utilizados unicamente para:</p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-300 ml-2">
            <li>Elaboração de propostas comerciais e estudos orçamentários sob medida;</li>
            <li>
              Emissão de bilhetes aéreos, reservas hoteleiras e seguros-viagem junto a parceiros
              homologados e companhias aéreas;
            </li>
            <li>Comunicação operacional e suporte tático durante o período das viagens.</li>
          </ul>
          <p className="pt-1">
            <strong className="text-white">
              Não comercializamos nem compartilhamos seus dados com terceiros
            </strong>{' '}
            para finalidades publicitárias externas.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-lg font-heading">
            <CheckCircle2 className="w-5 h-5 text-red-500" />
            <h2>4. Direitos do Titular dos Dados</h2>
          </div>
          <p>
            Você tem total direito a solicitar, a qualquer momento, o acesso, retificação,
            atualização ou exclusão definitiva dos seus dados armazenados em nossos sistemas.
          </p>
          <p>
            Para exercer esses direitos ou esclarecer dúvidas sobre o tratamento de informações,
            entre em contato pelo nosso e-mail oficial:{' '}
            <a
              href={`mailto:${APP_CONSTANTS.CONTACT_EMAIL}`}
              className="text-red-400 hover:text-red-300 underline underline-offset-4 font-semibold"
            >
              {APP_CONSTANTS.CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
