<FeaturedImage imageUrl="'/products/featured-products.webp'" pageName="Products" pageTagline="Custom-made for every need" imagePosition="center"></FeaturedImage>

<div class="w-screen my-8 flex justify-center">
  <div class="w-full max-w-ninety">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
      {#each products as product}
        <div class="hover:opacity-70">
          <a href="{ product.link }" class="block">
            <div class="mt-8 py-20 bg-blue text-white bg-center bg-no-repeat bg-cover" style="background-image: url({ product.image })">
              <h3 class="pl-5 text-4xl">{ product.title }</h3>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>


<SvelteSEO 
  title="{ productsSeo.title }"
  description="{ productsSeo.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import FeaturedImage from '$lib/featuredImage.svelte'
  import SvelteSEO from 'svelte-seo'

  import { products as productsSeo } from '../../seo.js'

  const products = [
    {
      title: 'Feed Bodies',
      link: '/products/feed-bodies',
      image: '/products/products-feed-body.webp',
    },
    {
      title: 'Conveyors',
      link: '/products/conveyors',
      image: '/products/products-conveyors.webp',
    },
    {
      title: 'Distributors',
      link: '/products/distributors',
      image: '/products/products-distributors.webp',
    },
    {
      title: 'Elevator Legs',
      link: '/products/elevators',
      image: '/products/products-elevators.webp',
    },
    {
      title: 'Mixers',
      link: '/products/mixers',
      image: '/products/products-mixers.webp',
    },
    {
      title: 'Catwalks/Manwalks',
      link: '/products/catwalks',
      image: '/products/products-catwalks.webp',
    },
    // {
    //   title: 'Towers',
    //   link: '',
    //   content: '',
    //   image: '',
    // },
    // {
    //   title: 'Two Ways',
    //   link: '',
    //   content: '',
    //   image: '',
    // },
  ]

</script>