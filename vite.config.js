import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from the `.env` file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server:{
    proxy:{
      "/api":{
        target:process.env.VITE_BACKEND_BASE_URL,
        changeOrigin: true,  // Adds necessary headers to the request
        rewrite: (path) => path.replace(/^\/api/, ''),  // Removes /api from the forwarded request  
      }
    }
  }
})
