/**
 * Client-side utility hook to remove white/light background from the brand logo.
 * It renders the image to an offscreen canvas and applies an intelligent alpha key:
 * - White/light background (RGB > threshold) becomes completely transparent (alpha = 0).
 * - Edge antialiasing softens the border without halos.
 * - Dark gray typography ('PLAYER', 'VIAGENS') is brightened slightly or inverted to clean white/light gray
 *   when requested, or preserved with perfect sharpness for dark sports pitch backgrounds.
 */
import { useEffect, useState } from 'react'

const cache = new Map<string, string>()

interface ProcessLogoOptions {
  lightModeOnly?: boolean
  brightenText?: boolean // Turn dark typography to crisp white for dark backgrounds
}

export function useTransparentLogo(
  src: string,
  options: ProcessLogoOptions = { brightenText: true },
) {
  const [processedSrc, setProcessedSrc] = useState<string>(
    () => cache.get(src + JSON.stringify(options)) || src,
  )
  const [isReady, setIsReady] = useState<boolean>(() => cache.has(src + JSON.stringify(options)))

  useEffect(() => {
    const cacheKey = src + JSON.stringify(options)
    if (cache.has(cacheKey)) {
      setProcessedSrc(cache.get(cacheKey)!)
      setIsReady(true)
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const width = img.naturalWidth || img.width
        const height = img.naturalHeight || img.height
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        if (!ctx) {
          setProcessedSrc(src)
          setIsReady(true)
          return
        }

        ctx.drawImage(img, 0, 0)
        const imgData = ctx.getImageData(0, 0, width, height)
        const data = imgData.data

        // Background is pure white/light (~240-255).
        // The logo has:
        // 1. Red wing/text: R is high (around 180-220), G & B are low (around 30-60).
        // 2. Dark typography ("PLAYER", "VIAGENS"): R, G, B are roughly equal and low (around 40-75).
        // 3. Background: R, G, B are high (> 230).

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]

          if (a === 0) continue

          const min = Math.min(r, g, b)
          const max = Math.max(r, g, b)
          const diff = max - min

          // 1. Solid background (pure white / near white)
          if (min >= 235) {
            data[i + 3] = 0
            continue
          }

          // 2. Antialiased edges into white background
          if (min >= 195 && diff < 35) {
            // Smooth falloff from 195 to 235
            const factor = (235 - min) / (235 - 195)
            const newAlpha = Math.max(0, Math.min(255, Math.round(factor * 255)))
            data[i + 3] = newAlpha

            // If we brighten text, make the antialiased text cleanly transition to white text
            if (options.brightenText && newAlpha > 0) {
              // It's neutral (not red)
              data[i] = 255
              data[i + 1] = 255
              data[i + 2] = 255
            }
            continue
          }

          // 3. Check if pixel is brand red vs dark gray text
          const isRed = r > 130 && r > g * 1.6 && r > b * 1.6

          if (isRed) {
            // Keep the vibrant red (#C42727 and shades)
            // Just preserve red as is with full opacity
            data[i + 3] = 255
          } else if (options.brightenText) {
            // It's the dark typography ('PLAYER', 'VIAGENS', hyphens)
            // On a pitch black/dark hero background, white text provides 100% legibility and premium look
            // Turn dark gray to pure white/light silver:
            data[i] = 255
            data[i + 1] = 255
            data[i + 2] = 255
            data[i + 3] = 255
          }
        }

        ctx.putImageData(imgData, 0, 0)
        const dataUrl = canvas.toDataURL('image/png')
        cache.set(cacheKey, dataUrl)
        setProcessedSrc(dataUrl)
        setIsReady(true)
      } catch (e) {
        console.warn('Transparent logo processing fallback:', e)
        setProcessedSrc(src)
        setIsReady(true)
      }
    }

    img.onerror = () => {
      setProcessedSrc(src)
      setIsReady(true)
    }
  }, [src, options])

  return { processedSrc, isReady }
}
