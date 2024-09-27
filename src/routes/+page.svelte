<script lang="ts">
  import { default as About } from '$lib/components/AboutPage'

  const pages = [
    {
      name: 'about',
      url: '/about',
      component: About,
    },
  ]
</script>

<div>
  {#each pages as page}
    <section id={`${page.name}`}>
      <h2><a href={page.url}>{page.url}</a></h2>
      <svelte:component this={page.component} />
    </section>
  {/each}
</div>

<style>
  section {
    margin-bottom: 2rem;
  }

  section:last-of-type {
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
</style>
