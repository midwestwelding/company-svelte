<FeaturedImage imageUrl="'/services/featured-manufacturing.webp'" pageName="Manufacturing" pageTagline="" imagePosition="center"></FeaturedImage>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <p class="py-2">
      Midwest Welding & Manufacturing excels at custom manufacturing with many different types of materials: Mild Steel, Stainless Steel, Galvanized, Abrasive Resistant (AR), Aluminum, UHMW and more.
    </p>
    <p>Using the many tools in our shop, including but not limited to: Plasma Table, Plamsa Cutter, Torch, Welders (MIG, TIG, Stick), Waterjet, Brakes, Shears, Roller, Punches (single hole and Gang), and many hand tools, we can fabricate your parts or assemblies to your specifications.</p>
  </div>
</div>

<SvelteSEO title="{ manufacturing.title }" description="{ manufacturing.description}"></SvelteSEO>

<script context="module">
  export const prerender = true
</script>

<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { manufacturing } from '../../../seo.js'
</script>