<FeaturedImage imageUrl="'/products/featured-elevators.webp'" pageName="Elevators" pageTagline="" imagePosition="center" />

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <p>You may have unique and specific needs for moving your product. MGRF has built and installed elevator legs to move many different products of varying consistencies. We can custom build your elevator leg to fit your needs whether it is a 10’ leg or it reaches over 200’. We’ve been there. We’ve done that. We want to install something that will work for you specifically.</p>
  </div>
</div>

<div class="w-screen flex justify-center bg-blue text-white">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>Options</h3>
    <h4>Materials</h4>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div>
        <img src="/galvanized.webp" alt="Galvanized Steel" />
        <b>Galvanized</b>
      </div>
      <div>
        <img src="/painted-steel.webp" alt="Painted Steel" />
        <b>Painted Steel</b>
      </div>
      <div>
        <img src="/stainless.webp" alt="Stainless Steel" />
        <b>Stainless</b>
      </div>
    </div>
    <ul class="list-disc pt-5 pl-8">
      <li>Slotted Boot Pulleys</li>
      <li>Cup Venting</li>
      <li>Head & Boot Lining</li>
      <li>Heavier Gauge Trunking</li>
    </ul>
  </div>
</div>

<SvelteSEO 
  title="{ elevators.title }"
  description="{ elevators.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { elevators } from '../../../seo.js'
</script>