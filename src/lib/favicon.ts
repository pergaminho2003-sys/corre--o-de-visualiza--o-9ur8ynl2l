// Utilitário para garantir que o favicon esteja ativo e atualizado no navegador em runtime
export function ensureFavicon(): void {
  if (typeof document === 'undefined') return

  const iconHref = `/favicon.png?v=${Date.now()}`
  const icoHref = `/favicon.ico?v=${Date.now()}`

  // Procura ou cria as tags link de ícone
  let linkPng = document.querySelector<HTMLLinkElement>("link[rel='icon'][type='image/png']")
  if (!linkPng) {
    linkPng = document.createElement('link')
    linkPng.rel = 'icon'
    linkPng.type = 'image/png'
    document.head.appendChild(linkPng)
  }
  linkPng.href = iconHref

  let linkShortcut = document.querySelector<HTMLLinkElement>("link[rel='shortcut icon']")
  if (!linkShortcut) {
    linkShortcut = document.createElement('link')
    linkShortcut.rel = 'shortcut icon'
    document.head.appendChild(linkShortcut)
  }
  linkShortcut.href = icoHref

  let linkApple = document.querySelector<HTMLLinkElement>("link[rel='apple-touch-icon']")
  if (!linkApple) {
    linkApple = document.createElement('link')
    linkApple.rel = 'apple-touch-icon'
    document.head.appendChild(linkApple)
  }
  linkApple.href = iconHref
}
