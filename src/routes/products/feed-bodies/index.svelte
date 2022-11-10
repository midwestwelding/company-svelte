<FeaturedImage imageUrl="'/products/featured-feed-body.webp'" pageName="Bulk Feed Body Trucks" pageTagline="Customizing To Your Needs" imagePosition="bottom" />
<div class="w-screen flex justify-center py-8">
  <div class="w-full max-w-ninety lg:max-w-screen-lg">
    {@html content.featured}
  </div>
</div>
<div class="w-screen flex justify-center py-8 bg-blue">
  <div class="w-full max-w-ninety lg:max-w-screen-lg text-white">
    <h3>Highlights</h3>
    {#each content.highlights as highlight}
      <div>
        <h4>{ highlight.title }</h4>
        <p>{ highlight.content }</p>
      </div>
    {/each}
  </div>
</div>
<div class="w-screen pb-8 bg-no-repeat bg-center bg-cover text-white" style="background-image: url(/products/feed-truck-bag-doors.webp)">
  <div class="bg-no-repeat bg-center" style="background-size: 100% 100px; top: 0; content: ''; width: 100%; height: 100px; z-index: 1; background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwMDIxNDQiPjxwYXRoIGQ9Ik05NzguODEgMTIyLjI1TDAgMGgxMjgwbC0yNjIuMSAxMTYuMjZhNzMuMjkgNzMuMjkgMCAwIDEtMzkuMDkgNS45OXoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNOTgzLjE5IDk1LjIzTDAgMGgxMjgwbC0yNjYgOTEuNTJhNzIuNTggNzIuNTggMCAwIDEtMzAuODEgMy43MXoiLz48L2c+PC9zdmc+)"></div>
  <div class="flex justify-center ">
    <div class="w-full max-w-ninety lg:max-w-screen-lg">
      <h3>{ content.models.title }</h3>
      <p>{ content.models.content}</p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {#each content.models.list as model}
        <div class="bg-red-transparent p-8">
          <h4>{ model.title }</h4>
          {#each model.variations as vari}
            <p>{ vari }</p>
          {/each}
        </div>
        {/each}
      </div>
    </div>
  </div>
</div>
<div class="w-screen py-8 bg-red flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg">
    <h3 class="text-white">{ content.options.title }</h3>
    <div class="bg-white py-5">
      <p class="ml-5">{ content.options.content }</p>
      <div class="mx-5 pt-2">
        {#each content.options.list as lis}
          <button class="py-1 px-3 border-2" on:click="{() => {openOption = lis.title}}">{ lis.title }</button>
        {/each}
      </div>
      {#each content.options.list as lis}
      {#if openOption == lis.title}
      <div transition:slide="{{delay: 250, duration: 300, easing: quintOut }}" id="{ lis.title }" class="border-2 mx-5 mb-5">
        <div class="px-8 py-5">
          <ol class="list-decimal">
            {#each lis.options as option}
              <li>{ option }</li>
            {/each}
          </ol>
        </div>
      </div>
      {/if}
      {/each}
    </div>
  </div>
</div>
<div class="w-screen py-8 flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each gallery as image}
    <div class="w-full">
      <img src="{image.url}" alt="" class="w-full" />
    </div>
    {/each}
  </div>
</div>

<SvelteSEO 
  title="{ feedBodies.title }"
  description="{ feedBodies.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { feedBodies } from '../../../seo.js'

  const content = {
    featured: `<p>MWM has been fabricating Bulk Feed Body Trucks for more than 50 years. It’s with this experience and feedback from Customers that MWM has been a go-to seller for the greater WI Feed industry. Whether it is the level of customization, implementation of high-tech features, quality of build, or excellent customer service, MWM continues to see new and repeat customers each year.</p>
    <p>Each feed body build includes: variable speed control, 22′ long discharge auger with hanger bearings, LED lights, mud flaps, hydraulic oil, triple hydraulic main pump with direct drive orbital motors, full opening top door, oil cooler, remote control w/electric solenoid manifold valve stainless steel hydraulic tubes, white paint on steel components, and mounting on customer’s truck chassis.</p>`,
    highlights: [
      {
        title: 'Remote System',
        content: 'You can purchase an all-manual operation truck, but we\'ve found that our remote system is highly popular with the operators. Our remote system allows you complete control from the cab.'
      },
      {
        title: 'Top Door',
        content: 'Our top door was recently redesigned and features a new sealing method and easily to slide motion.'
      },
      {
        title: 'High Output',
        content: 'Our design allows you to unload faster than the competitors.'
      }
    ],
    models: {
      title: 'Models',
      content: 'MWM\'s Feed Bodies come in 3 distinct models and 4 variations:',
      list: [
        {
          title: '#400 - Belt Bottom',
          variations: [
            'Standard Height',
            'High Cube',
            'High Output Standard Height',
            'High Output High Cube'
          ]
        },
        {
          title: '#5012 - Auger Bottom',
          variations: [
            'Standard Height',
            'High Cube',
            'High Output Standard Height',
            'High Output High Cube'
          ]
        },
        {
          title: '#4034 - Chain Bottom',
          variations: [
            'Standard Height',
            'High Cube',
            'High Output Standard Height',
            'High Output High Cube'
          ]
        }
      ]
    },
    options: {
      title: 'Options',
      content: 'Our list is longer than the alphabet!',
      list: [
        {
          title: 'Lights',
          options: [
            'LED light in cross auger',
            'Lights under the fenders by axles',
            'LED lights in the bag door compartment',
            'LED oval stop-tail turn lights on rear wall',
            'LED light in valve compartment',
            'Oval turn signals on fenders',
            'LED spotlights (in customer specified location)',
          ]
        },
        {
          title: 'Body',
          options: [
            'Extra compartments',
            'Larger compartments',
            'All compartments closed',
            'Bag doors',
            'Approximately 600-pound flush box',
            'Full length DOT tape',
            'High cube wall sheets',
            'Air wand on top of truck',
            'Hinged rear step on bumper',
          ]
        },
        {
          title: 'Other Features',
          options: [
            'Oil Bath for Vertical and Discharge Augers',
            'Air operated top door',
            'Manual split-top door',
            'Air operated split-top door',
            'Discharge Auger up to 32 foot long',
            'Jack shaft gear reduction on slides',
            'Hydraulic slides',
            'Pit dump shut off',
            'Air operated flush box slide',
            'Stainless steel cross auger assembly',
            'Tram',
            'Hot dip galvanized for steel parts',
            'Paint colors for steel parts',
            'Gum rubber sock on discharge',
            'Red vinyl sock on discharge',
            'Customer name cut into bumper',
            'Customer name cut into flush box',
            'Mud flaps in front of pusher axle',
          ]
        }
      ]
    }
  }

  let openOption = content.options.list[0].title

  const gallery = [
    {url: '/products/feed-bodies/019.webp'},
    {url: '/products/feed-bodies/100_6720.webp'},
    {url: '/products/feed-bodies/100_6827.webp'},
    {url: '/products/feed-bodies/IMG_5056.webp'},
    {url: '/products/feed-bodies/100_4238.webp'},
    {url: '/products/feed-bodies/100_6722.webp'},
    {url: '/products/feed-bodies/20201112_132849.webp'},
    {url: '/products/feed-bodies/IMG_5266.webp'},
    {url: '/products/feed-bodies/100_5540.webp'},
    {url: '/products/feed-bodies/100_6748.webp'},
    {url: '/products/feed-bodies/FGFB2016-3.webp'},
    {url: '/products/feed-bodies/009.webp'},
    {url: '/products/feed-bodies/100_5551.webp'},
    {url: '/products/feed-bodies/100_6751.webp'},
    {url: '/products/feed-bodies/FGFB2016-7.webp'},
    {url: '/products/feed-bodies/028.webp'},
    {url: '/products/feed-bodies/100_5669.webp'},
    {url: '/products/feed-bodies/100_6752.webp'},
    {url: '/products/feed-bodies/FGFB2016-8.webp'},
    {url: '/products/feed-bodies/030.webp'},
    {url: '/products/feed-bodies/100_5757.webp'},
    {url: '/products/feed-bodies/100_6760.webp'},
    {url: '/products/feed-bodies/FlagwithSemi.webp'},
    {url: '/products/feed-bodies/215.webp'},
    {url: '/products/feed-bodies/100_5764.webp'},
    {url: '/products/feed-bodies/100_6765.webp'},
    {url: '/products/feed-bodies/IMG_3435.webp'},
    {url: '/products/feed-bodies/232.webp'},
    {url: '/products/feed-bodies/100_6073.webp'},
    {url: '/products/feed-bodies/100_6767.webp'},
    {url: '/products/feed-bodies/IMG_3436.webp'},
    {url: '/products/feed-bodies/237.webp'},
    {url: '/products/feed-bodies/100_6632.webp'},
    {url: '/products/feed-bodies/100_6771.webp'},
    {url: '/products/feed-bodies/IMG_3437.webp'},
    {url: '/products/feed-bodies/246.webp'},
    {url: '/products/feed-bodies/100_6634.webp'},
    {url: '/products/feed-bodies/100_6772.webp'},
    {url: '/products/feed-bodies/IMG_3439.webp'},
    {url: '/products/feed-bodies/100_6718.webp'},
    {url: '/products/feed-bodies/100_6822.webp'},
    {url: '/products/feed-bodies/IMG_3441.webp'},
  ]

</script>