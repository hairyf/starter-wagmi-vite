import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { $ } from 'zx'

process.env.FORCE_COLOR = '1'

const baseAbisPath = path.resolve(process.cwd(), './src/config/contracts/abis/jsonc')
const baseTypePath = path.resolve(process.cwd(), './src/config/contracts/abis/types')
const indexPath = path.resolve(process.cwd(), './src/config/contracts/abis/index.ts')

async function main() {
  const files = await fs.readdir(baseAbisPath)
  for (const file of files) {
    const jsonPath = path.join(baseAbisPath, file)
    await $`abi-types-generator ${jsonPath} --output=${baseTypePath} --provider ethers_v5`
  }
  const contracts = files.map(file => file.split('.')[0])

  const indexFile = `\
${contracts.map(name => `import type {${name}} from './types/${name}'`)}
${contracts.map(name => `import _${name}Fragment from './jsonc/${name}.json'`)}

${contracts.map(name => `export * as ${name}Types from './types/${name}'`)}

${contracts.map(name => `export const ${name}Fragment: ${name} = _${name}Fragment as any`)}
`
  await fs.writeFile(indexPath, indexFile)
}

main()
