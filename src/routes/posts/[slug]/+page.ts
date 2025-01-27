// src/routes/posts/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    // Get all markdown files
    const posts = import.meta.glob('$lib/posts/*.md');
    console.log('Available posts:', posts);

    // Get the specific post
    const postPath = `$lib/posts/${params.slug}.md`;
    console.log('Looking for post at:', postPath);

    if (postPath in posts) {
      const post = await posts[postPath]();
      console.log('Post loaded:', post);
      
      const typedPost = post as { default: string; metadata: Record<string, any> };
      
      return {
        content: typedPost.default,
        meta: typedPost.metadata
      };
    }

    throw error(404, `Post "${params.slug}" not found`);
  } catch (e) {
    console.error('Error loading post:', e);
    throw error(404, `Could not find post ${params.slug}`);
  }
}