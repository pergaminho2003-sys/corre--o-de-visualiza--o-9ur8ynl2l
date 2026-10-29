import fs from 'node:fs'
import zlib from 'node:zlib'

function readObject(sha: string) {
  const dir = sha.slice(0, 2)
  const file = sha.slice(2)
  const buf = fs.readFileSync(`.git/objects/${dir}/${file}`)
  const decompressed = zlib.inflateSync(buf)
  // header: <type> <size>\0<content>
  const nullIdx = decompressed.indexOf(0)
  const header = decompressed.subarray(0, nullIdx).toString('utf8')
  const content = decompressed.subarray(nullIdx + 1)
  const [type] = header.split(' ')
  return { type, content }
}

const c48 = readObject('78f574eb91566a22d1d3b8029d52cf0cf3ae8630')
const c49 = readObject('7da962350ba6b9e88d4c89b0f6b037950dc5c358')

console.log('c48:', c48.content.toString('utf8'))
console.log('c49:', c49.content.toString('utf8'))
