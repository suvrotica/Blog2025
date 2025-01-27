<!-- src/routes/+page.svelte -->
<script lang="ts">
    import Gallery from '$lib/components/Gallery.svelte';
    import PinterestGallery from '$lib/components/PinterestGallery.svelte';
    </script>
    
    <main class="container mx-auto px-4 py-8">
     <h1 class="text-4xl font-bold text-center mb-12">My Blog Gallery</h1>
     <Gallery />
     <PinterestGallery />
    </main>