// src/lib/types.ts
export interface SketchMetadata {
    title: string;
    coverImage: string;
    date: string;
    description: string;
    slug: string;
    type: 'sketch';  // This helps distinguish from other post types
  }
  
  export interface SketchModule {
    metadata: SketchMetadata;
  }