<script>
    import Article from "../lib/Article.svelte";
    import PageHeading from "../lib/PageHeading.svelte";
    import Section from "../lib/Section.svelte";
    import Youtube from "svelte-youtube-embed"
</script>

<svelte:head>
    <title>How to Play - Victory Stick</title>
    <meta name="description" content="Learn how to play Victory Stick.">
</svelte:head>

<PageHeading>How To Play</PageHeading>

<Article>
    <Section heading="Object">
        <p>
            Use the Victory Stick to get the ball in the hole in as few of strokes
            as possible; just like golf except you throw the ball with the Victory Stick
            instead of using golf clubs. 
        </p>
    </Section>
    <Section heading="Putting">
        <Youtube id="j6xtUMWlqm8"/>
    </Section>
    <Section heading="Driving">
        <Youtube id="hzBA0TfH76M"/>
    </Section>
    <Section heading="Gameplay">
        <p>Just follow the most basic rules of conventional golf.</p>
    </Section>
    <Section heading="Play Freestyle">
        <p>
            No golf course around? Play how you like. With Victory Stick you can trot 
            through the back nine in under 30 minutes before or after work, spice up a 
            walk with family through the park, or play at the beach. Be sure to tell us
            your favorite way to play in the <a sveltekit:prefetch href="./contact" class="bluelink">contact</a> section of our page!
        </p>
    </Section>
</Article>