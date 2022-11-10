<FeaturedImage imageUrl="'/featured-careers.webp'" pageName="Careers" pageTagline="Hiring Experts" imagePosition="center"></FeaturedImage>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>Currently Hiring for:</h3>
    <div class="pb-8">
      {#each careers as career}
      <div class="flex py-3">
        <div class="flex-grow">
          <h4>{ career.title}</h4>
          <p>{@html career.description}</p>
          <b>{ career.rate }</b>
        </div>
        <div class="flex-shrink align-center">
          <a href="/apply" class="bg-blue text-white text-center p-3 font-semibold hover:bg-blue-transparent">Apply</a>
        </div>
      </div>
      {/each}
    </div>
    <div class="pt-8"><a href="https://transparency-in-coverage.uhc.com/" title="Transparency in Coverage">TiC</a></div>
  </div>
</div>

<SvelteSEO
  title="{ careersSeo.title }"
  description="{ careersSeo.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { careers as careersSeo } from '../../seo.js'

  const careers = [
    {
      title: 'Field Service Technician',
      description: '<p>On-site installation & repair of equipment across a wide variety of industries</p>',
      rate: ''
    },
    {
      title: 'Shop Team Member',
      description: '<p>Assists in welding, equipment repair, and building of feed body trucks</p>',
      rate: ''
    }
  ]
</script>