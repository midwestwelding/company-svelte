
<HomeBanner />
<QuickContact />
<ServiceHighlights />
<ServiceRegions />

<SvelteSEO 
title="{ home.title}"
description="{ home.description }"
></SvelteSEO>

<script context="module">
  export const prerender = true
</script>
<script>
  import HomeBanner from '$lib/home/homeBanner.svelte'
  import QuickContact from '$lib/home/homeQuickContact.svelte'
  import ServiceHighlights from '$lib/home/serviceHighligt.svelte'
  import ServiceRegions from '$lib/home/serviceRegions.svelte'
  import SvelteSEO from 'svelte-seo'

  import { home } from '../seo.js'
</script>
