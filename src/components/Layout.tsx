import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'
import { ErrorBoundary } from './ErrorBoundary'

export default function Layout() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
        <Header />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ErrorBoundary>
  )
}
