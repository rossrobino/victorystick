<script>
    export let heading = "";
    let additionalClasses = "";
    export { additionalClasses as class }
</script>

<section class="pb-8 sm:pb-16 {additionalClasses}">
    <h3 class="font-bold text-xl {heading == '' ? 'hidden' : ''}">
        {heading}
    </h3>
    <slot />
</section>