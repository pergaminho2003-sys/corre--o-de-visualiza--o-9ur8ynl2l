import fs from 'node:fs'
import path from 'node:path'

const srcLogo = path.resolve('src/assets/download-4b9e3.png')
const publicDir = path.resolve('public')

if (!fs.existsSync(srcLogo)) {
  console.error('Logo source not found')
  process.exit(1)
}

const pngBuffer = fs.readFileSync(srcLogo)

// Estrutura de um ICO que encapsula um PNG válido:
// ICONDIR (6 bytes):
// 0-1: Reservado (0)
// 2-3: Tipo (1 para ICO)
// 4-5: Número de imagens (1)
// ICONDIRENTRY (16 bytes):
// 0: Largura (0 significa 256px ou largura no header PNG)
// 1: Altura (0 significa 256px ou altura no header PNG)
// 2: Cores (0 se >= 8bpp)
// 3: Reservado (0)
// 4-5: Planos de cor (1)
// 6-7: Bits por pixel (32)
// 8-11: Tamanho dos dados da imagem (uint32 LE)
// 12-15: Offset dos dados da imagem (uint32 LE, 6 + 16 = 22)

const icoHeader = Buffer.alloc(22)
// ICONDIR
icoHeader.writeUInt16LE(0, 0)
icoHeader.writeUInt16LE(1, 2)
icoHeader.writeUInt16LE(1, 4)

// ICONDIRENTRY
icoHeader.writeUInt8(0, 6) // 256px or auto
icoHeader.writeUInt8(0, 7) // 256px or auto
icoHeader.writeUInt8(0, 8) // Color count
icoHeader.writeUInt8(0, 9) // Reserved
icoHeader.writeUInt16LE(1, 10) // Color planes
icoHeader.writeUInt16LE(32, 12) // Bits per pixel
icoHeader.writeUInt32LE(pngBuffer.length, 14) // Image size in bytes
icoHeader.writeUInt32LE(22, 18) // Offset of image data

const icoBuffer = Buffer.concat([icoHeader, pngBuffer])

fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer)
fs.writeFileSync(path.join(publicDir, 'favicon.png'), pngBuffer)
fs.writeFileSync(path.join(publicDir, 'icon.png'), pngBuffer)
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffer)
fs.writeFileSync(path.join(publicDir, 'skip.png'), pngBuffer)

console.log('Todos os ícones (PNG e ICO) foram sincronizados com a logo do projeto!')
