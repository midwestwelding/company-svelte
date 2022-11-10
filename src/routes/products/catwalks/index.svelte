<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h2>Catwalks/Manwalks</h2>
  </div>
</div>

<SvelteSEO 
  title="{ catwalks.title }"
  description="{ catwalks.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import SvelteSEO from 'svelte-seo'
  import { catwalks } from '../../../seo.js'
</script>