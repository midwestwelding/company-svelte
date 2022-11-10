<FeaturedImage imageUrl="'/products/featured-mixers.webp'" pageName="Mixers" pageTagline="" imagePosition="center"></FeaturedImage>

<div class="w-screen flex justify-center bg-blue text-white">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>Models</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h4>Tumble Mixer</h4>
        <div>
          <h5>Size Options</h5>
          <p>1 Ton to 15 Ton Capacity Standard Sizes to 1500 Cubic Feet Low Horsepower required.</p>
          <h5>Options</h5>
          <p>Liquid Pre-blender</p>
        </div>
      </div>
      <div>
        <h4>Vertical Mixer</h4>
        <p>Our Combo Vertical Mixers come in a number of capacities, ranging from 2 Ton (136 cubic feet) to 9 Ton (532 cubic feet). They include both a top motor, capable of running at 1800 RPM and a bottom motor, capable of running at 1200 RPM. They provide a combination of cross blending and vertical blending.</p>
      </div>
    </div>
  </div>
</div>

<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>Options</h3>
    <h4>Materials</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <img src="/abrasive-resistant.webp" alt="Abrasive Resistant" />
        <b>Abrasive Resistant (AR)</b>
      </div>
      <div>
        <img src="/cor-ten.webp" alt="Cor-Ten" />
        <b>Cor-Ten</b>
      </div>
      <div>
        <img src="/painted-steel.webp" alt="Painted Steel" />
        <b>Painted Steel</b>
      </div>
      <div>
        <img src="/stainless.webp" alt="Stainless Steel" />
        <b>Stainless Steel</b>
      </div>
    </div>
  </div>
</div>


<SvelteSEO 
  title="{ mixers.title }"
  description="{ mixers.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'
  import { mixers } from '../../../seo.js'
</script>