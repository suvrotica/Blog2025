<!-- src/lib/layouts/post.svelte -->
<script lang="ts">
  let { title, coverImage, date, children } = $props();
  </script>
  
  <article class="prose lg:prose-xl mx-auto px-4 py-8">
    <img 
      src={coverImage} 
      alt={title}
      class="w-full h-[400px] object-cover rounded-lg mb-8"
    />
    <h1>{title}</h1>
    <time class="text-gray-500 block mb-8">
      {new Date(date).toLocaleDateString()}
    </time>
    
    {@render children()}
  </article>