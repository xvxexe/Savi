import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If the repository name changes, update the base path below.
export default defineConfig({
  plugins: [react()],
  base: '/Savi/',
});
