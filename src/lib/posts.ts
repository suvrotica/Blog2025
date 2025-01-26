// src/lib/posts.ts
export interface Post {
    title: string;
    coverImage: string;
    date: string;
    slug: string;
    content: string;
  }
  
  interface PostModule {
    metadata: {
      title: string;
      coverImage: string;
      date: string;
    };
    default: string;
  }
  
  export async function getPosts(): Promise<Post[]> {
    const posts = import.meta.glob<PostModule>('/src/posts/*.svx', { eager: true });
    
    return Object.entries(posts).map(([filepath, post]) => {
      const slug = filepath.replace('/src/posts/', '').replace('.svx', '');
      return {
        slug,
        ...post.metadata,
        content: post.default
      };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }