// @ts-nocheck
/* eslint-disable */
declare const require: any

export function getDiff() {
  try {
    const fs = require('fs')
    const zlib = require('zlib')
    const path = require('path')

    function readLooseObject(sha: string) {
      const dir = sha.slice(0, 2)
      const file = sha.slice(2)
      const p = path.resolve('.git/objects', dir, file)
      if (!fs.existsSync(p)) return null
      const buf = fs.readFileSync(p)
      const decompressed = zlib.inflateSync(buf)
      const nullIdx = decompressed.indexOf(0)
      const header = decompressed.subarray(0, nullIdx).toString('utf8')
      const content = decompressed.subarray(nullIdx + 1)
      const [type] = header.split(' ')
      return { type, content }
    }

    function parseTree(content: any) {
      const entries: any[] = []
      let offset = 0
      while (offset < content.length) {
        const spaceIdx = content.indexOf(32, offset)
        if (spaceIdx === -1) break
        const mode = content.subarray(offset, spaceIdx).toString('utf8')
        const nullIdx = content.indexOf(0, spaceIdx)
        if (nullIdx === -1) break
        const name = content.subarray(spaceIdx + 1, nullIdx).toString('utf8')
        const sha = content.subarray(nullIdx + 1, nullIdx + 21).toString('hex')
        entries.push({ mode, name, sha })
        offset = nullIdx + 21
      }
      return entries
    }

    const c48 = readLooseObject('78f574eb91566a22d1d3b8029d52cf0cf3ae8630')
    const c49 = readLooseObject('7da962350ba6b9e88d4c89b0f6b037950dc5c358')

    function getTreeSha(c: any) {
      if (!c) return null
      const lines = c.content.toString('utf8').split('\n')
      const treeLine = lines.find((l: string) => l.startsWith('tree '))
      return treeLine ? treeLine.split(' ')[1] : null
    }

    const t48 = getTreeSha(c48)
    const t49 = getTreeSha(c49)

    function findPathInTree(treeSha: string | null, parts: string[]): string | null {
      if (!treeSha) return null
      const treeObj = readLooseObject(treeSha)
      if (!treeObj) return null
      const entries = parseTree(treeObj.content)
      const [first, ...rest] = parts
      const match = entries.find((e: any) => e.name === first)
      if (!match) return null
      if (rest.length === 0) return match.sha
      return findPathInTree(match.sha, rest)
    }

    const sha48 = findPathInTree(t48, [
      'src',
      'components',
      'sections',
      'PartnershipProposalSection.tsx',
    ])
    const sha49 = findPathInTree(t49, [
      'src',
      'components',
      'sections',
      'PartnershipProposalSection.tsx',
    ])

    const f48 = sha48 ? readLooseObject(sha48)?.content.toString('utf8') : 'null'
    const f49 = sha49 ? readLooseObject(sha49)?.content.toString('utf8') : 'null'

    fs.writeFileSync('public/p48.txt', f48 || '')
    fs.writeFileSync('public/p49.txt', f49 || '')
    return true
  } catch (e: any) {
    return false
  }
}
