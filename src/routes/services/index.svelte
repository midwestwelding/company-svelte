<FeaturedImage imageUrl="'/featured-about.webp'" pageName="Services" pageTagline="We are ready to serve you" imagePosition="top"></FeaturedImage>

<div class="w-screen flex justify-center py-8">
  <div class="w-full max-w-ninety">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
      {#each services as service}
      <div class="hover:opacity-70">
        <a href="{ service.link }" class="block">
          <div class="mt-8 py-20 bg-blue text-white bg-center bg-no-repeat bg-cover" style="background-image: url({ service.image })">
            <h3 class="pl-5 text-4xl">{ service.title }</h3>
          </div>
        </a>
      </div>
      {/each}
    </div>
  </div>
</div>

<SvelteSEO 
  title="{ servicesSeo.title }"
  description="{ servicesSeo.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'

  import { services as servicesSeo } from '../../seo.js'

  const services = [
    {title: 'Feed Body Repairs', link: '/services/feed-body-repairs', image: '/services/services-feed-body-repairs.webp'},
    {title: 'Manufacturing', link: '/services/manufacturing', image: '/services/services-manufacturing.webp'},
    {title: 'Road Crew/Millwrights', link: '/services/road', image: '/services/services-millwright.webp'},
    {title: 'Machine Shop', link: '/services/machine-shop', image: '/services/services-machining.webp'},
    {title: 'Waterjet Cutting', link: '/services/waterjet', image: '/services/services-waterjet.webp'},
    {title: 'Plasma Table', link: '/services/plasma-table', image: '/services/services-plasma_table.webp'},
    {title: 'Drafting', link: '/services/drafting', image: '/services/services-drafting.webp'},
    {title: 'Sandblasting', link: '/services/sandblasting', image: '/services/services-sandblasting.webp'},
    {title: 'Painting', link: '/services/painting', image: '/services/services-painting.webp'},
    // {title: 'Hot-dipped Steel', link: '/services/hot-dipped-steel'},
    // {title: 'Truck Repairs', link: '/services/truck-repairs'},
    {title: 'Buy Parts/Materials', link: '/services/parts', image: '/services/services-parts.webp'},
    {title: 'Advising/Consulting', link: '/services/consulting', image: '/services/services-consulting.webp'}
  ]
</script>