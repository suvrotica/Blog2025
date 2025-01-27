<!-- src/routes/+page.svelte -->
<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import PinterestGallery from '$lib/components/PinterestGallery.svelte';
	import SketchPad from '$lib/components/SketchPad.svelte';
	import type { SketchMetadata } from '$lib/types';

	let { data } = $props<{ data: { sketches: SketchMetadata[] } }>();
</script>

<main class="container mx-auto px-4 py-8">
	<h1 class="mb-12 text-center text-4xl font-bold">My Blog Gallery</h1>
	<Gallery />
	<PinterestGallery />

	<section class="mb-12">
		<h1 class="mb-8 text-4xl font-bold">Quick Sketch</h1>
		<SketchPad id="quick-sketch" />
	</section>

	{#if data.sketches && data.sketches.length > 0}
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Saved Sketches</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.sketches as sketch}
					<a
						href={`/sketch/${sketch.slug}`}
						class="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
					>
						{#if sketch.coverImage}
							<img src={sketch.coverImage} alt={sketch.title} class="h-48 w-full object-cover" />
						{/if}
						<div class="p-4">
							<h3 class="mb-2 text-xl font-semibold">{sketch.title}</h3>
							{#if sketch.date}
								<time class="text-sm text-gray-500">
									{new Date(sketch.date).toLocaleDateString()}
								</time>
							{/if}
							{#if sketch.description}
								<p class="mt-2 text-gray-600">{sketch.description}</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</main>
