import fs from 'node:fs'
import path from 'node:path'

export default {
  load() {
    const dataDir = path.resolve(__dirname, '../data/alumni')
    return fs.readdirSync(dataDir)
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
      .sort((a, b) => Number(b) - Number(a)) 
  }
}