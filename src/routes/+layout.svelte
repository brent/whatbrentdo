<script lang="ts">
  import Header from '$lib/components/Header'
  import Footer from '$lib/components/Footer'
  import type { Snippet } from 'svelte'
  import posthog from 'posthog-js'
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  type Props = { children: Snippet }
  const { children }: Props = $props()

  onMount(() => {
    if (browser) {
      posthog.init(
        'phc_IAjkQ3XlrzuDXFWcQAa07bs8kiz8SC9w3BvnDMqNPeO',
        {
          api_host: 'https://us.i.posthog.com',
          person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
        }
      )
    }
  })
</script>

<div class="wrapper">
  <Header />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .wrapper {
    min-height: 100%;
    max-width: 37rem;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
</style>
