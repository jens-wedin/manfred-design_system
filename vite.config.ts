import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.stories.tsx'],
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('src/index.ts', import.meta.url)),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        // Keep CSS assets in a predictable location
        assetFileNames: 'style[extname]',
      },
    },
    // Single CSS file for the entire library
    cssCodeSplit: false,
    sourcemap: true,
    // Clean dist before each build
    emptyOutDir: true,
  },
});
