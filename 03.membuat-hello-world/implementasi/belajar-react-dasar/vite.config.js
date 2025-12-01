import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // inisiasi agar ketika nanti di compile, bukan hanya file index.html saja
  // secara harfiah yang kita lakukan disini seperti mendaftarkan / registrasi file mana saja yang akan di compile nantinya
  // karena kita saat ini sedang menggunakan vite, maka perlu kita daftarkan terlebih dahulu di file config ini
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello_world.html"
      }
    }
  }
})
