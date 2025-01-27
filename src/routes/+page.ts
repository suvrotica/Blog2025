// src/routes/+page.ts
import type { SketchMetadata, SketchModule } from '$lib/types';

export function load() {
  try {
    const sketches = import.meta.glob<SketchModule>('/src/lib/sketches/*.md', { eager: true });
    
    const sketchesData = Object.entries(sketches).map(([path, sketch]) => ({
      ...sketch.metadata,
      slug: path.split('/').pop()?.replace('.md', '')
    }));

    // Sort sketches by date, most recent first
    const sortedSketches = sketchesData.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return {
      sketches: sortedSketches
    };
  } catch (e) {
    console.error('Error loading sketches:', e);
    return {
      sketches: []
    };
  }
}