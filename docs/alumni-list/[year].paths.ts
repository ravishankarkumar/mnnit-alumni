import fs from 'node:fs'
import path from 'node:path'

export default {
  paths() {
    const dataDir = path.resolve(__dirname, '../data/alumni')
    
    return fs.readdirSync(dataDir)
      .filter(file => file.endsWith('.json'))
      .map((file) => {
        const year = file.replace('.json', '')
        const jsonData = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'))
        
        return {
          params: { 
            year, 
            alumni: jsonData // Pass the data here!
          }
        }
      })
  }
}