import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.GITHUB_PAGES ? 'REPOSITORY_NAME' : './',
    build: {
        outDir: './dist/',
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
    },
});
