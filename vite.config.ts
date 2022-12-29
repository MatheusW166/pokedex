import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), sassGlobImports()],
	css: {
		postcss: {
			plugins: [
				autoprefixer({})
			]
		}
	}
});
