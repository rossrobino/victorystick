<script>
	import Article from "../../lib/components/Article.svelte";
	import PageHeading from "../../lib/components/PageHeading.svelte";
	import Section from "../../lib/components/Section.svelte";
</script>

<svelte:head>
	<title>Gallery - Victory Stick</title>
	<meta name="description" content="Victory Stick image gallery." />
</svelte:head>

<PageHeading>Gallery</PageHeading>

<Article>
	<Section>
		<div class="grid gap-1 sm:grid-cols-3">
			<img src="/images/gallery/artInBloom1.webp" alt="Art in Bloom Festival" class="w-full" />
			<img src="/images/gallery/bandon-Barry2.webp" alt="Bandon Dunes" />
			<img src="/images/gallery/artInBloom2.webp" alt="Art in Bloom Festival" />
			<img src="/images/gallery/artInBloom3.webp" alt="Art in Bloom Festival" class="w-full" />
			<img src="/images/gallery/scienceWorks.webp" alt="Science Works" />
			<img src="/images/gallery/bandon-Ross.webp" alt="Bandon Dunes" />
			<img src="/images/gallery/bearCreek-Barry.webp" alt="Bear Creek" />
			<img src="/images/gallery/kingsValley-BarryAndDee.webp" alt="Kings Valley" />
			<img src="/images/gallery/timberlineShort9.webp" alt="Timberline" />
			<img src="/images/gallery/walkingTallProduction.webp" alt="Walking Tall" />
			<img src="/images/gallery/bandon-Barry.webp" alt="Bandon Dunes" />
		</div>
	</Section>
</Article>
