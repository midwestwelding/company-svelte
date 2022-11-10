<nav class="h-16 lg:h-20 w-screen bg-darkGray justify-center flex">
  <div class="container p-3 inline-block lg:hidden" on:click={handleNav}>
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
	</div>
  <ul class="w-full max-w-screen-lg items-center hidden lg:flex">
    <li class="inline-block h-full">
      <a href="/" class="inline-block h-5/6 pt-4">
        <img src="/logo-bw.webp" alt="Midwest Welding & Manufacturing Logo" class="h-full">
      </a>
    </li>
    <li class="flex-grow"></li>
    <li class="inline-block h-full text-white hover:text-opacity-70">
      <a href="/" class="h-full flex items-center px-3 text-xl">
        <span>Home</span>
      </a>
    </li>
    {#each menu_items as item}
    <li class="inline-block h-full text-white hover:text-opacity-70">
      <a href="{item.route}" class="h-full flex items-center px-3 text-xl">
        <span>{item.text}</span>
      </a>
    </li>
    {/each}
  </ul>
</nav>

<nav class="navigation" id="off-canvas-nav" class:open={navOpen}>
  <a href="#a" class="closebtn" on:click={handleNav}>&times;</a>
  <ul>
    <li><a href="/">Home</a></li>
    {#each menu_items as item}
    <li><a href="{item.route}">{item.text}</a></li>
    {/each}
  </ul>
</nav>

<div class="main_content">
  <slot></slot>
</div>

<footer class="w-screen bg-darkGray grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8">
  <div>
    <img src="/logo.webp" alt="MWM Logo" class="max-h-48 mx-auto" />
  </div>
  <div class="text-center md:text-left text-white mb-7">
    <h3>Midwest Welding & Manufacturing</h3>
    <p>202 Harrison Street</p>
    <p>P.O. Box 39</p>
    <p>Reeseville, WI 53579</p>
    <p>Phone: <a href="tel:(920) 927-3851">(920) 927-3851</a></p>
  </div>
  <div class="text-white text-center mb-7">
    <h3 class="text-center">Why Choose MWM</h3>
    <h4 class="text-center py-1">
      <a href="/products">Custom Fabrication</a>
    </h4>
    <h4 class="text-center py-1">
      <a href="/vendors">Industry Vendors</a>
    </h4>
    <h4 class="text-center py-1">
      <a href="/careers">Hiring Experts</a>
    </h4>
    <h4 class="text-center py-1">
      <a href="/services">75 Years of Service</a>
    </h4>
  </div>
  <div class="text-white text-center">
    <nav>
      <ul>
        {#each menu_items as item}
        <li><a href="{item.route}" class="py-2 text-base inline-block">{item.text}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>

<script>
  import "../styles/tailwind-output.css"

  const menu_items = [
    {text: 'About', route: '/about'},
    {text: 'Products', route: '/products'},
    {text: 'Services', route: '/services'},
    {text: 'Vendors', route: '/vendors'},
    {text: 'Contact', route: '/contact'}
  ]

  let navOpen = false

  function handleNav() {
    navOpen = !navOpen;
  }
  


</script>

<style>
  .bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.navigation {
  height: 100%; 
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.navigation a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.navigation .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.open {
	width: 40%;
}
</style>