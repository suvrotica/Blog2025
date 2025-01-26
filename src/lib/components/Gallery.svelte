<!-- src/lib/components/Gallery.svelte -->
<script lang="ts">
    import type { Post } from '$lib/posts';
    import { getPosts } from '$lib/posts';
    
    let posts = $state<Post[]>([]);
    
    // Load posts immediately
    getPosts().then(result => {
     posts = result;
    });
    </script>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
     {#each posts as { slug, title, coverImage, date }}
       <a href="/posts/{slug}" class="group">
         <div class="bg-white rounded-lg shadow-lg overflow-hidden">
           <img 
             src={coverImage} 
             alt={title}
             class="w-full h-48 object-cover group-hover:scale-105 transition-transform"
           />
           <div class="p-4">
             <h2 class="text-xl font-bold">{title}</h2>
             <time class="text-gray-500 text-sm">{new Date(date).toLocaleDateString()}</time>
           </div>
         </div>
       </a>
     {/each}
    </div>