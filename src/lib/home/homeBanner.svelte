<div class="w-screen home_banner">
  <div class="w-full py-12 lg:py-24">
    <div class="bg-blue-transparent py-8 flex justify-center flex-col">
      <h1 class="text-white font-extrabold uppercase text-shadow text-center pb-2 mb-5">Midwest Welding & Manufacturing</h1>
      <h2 class="text-white font-extrabold uppercase text-shadow text-center pb-2 mb-14">Repairing Your Past...Fabricating Your Future</h2>
      <div class="text-center">
        <a href="/contact" class="inline-block mt-3 rounded bg-white py-3 px-5 text-xl hover:text-white hover:bg-transparent border-solid border-2 border-white">Tell Us About Your Project</a>
      </div>
    </div>
    <div class="mt-7 w-full max-w-ninety lg:max-w-screen-lg mx-auto">
      <hr class="text-white" />
      <div class="grid lg:grid-cols-3 gap-4 mt-5">
        {#each FeaturedServices as service}
          <a href="{service.link}">
            <div class="text-white bg-red-transparent bg-opacity-70 p-5 mt-0 lg:mt-5">
              <h3 class="text-">{ service.title }</h3>
              <p class="leading-relaxed">{ service.content }</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .home_banner {
    background-image: url('/home_banner.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<script>
  const FeaturedServices = [
    {
      title: 'Field Service',
      content: 'Whether a difficult repair or equipment installation, our teams are ready for the job.',
      link: '/services/road'
    },
    {
      title: 'Shop Services',
      content: 'Tools and Fabrication ready to accomplish simple or complex jobs.',
      link: '/services/'
    },
    {
      title: 'Feed Body Services',
      content: 'Our custom made-to-order Bulk Feed Body Trucks or Semis are perfectly engineered.',
      link: '/products/feed-bodies'
    }
  ]

</script>