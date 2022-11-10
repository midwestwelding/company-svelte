<FeaturedImage imageUrl="'/services/featured-consulting.webp'" pageName="Consulting" pageTagline="Sharing the Experience" />

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <p>
      Our extensive experience in the industry, combined with our desire to see your equipment operate at its maximum potential, makes us a great resource for you when looking to improve the performance of your current equipment or replace it with equipment that will meet your needs. Considering a new installation or some other improvement to your facility? Give us the opportunity to guide you through those decisions. It will undoubtedly be worth your time and money.
    </p>
  </div>
</div>

<SvelteSEO
  title="{ consulting.title }"
  description="{ consulting.description }"></SvelteSEO>

<script context="module">
  export const prerender = true
</script>

<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { consulting } from '../../../seo.js'
</script>