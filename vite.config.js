import { defineConfig } from 'vite'; // Import defineConfig from Vite
import react from '@vitejs/plugin-react'; // Import the react plugin

export default defineConfig({
  plugins: [react()], // Use the react plugin
  base: "/EcommApp/dist/",
  build: {
    minify: true, // Minify output for production
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.* statements
      },
    },
  },
});
