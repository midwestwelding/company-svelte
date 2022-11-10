<FeaturedImage imageUrl="'/vendors/featured_vendors.webp'" pageName="Vendors" pageTagline="Availability and Cost Savings" imagePosition="center" ></FeaturedImage>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <div class="grid grid-cols-3">
      {#each vendors as vendor, i }
        {#if i % 2 == 0}
          <div class="flex justify-center items-center my-3">
            <a rel="external" target="_blank" href="{ vendor.link }">
              {#if vendor.image}
                <img class="max-w-ninety max-h-32" src="{vendor.image}" alt="{vendor.title}" />
              {:else}
                <h3>{ vendor.title }</h3>
              {/if}
            </a>
          </div>
          <div class="col-span-2 my-3">
            <h3 class="my-2"><a rel="external" target="_blank" href="{ vendor.link }">{vendor.title}</a></h3>
            <div>
              {@html vendor.content}
            </div>
          </div>
        {:else}
          <div class="col-span-2 my-3">
            <h3 class="my-2"><a rel="external" target="_blank" href="{ vendor.link }">{ vendor.title}</a></h3>
            <div>
              {@html vendor.content}
            </div>
          </div>
          <div class="flex justify-center my-3">
            <a rel="external" target="_blank" href="{ vendor.link }">
              {#if vendor.image}
                <img class="max-w-ninety max-h-32" src="{vendor.image}" alt="{vendor.title}" />
              {:else}
                <h3>{ vendor.title }</h3>
              {/if}
            </a>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<SvelteSEO 
  title="{ vendorsSeo.title }"
  description="{ vendorsSeo.description }"
></SvelteSEO>

<style>
  :global(.list-disc) {
    list-style-type: disc;
    @apply pl-6;
  }
</style>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'

  import { vendors as vendorsSeo } from '../../seo.js'

  const vendors = [
    {
      title: '4B Components',
      content: `
        <p>4B Components Ltd. specializes in the manufacture and supply of material handling and electronic components for bucket elevators and conveyors.  Our extensive line of products include:  elevator buckets (plastic/metal), elevator bolts, elevator & conveyor belting, drop forged chain, level indicators, hazard monitors (speed, alignment, temperature) and emergency stop safety switches.</p>
      `,
      image: '/vendors/4b_components.webp',
      link: 'https://www.go4b.com/usa/'
    },
    {
      title: 'ABB (Dodge)',
      content: `
        <p>ABB is a leading global technology company that energizes the transformation of society and industry to achieve a more productive, sustainable future. By connecting software to its electrification, robotics, automation and motion portfolio, ABB pushes the boundaries of technology to drive performance to new levels. With a history of excellence stretching back more than 130 years, ABB’s success is driven by about 105,000 talented employees in over 100 countries.</p>
      `,
      image: '/vendors/abb_dodge.webp',
      link: 'https://global.abb/group/en'
    },
    {
      title: 'Brock',
      content: `
      <p>Maximize the marketing value of your grain with BROCK SOLID® Systems and solutions for grain storage, handling, conditioning and structures. Safeguarding your grain since 1957.</p>
      `,
      image: '/vendors/brock.webp',
      link: 'https://www.brockgrain.com/index.php'
    },
    {
      title: 'Greene Galvanized Stairs',
      content: '<p>We work to continually improve safe access for commodity storage and handling by providing high quality products with exceptional customer service.</p>',
      image: '/vendors/greene.webp',
      link: 'https://www.greenestairs.com/home.html'
    },
    {
      title: 'Hayes & Stolz',
      content: `
      <p>Located in Burleson, Texas, Hayes & Stolz has achieved worldwide recognition as a leading industrial manufacturer of high performance mixing, material handling, and process equipment for 75 years. Our products are found in some of the largest and most modern processing facilities all around the world. From feed manufacturing for poultry or livestock; to processing food products or pharmaceuticals; to moving and blending sand, concrete, grouts and mortars, Hayes & Stolz is there helping customers to maximize efficiency, productivity and profits.</p>
      `,
      image: '/vendors/hayes_stolz.webp',
      link: 'https://hayes-stolz.com/'
    },
    {
      title: 'Honeyville Metal',
      content: `
      <p>Since 1951 Honeyville Inc. has remained a family owned leader in food ingredient manufacturing. Whether you are a leading food company or a home baking enthusiast, Honeyville has the ingredients and services you need to make your food visions a reality!</p>
      <p>Today, with more than 50 years of experience behind us, we recognize more clearly than ever that our continued success must be built upon relationships of trust with our valued customers. The philosophy of treating people as we would like to be treated still stands as a cornerstone of our corporate vision. People can make a difference …Lowell Sherratt was right!</p>
      `,
      image: '/vendors/honeyville.webp',
      link: 'https://www.honeyvillemetal.com/'
    },
    {
      title: 'Nolin Milling',
      content: `
      <p>Nolin Milling manufactures bulk material handling equipment and industrial ductwork.</p>
      `,
      image: '/vendors/nolin_milling.webp',
      link: 'https://www.nolinmilling.com/'
    },
    {
      title: 'Packer Fastener',
      content: `
        <p>Packer Fastener is a Midwest, Business to-Business, Industrial Supply Powerhouse. Packer offers a large, continuously expanding gamut of products including fasteners, abrasives, safety PPE, fittings, welding supplies and other consumable items. Offerings also include a wide array of services including E-commerce, Vendor Managed Inventory and Vending programs tailored to overserve MRO, OEM, commercial contractor, and fabricator customers.</p>
      `,
      image: '/vendors/packer_fastener.webp',
      link: 'https://www.packerfastener.com/'
    },
    {
      title: 'Premier Components',
      content: `
        <h4>“Your #1 Source for Mill Accessories”</h4>
        <p>We carry a variety of mill accessories to meet your agricultural needs, including:</p>
        <ul class="list-disc">
          <li>Round and Square Spouting and Accessories, Including Round and Square Spout Patches</li>
          <li>Slide gates Standard, Premium and Heavy Duty options</li>
          <li>Valves and Valve Drives</li>
          <li>Round and Square Style Cushion Boxes original and “New Style” option with Leak Free Design</li>
          <li>Distributors and Distributor Drives</li>
          <li>Urethane, Blue, Orange and Red along with UHMW</li>
          <li>Catwalks, Towers, Ladders and Grating</li>
          <li>Ductwork and Dust Control Components</li>
          <li>Bin Level Controls</li>
          <li>Hutchinson Bin Sweeps and Augers</li>
          <li>And much more!</li>
        </ul>
      `,
      image: '/vendors/premier_components.webp',
      link: 'https://premier-com.com/'
    },
    {
      title: 'Schlagel',
      content: `
      <p>“Manufacturing Material Handling Equipment For the Grain, Feed and Fertilizer Industries since 1957"</p>
      <p>Schlagel, Inc. has been an industry leader since 1957 in the design and manufacture of grain handling equipment. Their pioneering efforts have brought innovation to the industry’s handling methods through enhancements to equipment design and increased machine capabilities/capacities.</p>`,
      image: '/vendors/schlagel.webp',
      link: 'http://www.schlagel.com/'
    },
    {
      title: 'Spread-All MFG',
      content: `
        <p>Our company is your best source for professional, value driven low cost service. Established in 1960 and family owned, we have decades of collective and comprehensive knowledge and experience. Meaning that we are able to provide the most value and innovation per your dollar spent. We provide a satisfaction guarantee for all services provided.</p>
      `,
      image: null,
      link: 'http://www.spread-allmfg.net/'
    },
    {
      title: 'Tapco',
      content: `
        <p>Tapco has spent nearly 30 years in its large St. Louis-area facility, which houses in-house injection molding capabilities to maximize quality and minimize costs. With a variety of injection molding machines, including a wide range of presses, Tapco has the equipment and the experience to find a solution for any elevator bucket need.</p>
      `,
      image: '/vendors/tapco.webp',
      link: 'https://www.tapcoinc.com/'
    }
  ]
</script>
