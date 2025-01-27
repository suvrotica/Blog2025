// src/routes/sketch/[id]/+page.ts
import type { Load } from '@sveltejs/kit';

export const load: Load = ({ params }) => {
  return {
    id: params.id,
    isEditing: true // You can modify this based on authentication later
  };
};