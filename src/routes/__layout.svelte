<script>
    import "../app.css";
    import NavBar from "$lib/NavBar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="flex flex-col justify-between font-zilla min-h-screen bg-[url('images/topography.webp')]">
    <div>
        <header>
            <NavBar 
                nameLinkList = {
                    [
                        { name: "How To Play", link: "/howToPlay" },
                        { name: "Gallery", link: "/gallery" },
                        { name: "Contact", link: "/contact" },
                    ]
                }
                logo = {
                    { src: "images/logoWhite.webp", alt: "Victory Stick Logo" }
                }
            />
        </header>
        <main>
            <slot />
        </main>
    </div>
    <Footer 
        nameLinkList = {
            [
                { name: "YouTube", link: "https://www.youtube.com/channel/UCt9rj8wyctPOtdLrFPaZqBw" },
                { name: "Facebook", link: "https://www.facebook.com/walfing" },
            ]
        }
    />
</div>