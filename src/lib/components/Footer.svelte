<script>
	export let nameLinkList; // [{ name: "", link: ""},...]
</script>

<footer class="flex h-16 items-center justify-end bg-black text-white">
	{#each nameLinkList as item}
		<a class="pr-8" href={item.link}>{item.name}</a>
	{/each}
</footer>
