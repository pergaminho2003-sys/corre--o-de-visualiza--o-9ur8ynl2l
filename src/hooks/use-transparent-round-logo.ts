/**
 * Canvas utility hook to process logo assets for the header:
 * 1. Removes the white/light background completely (both outside and inside the circular badge).
 * 2. Uses chroma-key with smooth antialiasing falloff for white/near-white pixels so no white halo remains.
 * 3. Preserves original glyph colors ("PLAYER", "VIAGENS") and the brand red elements (wing, "MINDSET") intact
 *    without recoloring them, allowing the transparent background to expose the site's dark theme behind them.
 * 4. Outside circular boundary is also cleanly zeroed out.
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

        const centerX = width / 2
        const centerY = height / 2
        const radius = Math.min(width, height) / 2

        // Thresholds for removing white/near-white background
        // Solid white: min(R,G,B) >= 235
        // Transition / antialiasing zone: min(R,G,B) >= 190 && low saturation (diff < 40)
        const WHITE_SOLID_THRESHOLD = 232
        const WHITE_FALLOFF_START = 190

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4
            let a = data[idx + 3]
            if (a === 0) continue

            const dx = x - centerX
            const dy = y - centerY
            const dist = Math.sqrt(dx * dx + dy * dy)

            // Outside circle: clear completely
            if (dist > radius) {
              data[idx + 3] = 0
              continue
            }

            const r = data[idx]
            const g = data[idx + 1]
            const b = data[idx + 2]

            const min = Math.min(r, g, b)
            const max = Math.max(r, g, b)
            const diff = max - min

            // Check if pixel belongs to red wing or red MINDSET:
            // Red has high R and significantly lower G & B
            const isRed = r > 120 && r > g * 1.5 && r > b * 1.5

            if (isRed) {
              // Preserve red elements intact and fully opaque
              data[idx + 3] = 255
            } else if (min >= WHITE_SOLID_THRESHOLD && diff < 30) {
              // Pure/near-pure white interior or exterior background -> completely transparent
              data[idx + 3] = 0
            } else if (min >= WHITE_FALLOFF_START && diff < 35) {
              // Antialiasing transition zone between white background and dark/light elements.
              // Calculates smooth falloff to eliminate white fringes/halos without clipping letter borders.
              const factor =
                (WHITE_SOLID_THRESHOLD - min) / (WHITE_SOLID_THRESHOLD - WHITE_FALLOFF_START)
              const newAlpha = Math.max(0, Math.min(255, Math.round(factor * a)))
              data[idx + 3] = newAlpha
            }

            // Antialiased outer circle edge
            if (dist > radius - 1.5 && data[idx + 3] > 0) {
              const edgeAlphaRatio = Math.max(0, Math.min(1, radius - dist))
              data[idx + 3] = Math.round(data[idx + 3] * edgeAlphaRatio)
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
