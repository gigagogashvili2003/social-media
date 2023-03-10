import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsConfigPaths()],
    server: {
        port: 3000,
        strictPort: true,
        open: true,
        watch: {
            usePolling: true,
        },
        base: 'http://localhost:9000/api/',
    },

    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
});
