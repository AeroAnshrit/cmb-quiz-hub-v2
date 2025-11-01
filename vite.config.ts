import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Make sure this line matches your repo name
  base: '/cmb-quiz-hub-v2/', 
  plugins: [react()],
})