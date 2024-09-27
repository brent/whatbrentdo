<script lang='ts'>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import type { Snippet } from 'svelte'

  type Props = { children: Snippet }
  const { children } : Props = $props()
</script>

<div class='wrapper'>
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

  main {
    margin-top: 6rem;
  }
</style>