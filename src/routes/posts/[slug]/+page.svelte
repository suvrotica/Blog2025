<!-- src/routes/posts/[slug]/+page.svelte -->
<script lang="ts">
    let { data } = $props();
    </script>
    
    <article class="prose lg:prose-xl mx-auto px-4 py-8">
      <img 
        src={data.meta.coverImage} 
        alt={data.meta.title}
        class="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <h1>{data.meta.title}</h1>
      <time class="text-gray-500 block mb-8">{new Date(data.meta.date).toLocaleDateString()}</time>
      
      {@html data.content}
    </article>