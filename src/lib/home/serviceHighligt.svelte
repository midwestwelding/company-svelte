<div class="w-screen bg-blue px-8 pb-12 lg:pb-24 relative">
  <div style="background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwYTBhMGEiPjxwYXRoIGQ9Ik0xMDkzLjQ4IDEzMS44NUwxNzMgOTRhNzYuODUgNzYuODUgMCAwIDEtMzYuNzktMTEuNDZMMCAwaDEyODBsLTEzMS44MSAxMTEuNjhjLTE2LjQ3IDEzLjk2LTM1LjQ3IDIwLjk2LTU0LjcxIDIwLjE3eiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMDk0LjQ0IDExOUwxNzIuNyA2OC43MmE3NC41NCA3NC41NCAwIDAgMS0yNS4xOS01Ljk1TDAgMGgxMjgwbC0xMzMuODUgMTAyYy0xNS44NCAxMi4wOS0zMy43IDE3Ljk1LTUxLjcxIDE3eiIvPjwvZz48L3N2Zz4=); top: 0; height:100px; z-index: 1; background-size: 100% 100px; margin-top: -1px;"></div>
  <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-white">
    {#each services as service}
    <a href="{service.link}" class="text-center inline-block">
      <img src="{service.image}" alt="" class="mx-auto filter grayscale hover:grayscale-0 max-w-ninety"/>
      <h4 class="text-2xl">{ service.title }</h4>
      <p>{ service.content }</p>
    </a>
    {/each}
  </div>
</div>

<script>
  const services = [
    {
      title: 'Custom Fabrication',
      content: 'We make custom stuff, and we fabricate it. Thus why we call this custom fabrication.',
      image: '/service-fabrication.webp',
      link: '/products'
    },
    {
      title: 'Industry Vendors',
      content: 'We work with many of the commerical retailers. Availability and Savings we can pass on to you.',
      image: '/service-vendors.webp',
      link: '/vendors'
    },
    {
      title: 'Hiring Experts',
      content: 'Looking for a job? We are looking fo motivated, skilled and safe-minded industry leaders',
      image: '/service-experts.webp',
      link: '/careers'
    },
    {
      title: '75 Years of Service',
      content: 'Started at the Jakel Co., then MGRF. Name has changed, reliable service has not.',
      image: '/service-75years.webp',
      link: '/services'
    }
  ]

</script>
