import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ဒီလိုင်းလေး ထည့်ပေးပါ
  plugins: [react()],
})
