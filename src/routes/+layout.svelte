<script>
	import "../app.postcss";
	import NavBar from "$lib/components/NavBar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="backgroundtop flex min-h-screen flex-col justify-between bg-top font-zilla">
	<div>
		<header>
			<NavBar
				nameLinkList={[
					{ name: "How To Play", link: "/howToPlay" },
					{ name: "Gallery", link: "/gallery" },
					{ name: "Contact", link: "/contact" }
				]}
				logo={{ src: "/images/logoWhite.webp", alt: "Victory Stick Logo" }}
			/>
		</header>
		<main>
			<slot />
		</main>
	</div>
	<Footer
		nameLinkList={[
			{ name: "YouTube", link: "https://www.youtube.com/channel/UCt9rj8wyctPOtdLrFPaZqBw" },
			{ name: "Facebook", link: "https://www.facebook.com/walfing" }
		]}
	/>
</div>
