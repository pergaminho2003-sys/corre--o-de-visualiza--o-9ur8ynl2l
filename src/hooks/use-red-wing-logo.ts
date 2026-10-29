import { useEffect, useState } from 'react'

/**
 * Hook to render the red wing logo with white background removed.
 * It takes the source image (the red wing on white circle), draws it on an offscreen canvas,
 * and sets alpha = 0 for the white/light background while keeping the red wing in its exact original RGB.
 */
const cache = new Map<string, string>()

export function useRedWingTransparentLogo(src: string): { processedSrc: string; isReady: boolean } {
  const [processedSrc, setProcessedSrc] = useState<string>(() => cache.get(src) || src)
  const [isReady, setIsReady] = useState<boolean>(() => cache.has(src))

  useEffect(() => {
    if (cache.has(src)) {
      setProcessedSrc(cache.get(src)!)
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

        // Bounding box calculation to crop tightly to the red wing
        let minX = width
        let maxX = 0
        let minY = height
        let maxY = 0
        let hasWingPixels = false

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]

          if (a === 0) continue

          const min = Math.min(r, g, b)
          const max = Math.max(r, g, b)
          const diff = max - min

          // 1. Pure white or light background (circle and outer background)
          if (min >= 238) {
            data[i + 3] = 0
            continue
          }

          // 2. Antialiased edges into white background
          // Red wing pixels have high R (160-230) and low G/B (20-80), so diff is large (>70)
          if (min >= 190 && diff < 55) {
            const factor = (238 - min) / (238 - 190)
            const newAlpha = Math.max(0, Math.min(255, Math.round(factor * 255)))
            data[i + 3] = newAlpha
          } else {
            // Authentic red wing: keep original R, G, B colors exactly as they are!
            data[i + 3] = 255
          }

          if (data[i + 3] > 15) {
            const pixelIndex = i / 4
            const x = pixelIndex % width
            const y = Math.floor(pixelIndex / width)
            if (x < minX) minX = x
            if (x > maxX) maxX = x
            if (y < minY) minY = y
            if (y > maxY) maxY = y
            hasWingPixels = true
          }
        }

        ctx.putImageData(imgData, 0, 0)

        // If wing pixels were detected, crop tightly with a small margin so the wing scales cleanly
        if (hasWingPixels && maxX > minX && maxY > minY) {
          const pad = 20
          const cropX = Math.max(0, minX - pad)
          const cropY = Math.max(0, minY - pad)
          const cropW = Math.min(width - cropX, maxX - minX + 1 + pad * 2)
          const cropH = Math.min(height - cropY, maxY - minY + 1 + pad * 2)

          const cropCanvas = document.createElement('canvas')
          cropCanvas.width = cropW
          cropCanvas.height = cropH
          const cropCtx = cropCanvas.getContext('2d')
          if (cropCtx) {
            cropCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH)
            const croppedDataUrl = cropCanvas.toDataURL('image/png')
            cache.set(src, croppedDataUrl)
            setProcessedSrc(croppedDataUrl)
            setIsReady(true)
            return
          }
        }

        const dataUrl = canvas.toDataURL('image/png')
        cache.set(src, dataUrl)
        setProcessedSrc(dataUrl)
        setIsReady(true)
      } catch (e) {
        console.warn('Red wing transparent logo fallback:', e)
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
