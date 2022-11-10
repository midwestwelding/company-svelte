<script>
  export let imageUrl
  export let pageName
  export let pageTagline
  export let imagePosition

  let bgImageClass = ''

  switch(imagePosition) {
    case 'center':
      bgImageClass = 'bg-center'
      break
    case 'bottom':
      bgImageClass = 'bg-bottom'
      break
    case 'top':
      bgImageClass = 'bg-top'
      break
    case 'top-right':
      bgImageClass = 'bg-top-right'
      break
    case 'right':
      bgImageClass = 'bg-right'
      break
    case 'left':
      bgImageClass = 'bg-left'
      break
    default: bgImageClass = 'bg-center'
  }
</script>

<div class="{`w-screen flex flex-col justify-center items-center ${bgImageClass}`}" style="background-image: url({imageUrl}); aspect-ratio: 16/4.5">
  <div class="w-full max-w-screen-lg bg-gray-600 bg-opacity-40 text-center py-12">
    {#if $$slots.default}
      <slot></slot>
    {:else}
      <h1 class="text-white">{ pageName }</h1>
      <h2 class="text-white">{ pageTagline }</h2>
    {/if}
    
  </div>
</div>