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
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;1,400&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    min-height: 100%;
  }

  html {
    background: #fafafa;
    color: #222;
  }

  body {
    padding: 1rem;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
  }

  .wrapper {
    min-height: 100%;
    max-width: 37rem;
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  main {
    margin-top: 6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  dt,
  dd {
    margin: 0;
  }

  a {
    color: #a168ab;
    text-decoration-color: #a168ab80;
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.125rem;
  }
  h5 {
    font-size: 0.875rem;
  }
  h6 {
    font-size: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    html {
      background: #1e2529;
      color: #ddd;
    }

    a {
      color: #c586d0;
    }
  }
</style>
