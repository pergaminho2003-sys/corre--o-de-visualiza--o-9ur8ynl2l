import { useEffect, useRef, useState } from 'react'

interface RedWingLogoProps {
  src?: string
  alt?: string
  className?: string
  loading?: 'eager' | 'lazy'
}

const dataUrlCache = new Map<string, string>()

/**
 * Component that renders the red wing brand mark with its white background removed.
 * It loads the source image onto an offscreen canvas, extracts the red wing pixels
 * with their exact original RGB colors, makes the white circle background transparent,
 * and crops tightly around the wing so it fills the container gracefully without wasted space.
 */
export function RedWingLogo({
  src = '/visual-edits/sem-nome-851-x-310-px-logotipo-8-19a473f0.png',
  alt = 'Player Mindset Viagens',
  className = 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain',
  loading = 'eager',
}: RedWingLogoProps) {
  const [imageSrc, setImageSrc] = useState<string>(() => dataUrlCache.get(src) || src)
  const [isTransparent, setIsTransparent] = useState<boolean>(() => dataUrlCache.has(src))
  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true

    if (dataUrlCache.has(src)) {
      setImageSrc(dataUrlCache.get(src)!)
      setIsTransparent(true)
      return
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src

    img.onload = () => {
      if (!isMounted.current) return

      try {
        const canvas = document.createElement('canvas')
        const width = img.naturalWidth || img.width
        const height = img.naturalHeight || img.height
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        if (!ctx) return

        ctx.drawImage(img, 0, 0)
        const imgData = ctx.getImageData(0, 0, width, height)
        const data = imgData.data

        let minX = width
        let maxX = 0
        let minY = height
        let maxY = 0
        let foundWing = false

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const a = data[i + 3]

          if (a === 0) continue

          const min = Math.min(r, g, b)
          const max = Math.max(r, g, b)
          const diff = max - min

          // 1. Pure white or light background
          if (min >= 238) {
            data[i + 3] = 0
            continue
          }

          // 2. Antialiased edges into white background
          // Red wing pixels have high R and low G/B, so diff is large
          if (min >= 190 && diff < 55) {
            const factor = (238 - min) / (238 - 190)
            const newAlpha = Math.max(0, Math.min(255, Math.round(factor * 255)))
            data[i + 3] = newAlpha
          } else {
            // Keep original vibrant red colors untouched
            data[i + 3] = 255
          }

          if (data[i + 3] > 15) {
            const pixel = i / 4
            const x = pixel % width
            const y = Math.floor(pixel / width)
            if (x < minX) minX = x
            if (x > maxX) maxX = x
            if (y < minY) minY = y
            if (y > maxY) maxY = y
            foundWing = true
          }
        }

        ctx.putImageData(imgData, 0, 0)

        // Crop tightly around the wing with slight padding
        let finalDataUrl = ''
        if (foundWing && maxX > minX && maxY > minY) {
          const pad = 16
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
            finalDataUrl = cropCanvas.toDataURL('image/png')
          }
        }

        if (!finalDataUrl) {
          finalDataUrl = canvas.toDataURL('image/png')
        }

        dataUrlCache.set(src, finalDataUrl)
        if (isMounted.current) {
          setImageSrc(finalDataUrl)
          setIsTransparent(true)
        }
      } catch (err) {
        console.warn('Could not process transparent wing logo:', err)
      }
    }

    return () => {
      isMounted.current = false
    }
  }, [src])

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      style={{
        opacity: isTransparent ? 1 : 0.9,
        transition: 'opacity 0.2s ease',
      }}
    />
  )
}
