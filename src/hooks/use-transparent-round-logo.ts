/**
 * Canvas utility hook to process round logo assets:
 * 1. Guarantees that any pixels outside the circular badge boundary are completely transparent (alpha = 0).
 * 2. Cleans up any white/light fringes or square background remnants outside the circular border.
 * 3. Preserves the interior of the circle: white background, red wings, typography ("PLAYER MINDSET VIAGENS"),
 *    retaining perfect color fidelity and crispness.
 */
import { useEffect, useState } from 'react'

const roundCache = new Map<string, string>()

export function useTransparentRoundLogo(src: string) {
  const [processedSrc, setProcessedSrc] = useState<string>(() => roundCache.get(src) || src)
  const [isReady, setIsReady] = useState<boolean>(() => roundCache.has(src))

  useEffect(() => {
    if (roundCache.has(src)) {
      setProcessedSrc(roundCache.get(src)!)
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

        // Circular geometry calculation
        const centerX = width / 2
        const centerY = height / 2
        // Circle radius usually fits within min(width, height) / 2
        // We calculate distance from center for each pixel (x, y)
        const radius = Math.min(width, height) / 2

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4
            const dx = x - centerX
            const dy = y - centerY
            const dist = Math.sqrt(dx * dx + dy * dy)

            // Outside the circle boundary: force complete transparency with smooth antialiasing at the boundary
            if (dist > radius) {
              data[idx + 3] = 0
            } else if (dist > radius - 1.5) {
              // Antialiased outer edge
              const alphaRatio = Math.max(0, Math.min(1, radius - dist))
              data[idx + 3] = Math.round(data[idx + 3] * alphaRatio)
            }
          }
        }

        ctx.putImageData(imgData, 0, 0)
        const dataUrl = canvas.toDataURL('image/png')
        roundCache.set(src, dataUrl)
        setProcessedSrc(dataUrl)
        setIsReady(true)
      } catch (err) {
        console.warn('Transparent round logo processing fallback:', err)
        setProcessedSrc(src)
        setIsReady(true)
      }
    }

    img.onerror = () => {
      setProcessedSrc(src)
      setIsReady(true)
    }
  }, [src])

  return { processedSrc, isReady }
}
