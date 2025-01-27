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
  
  // export async function getPosts(): Promise<Post[]> {
  //   const posts = import.meta.glob<PostModule>('/src/posts/*.svx', { eager: true });
    
  //   return Object.entries(posts).map(([filepath, post]) => {
  //     const slug = filepath.replace('/src/posts/', '').replace('.svx', '');
  //     return {
  //       slug,
  //       ...post.metadata,
  //       content: post.default
  //     };
  //   }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  // }

 

const DUMMY_POSTS: Post[] = [
  {
    title: "Exploring Mountain Landscapes",
    coverImage: "https://picsum.photos/seed/mountains/800/600",
    date: "2024-01-26",
    slug: "mountain-landscapes",
    content: "Mountain content..."
  },
  {
    title: "Urban Photography Guide",
    coverImage: "https://picsum.photos/seed/urban/800/600",
    date: "2024-01-25",
    slug: "urban-photography",
    content: "Urban content..."
  },
  {
    title: "Seascape Adventures",
    coverImage: "https://picsum.photos/seed/sea/800/600",
    date: "2024-01-24",
    slug: "seascape-adventures",
    content: "Sea content..."
  },
  {
    title: "Wildlife Photography Tips",
    coverImage: "https://picsum.photos/seed/wildlife/800/600",
    date: "2024-01-23",
    slug: "wildlife-photography",
    content: "Wildlife content..."
  },
  {
    title: "Abstract Art in Nature",
    coverImage: "https://picsum.photos/seed/abstract/800/600",
    date: "2024-01-22",
    slug: "abstract-nature",
    content: "Abstract content..."
  },
  {
    title: "Street Photography Essentials",
    coverImage: "https://picsum.photos/seed/street/800/600",
    date: "2024-01-21",
    slug: "street-photography",
    content: "Street content..."
  },
  {
    title: "Macro Photography World",
    coverImage: "https://picsum.photos/seed/macro/800/600",
    date: "2024-01-20",
    slug: "macro-photography",
    content: "Macro content..."
  },
  {
    title: "Architecture in Black and White",
    coverImage: "https://picsum.photos/seed/architecture/800/600",
    date: "2024-01-19",
    slug: "architecture-bw",
    content: "Architecture content..."
  },
  {
    title: "Portrait Photography Guide",
    coverImage: "https://picsum.photos/seed/portrait/800/600",
    date: "2024-01-18",
    slug: "portrait-guide",
    content: "Portrait content..."
  }
];

export async function getPosts(): Promise<Post[]> {
  // Return dummy posts - in a real app, this would fetch from your CMS or markdown files
  return DUMMY_POSTS;
}