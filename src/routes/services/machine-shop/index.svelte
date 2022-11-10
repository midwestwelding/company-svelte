<FeaturedImage imageUrl="'/services/featured-machining.webp'" pageName="Machining" pageTagline="" imagePosition="bottom"></FeaturedImage>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <p class="py-2">We use lathes, drill presses, milling machine, and a CNC machining center. We make use of both Solidworks® and Mastercam® technology to produce detailed parts, held to tight tolerances. Whether your job requires one-offs or large batches, we can help you.</p>
  </div>
</div>

<SvelteSEO title="{ machineShop.title }" description="{ machineShop.description }"></SvelteSEO>

<script context="module">
  export const prerender = true
</script>

<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { machineShop } from '../../../seo.js'
</script>