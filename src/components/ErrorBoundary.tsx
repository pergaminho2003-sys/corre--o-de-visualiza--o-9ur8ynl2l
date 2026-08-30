import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo)
  }

  private handleReload = () => {
    window.location.reload()
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl space-y-6">
            <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto ring-1 ring-red-500/30">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight font-heading text-white">
                Ocorreu uma instabilidade
              </h2>
              <p className="text-slate-400 text-sm">
                Não foi possível carregar esta parte da página. Tente recarregar para restaurar a
                visualização.
              </p>
            </div>

            <Button
              onClick={this.handleReload}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold gap-2 py-6 text-base"
            >
              <RefreshCw className="w-4 h-4" /> Recarregar página
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
