import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve' // true para `npm run dev`, false para `npm run build`

  return {
    plugins: [vue(), tailwindcss()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    base: isDev ? '/' : '/work/models/PTP/NPTP/PTP_Doc_Ciudadanos/SRFT/',

    build: {
      emptyOutDir: true,
    },
  }
})
