<!-- src/routes/posts/[slug]/+page.svelte -->
<script lang="ts">
  interface PageData {
    content: any;
    title: string;
    coverImage: string;
    date: string;
    description: string;
  }
  
  let { data } = $props<{data: PageData}>();
</script>
  
<article class="prose lg:prose-xl mx-auto px-4 py-8">
  {#if data.coverImage}
    <img 
      src={data.coverImage} 
      alt={data.title}
      class="w-full h-[400px] object-cover rounded-lg mb-8"
    />
  {/if}
  
  {#if data.title}
    <h1>{data.title}</h1>
  {/if}
  
  {#if data.date}
    <time class="text-gray-500 block mb-8">
      {new Date(data.date).toLocaleDateString()}
    </time>
  {/if}
  
  <div class="markdown">
    {#if data.content}
      <data.content />
    {/if}
  </div>
</article>