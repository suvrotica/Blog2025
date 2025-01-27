<!-- src/lib/components/PinterestGallery.svelte -->
<script lang="ts">
	interface PinPost {
		title: string;
		coverImage: string;
		aspect: 'square' | 'landscape' | 'portrait';
		slug: string;
		description: string;
	}

	let pins = $state<PinPost[]>([
		{
			title: 'Mountain Lake Reflection',
			coverImage: 'https://picsum.photos/seed/lake/800/600',
			aspect: 'landscape',
			slug: 'mountain-lake-reflection', // This should match the .md filename
			description: 'Serene mountain lake at sunrise'
		},
		{
			title: 'Winter Forest',
			coverImage: 'https://picsum.photos/seed/winter/600/800',
			aspect: 'portrait',
			slug: 'winter-forest',
			description: 'Snow covered trees in winter'
		},
		{
			title: 'Urban Architecture',
			coverImage: 'https://picsum.photos/seed/urban/800/600',
			aspect: 'landscape',
			slug: 'urban-arch',
			description: 'Modern city buildings'
		},
		{
			title: 'Forest Canopy',
			coverImage: 'https://picsum.photos/seed/canopy/600/800',
			aspect: 'portrait',
			slug: 'forest-canopy',
			description: 'Looking up at towering trees'
		},
		{
			title: 'Desert Roads',
			coverImage: 'https://picsum.photos/seed/roads/800/600',
			aspect: 'landscape',
			slug: 'desert-roads',
			description: 'Winding roads through desert landscape'
		},
		{
			title: 'Studio Portrait',
			coverImage: 'https://picsum.photos/seed/portrait/600/800',
			aspect: 'portrait',
			slug: 'studio-portrait',
			description: 'Professional studio photography'
		},
		{
			title: 'Coffee Art',
			coverImage: 'https://picsum.photos/seed/coffee/700/700',
			aspect: 'square',
			slug: 'coffee-art',
			description: 'Artisanal coffee designs'
		},
		{
			title: 'Ocean Waves',
			coverImage: 'https://picsum.photos/seed/ocean/800/600',
			aspect: 'landscape',
			slug: 'ocean-waves',
			description: 'Powerful waves at sunset'
		},
		{
			title: 'Street Life',
			coverImage: 'https://picsum.photos/seed/street/600/800',
			aspect: 'portrait',
			slug: 'street-life',
			description: 'Urban street photography'
		},
		{
			title: 'Mountain Peak',
			coverImage: 'https://picsum.photos/seed/peak/800/600',
			aspect: 'landscape',
			slug: 'mountain-peak',
			description: 'Snow-capped mountain peaks'
		},
		{
			title: 'Minimal Design',
			coverImage: 'https://picsum.photos/seed/minimal/700/700',
			aspect: 'square',
			slug: 'minimal-design',
			description: 'Clean minimalist aesthetics'
		},
		{
			title: 'Nature Close-up',
			coverImage: 'https://picsum.photos/seed/nature/600/800',
			aspect: 'portrait',
			slug: 'nature-closeup',
			description: 'Macro nature photography'
		}
	]);

	// Shuffle the pins array for randomized layout
	$effect(() => {
		pins = [...pins].sort(() => Math.random() - 0.5);
	});
</script>

<div class="mx-auto max-w-7xl columns-1 gap-4 p-4 sm:columns-2 md:columns-3 lg:columns-4">
	{#each pins as pin}
		<div class="group relative mb-4 break-inside-avoid">
			<a href="/posts/{pin.slug}" class="block">
				<div class="relative overflow-hidden rounded-xl">
					<img
						src={pin.coverImage}
						alt={pin.title}
						class="w-full transform object-cover transition-transform duration-200 group-hover:scale-105"
						style={`aspect-ratio: ${
							pin.aspect === 'landscape' ? '4/3' : pin.aspect === 'portrait' ? '3/4' : '1/1'
						}`}
					/>
					<div
						class="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-200 group-hover:bg-opacity-20"
					></div>
				</div>
				<div class="p-3">
					<h3 class="text-lg font-bold">{pin.title}</h3>
					<p class="mt-1 text-sm text-gray-600">{pin.description}</p>
				</div>
			</a>
			<div
				class="absolute right-2 top-2 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
			>
				<button
					class="rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
					aria-label="Like this post"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</button>
				<button
					class="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
					aria-label="Share this post"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
						/>
					</svg>
				</button>
			</div>
		</div>
	{/each}
</div>
