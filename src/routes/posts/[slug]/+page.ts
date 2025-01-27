// src/routes/posts/[slug]/+page.ts
import { error } from '@sveltejs/kit';

interface PostMetadata {
  title: string;
  coverImage: string;
  date: string;
  description: string;
}

interface PostModule {
  metadata: PostMetadata;
  default: any;
}

export async function load({ params }) {
  try {
    const posts = import.meta.glob<PostModule>('/src/lib/posts/*.md', { eager: true });
    const postPath = `/src/lib/posts/${params.slug}.md`;

    if (postPath in posts) {
      const post = posts[postPath];
      const frontmatter = post.metadata || {};
      
      // In Svelte 5, we directly use the default export
      // instead of calling render()
      return {
        content: post.default, // Pass the component directly
        title: frontmatter.title || 'Untitled',
        coverImage: frontmatter.coverImage || 'https://picsum.photos/seed/fallback/800/600',
        date: frontmatter.date || new Date().toISOString(),
        description: frontmatter.description || 'No description available'
      };
    }

    throw error(404, `Post "${params.slug}" not found`);
  } catch (e) {
    console.error('Error loading post:', e);
    throw error(404, `Could not find post ${params.slug}`);
  }
}