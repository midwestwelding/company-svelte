<div class="w-screen bg-black flex justify-center pt-8 lg:pt-8">
  <div class=" w-full max-w-ninety lg:max-w-screen-lg">
    <h3 class="text-white text-4xl font-semibold">Quick Contact</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {#each contacts as contact}
      <div class="p-4 text-blue bg-gray-400 bg-center bg-cover" style="background-image: url(/bg_al.webp)">
        <h4 class="text-3xl font-semibold text-shadow">{ contact.title }</h4>
        <p class="text-xl font-bold text-shadow">{ contact.contact }</p>
        <p class="text-xl">
          <a class="inline-block font-bold py-2 text-shadow" rel="external" href="tel:{contact.phone}">
            <img src="/phone-solid.svg" alt="call" class="w-5 inline-block">
            {contact.phone}
          </a>
        </p>
        <p class="text-xl">
          <a class="inline-block font-bold py-2 text-shadow" rel="external" href="mailto:{contact.email}">
            <img src="/envelope-solid.svg" alt="email" class="text-xs w-5 inline-block">
            {contact.email}
          </a>
        </p>
      </div>
      {/each}
    </div>
  </div>
</div>

<script>
  const contacts = [
    {
      title: 'Parts Dept',
      contact: 'Ryan Goodhue',
      phone: '920-927-3851',
      email: 'rgoodhue@mgrf.com'
    },
    {
      title: 'Shop Dept',
      contact: 'Ryan Goodhue',
      phone: '920-927-3854',
      email: 'rgoodhue@mgrf.com'
    },
    {
      title: 'Road Dept',
      contact: 'Zoom Neuman',
      phone: '920-988-9446',
      email: 'zneuman@mgrf.com'
    }
  ]
</script>