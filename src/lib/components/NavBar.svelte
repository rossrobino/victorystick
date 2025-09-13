<script>
	import { slide } from "svelte/transition";

	export let nameLinkList; // [{ name: "", link: ""},...]
	export let logo; // { src: "", alt: ""}
	let innerWidth;
	let checked;
</script>

<svelte:window bind:innerWidth />

<nav class="pageNav flex h-16 items-center justify-between bg-black text-white">
	<a href="/">
		<img class="h-8 pl-4" src={logo.src} alt={logo.alt} />
	</a>
	<input class="hidden" type="checkbox" id="checkbox_toggle" bind:checked />
	<label
		for="checkbox_toggle"
		class="block select-none pr-4 text-2xl hover:cursor-pointer sm:hidden"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 hover:text-green-200"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<!-- d={x or hamburger}-->
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d={checked ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
			/>
		</svg>
	</label>

	{#if checked || innerWidth > 640}
		<div
			transition:slide={innerWidth > 640 ? { duration: 0 } : {}}
			class="absolute left-0 right-0 top-12 bg-black py-4 text-center sm:static sm:flex"
		>
			{#each nameLinkList as item}
				<a href={item.link}>
					<span class="list-item list-none py-1 uppercase hover:text-green-200 sm:pr-8">
						{item.name}
					</span>
				</a>
			{/each}
		</div>
	{/if}
</nav>
