<!-- src/routes/sketch/[id]/+page.svelte -->
<script lang="ts">
    import SketchPad from '$lib/components/SketchPad.svelte';
    
    interface Data {
      id: string;
      isEditing: boolean;
    }
    
    let { data } = $props<{ data: Data }>();
  </script>
  
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Sketch {data.id}</h1>
    <SketchPad id={data.id} readOnly={!data.isEditing} />
  </div>