<FeaturedImage imageUrl="'/products/featured-distributors.webp'" pageName="Distributors" pageTagline="" imagePosition="top"/>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    Whether you have simple setup with just a few bins or have a large bin array. MWM can set you up with a distributor that fits your need perfectly.
  </div>
</div>

<div class="w-screen flex justify-center bg-blue">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8 text-white">
    <h3>Models</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div>
        <h4>360 Style</h4>
      </div>
      <h4>Flat Back Style</h4>
    </div>
  </div>
</div>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>Options</h3>
    <h4>Materials</h4>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img src="/galvanized.webp" alt="Galvanized Steel" />
        <b>Galvanized</b>
      </div>
      <div>
        <img src="/painted-steel.webp" alt="Painted Steel" />
        <b>Painted Steel</b>
      </div>
    </div>
    <div class="p-2">
      <p>Various pipe sizes and discharge configurations</p>
      <p>Custom made distributors upon request</p>
    </div>
  </div>
</div>

<div class="w-screen flex justify-center bg-red text-white">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>Accessories</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div>
        <ul class="list-disc pt-4 pl-8">
          <li>22° Elbows Clamp Bands</li>
          <li>Down Spouts</li>
          <li>Buffer Boxes</li>
          <li>Truss Kits</li>
          <li>Flange Rings</li>
          <li>2-Way & 3-Way Valves</li>
          <li>Cable or Pipe Controls</li>
        </ul>
      </div>
      <div>
        <ul class="list-disc pt-4 pl-8">
          <li>Hand Slides</li>
          <li>Rest Platforms</li>
          <li>Ladders</li>
          <li>Caging</li>
          <li>Distributors</li>
          <li>Platforms</li>
        </ul>
      </div>
      <div>
        <ul class="list-disc pt-4 pl-8">
          <li>Head Adapters</li>
          <li>Load Out Bins</li>
          <li>Siding Sweep Elbows</li>
          <li>Dust Collectors</li>
          <li>Baggers</li>
          <li>Dump Hoppers</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<SvelteSEO
  title="{ distributors.title }"
  description="{ distributors.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { distributors } from '../../../seo.js'
</script>