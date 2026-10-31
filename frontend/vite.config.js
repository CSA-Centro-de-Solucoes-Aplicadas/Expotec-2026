import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Em dev o Vite manda /admin para o app Vue; aqui ele vai para o painel do Decap (public/admin/index.html)
const painelAdmin = () => ({
  name: 'painel-admin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && /^\/admin\/?(\?.*)?$/.test(req.url)) {
        res.statusCode = 302
        res.setHeader('Location', '/admin/index.html')
        res.end()
        return
      }
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    painelAdmin(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
