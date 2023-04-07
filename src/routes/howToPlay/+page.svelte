<script>
	import Article from "../../lib/components/Article.svelte";
	import PageHeading from "../../lib/components/PageHeading.svelte";
	import Section from "../../lib/components/Section.svelte";
	import { YouTube } from "@rossrobino/components";
</script>

<svelte:head>
	<title>How to Play - Victory Stick</title>
	<meta name="description" content="Learn how to play Victory Stick." />
</svelte:head>

<PageHeading>How To Play</PageHeading>

<Article>
	<Section heading="Object">
		<p>
			Use the Victory Stick to get the ball in the hole in as few of strokes as possible; just like
			golf except you throw the ball with the Victory Stick instead of using golf clubs.
		</p>
	</Section>
	<Section heading="Putting">
		<YouTube
			uid="j6xtUMWlqm8"
			title="Putting"
			class="aspect-video w-full rounded border-4 border-zinc-500"
		/>
	</Section>
	<Section heading="Driving">
		<YouTube
			uid="hzBA0TfH76M"
			title="Driving"
			class="aspect-video w-full rounded border-4 border-zinc-500"
		/>
	</Section>
	<Section heading="Gameplay">
		<p>Just follow the most basic rules of conventional golf.</p>
	</Section>
	<Section heading="Play Freestyle">
		<p>
			No golf course around? Play how you like. With Victory Stick you can trot through the back
			nine in under 30 minutes before or after work, spice up a walk with family through the park,
			or play at the beach. Be sure to tell us your favorite way to play in the <a
				sveltekit:prefetch
				href="./contact"
				class="bluelink"
			>
				contact
			</a>
			section of our page!
		</p>
	</Section>
</Article>
