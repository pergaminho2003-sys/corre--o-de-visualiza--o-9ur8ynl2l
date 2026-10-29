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
const icoHeader = Buffer.alloc(22)
icoHeader.writeUInt16LE(0, 0)
icoHeader.writeUInt16LE(1, 2)
icoHeader.writeUInt16LE(1, 4)

icoHeader.writeUInt8(0, 6)
icoHeader.writeUInt8(0, 7)
icoHeader.writeUInt8(0, 8)
icoHeader.writeUInt8(0, 9)
icoHeader.writeUInt16LE(1, 10)
icoHeader.writeUInt16LE(32, 12)
icoHeader.writeUInt32LE(pngBuffer.length, 14)
icoHeader.writeUInt32LE(22, 18)

const icoBuffer = Buffer.concat([icoHeader, pngBuffer])

fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer)
fs.writeFileSync(path.join(publicDir, 'favicon.png'), pngBuffer)
fs.writeFileSync(path.join(publicDir, 'icon.png'), pngBuffer)
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffer)
fs.writeFileSync(path.join(publicDir, 'skip.png'), pngBuffer)

console.log('Todos os ícones (PNG e ICO) foram sincronizados com a logo do projeto!')
