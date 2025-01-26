<!-- src/lib/layouts/post.svelte -->
<script>
    let { title, coverImage } = $props();
    </script>
    
    <article class="max-w-3xl mx-auto p-6">
      <img src={coverImage} alt={title} class="w-full h-64 object-cover rounded-lg mb-8" />
      <slot />
    </article>