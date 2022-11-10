<FeaturedImage imageUrl="'/featured-about.webp'" pageName="ABOUT MWM" pageTagline="History Rooted in Quality" imagePosition="top"></FeaturedImage>

<!-- History -->
<div class="w-screen flex justify-center">
  <div class="w-full max-w-ninety lg:max-w-screen-lg py-8">
    <h3>History</h3>
    <p class="my-4">MWM (Midwest Welding & Manufacturing), formerly both Jakel Company (1945 - 2003) and MGRF (Midwest General Repair & Fabrication 2003 - 2021), has been a family owned and operated business since 1945. </p>
    <p class="my-4">Started, in small town Reeseville Wisconsin, as a welding, repair, and blacksmith shop, the Jakel Company ventured in plumbing & heating in the early 1950s, and as a supplier and installer of feed mill equipment in the late 1950s. It was in the 1960s that the Jakel brand of feed and grain equipment was developed and retailed, and in 1969 the first Jakel Bulk Feed body truck was sold. During the 1970s the Jakel company also offered small engine building and repair and manufacturing of snowmobiles, but the primary focus remained with the fabrication, install and repair of feed & grain equipment.</p>
    <p class="my-4">In 2003 the Jakel family sold the business to Jon Schrock, a former employee, who changed the name to Midwest General Repair & Fabrication. Will Schrock, Jon’s son, now works alongside his father and members of the Jakel family continue to fill key roles at MWM today. Jon, in 2016, began to turn over the company to Jacob “Zoom” Neuman, grandson to the Jakel Company founders, and energetic leader in the industry. Zoom has more than a dozen years of experience in the service, manufacturing, and installation of feed and grain equipment.</p>
    <p class="my-4">MWM has continued to focus most of their efforts into honing skills and expertise in the area of equipment design, fabrication, and repair of feed and grain equipment. However, MWM has led many custom equipment design, repair, & fabrication projects in various fields such as Feed Mills, Ethanol Plants, Milk Replacer Facilities, Egg Production Sites, Concrete Mixing Plants, a Drywall Mixing Plant, Fertilizer Plants, Conveyors & Equipment for a State-owned Power Plant, Milorganite Bagging Plant, Carbon Bagging Facility and continues to reach into new scenes.</p>
    <p class="my-4">Many of our customers have experienced decades of both service and loyalty and we look forward to adding you to our family of satisfied customers.</p>

    <div class="grid grid-cols-3 gap-4">
      <img src="/jakel_logo.webp" alt="Jakel Co Logo" class="max-w-ninety mx-auto" />
      <img src="/mgrf_logo.webp" alt="MGRF Logo" class="max-w-ninety mx-auto" />
      <img src="/logo.webp" alt="MWM Logo" class="max-w-ninety mx-auto" />
    </div>
  </div>
</div>

<SvelteSEO 
  title="{ about.title }"
  description="{ about.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'

  import { about } from '../../seo.js'
</script>