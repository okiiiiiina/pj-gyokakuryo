import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true,
        defineModel: true
      }
    })
  ],
  server: {
    port: 3000, // 任意のポート番号に変更
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/src/styles/index.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      '@': `${__dirname}`,
      '@/src/styles': `${__dirname}/src/styles`,
    },
  },
})
