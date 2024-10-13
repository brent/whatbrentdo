<script lang="ts">
  import Header from '$lib/components/Header'
  import Footer from '$lib/components/Footer'
  import type { Snippet } from 'svelte'

  type Props = { children: Snippet }
  const { children }: Props = $props()
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
