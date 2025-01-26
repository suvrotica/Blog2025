// svelte.config.js
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layout: {
        posts: 'src/lib/layouts/post.svelte'
      }
    })
  ],
  kit: {
    adapter: adapter()
  },
  extensions: ['.svelte', '.svx']
};

export default config;