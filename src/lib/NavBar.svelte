<script>
  import { slide } from "svelte/transition"

  export let nameLinkList; // [{ name: "", link: ""},...]
  export let logo; // { src: "", alt: ""}
  let innerWidth;
  let checked;
</script>

<svelte:window bind:innerWidth />

<nav 
  class="
    pageNav 
    flex 
    items-center 
    justify-between
    h-16
    bg-black
    text-white
  "
>
  <a href="/" >
      <img class="h-8 pl-4" src="{logo.src}" alt="{logo.alt}" >
  </a>
  <input class="hidden" type="checkbox" id="checkbox_toggle" bind:checked/>
  <label for="checkbox_toggle" class="pr-4 block sm:hidden text-2xl select-none hover:cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" 
      class="h-6 w-6 hover:text-green-200" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" 
        d="{checked ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"
      /> <!-- d = x or hamburger-->
    </svg>
  </label>
    {#if (checked || (innerWidth > 640))}
      <div transition:slide="{innerWidth>640 ? { duration: 0} : {}}" class="
        absolute
        top-12
        left-0
        right-0
        py-4
        text-center
        sm:flex 
        sm:static
        bg-black
        " 
        >
        {#each nameLinkList as item}
          <a sveltekit:prefetch href="{item.link}">
            <span class="sm:pr-8 py-1 list-item list-none hover:text-green-200 uppercase">
              {item.name}
            </span>
          </a>
        {/each}
      </div>
    {/if}
</nav>