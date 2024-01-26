import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.jpg'],
	plugins: [
		enhancedImages(),
		sveltekit()
	]
});
