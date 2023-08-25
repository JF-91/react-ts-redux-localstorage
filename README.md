## configurar path @

1. isntalar typos ts de node
npm i @types/node

2. ir al archivo vite.config.ts


import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})




3. ir al archivo tsconfig.json

{
  "compilerOptions": {
    // ...rest of the template
    "types": ["node"],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}


4. ejemplo de uso :

import Comp from '@/components/Comp'

