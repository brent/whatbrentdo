<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import { default as About } from '$lib/components/AboutPage'
  import { default as Now } from '$lib/components/NowPage'
  import { default as Interests } from '$lib/components/InterestsPage'
  import { default as Defaults } from '$lib/components/DefaultsPage'
  import { default as Uses } from '$lib/components/UsesPage'
  import { default as Colophon } from '$lib/components/ColophonPage'
  import { default as Changelog } from '$lib/components/ChangelogPage'

  const pages = [
    { name: 'about', url: '/about', component: About },
    { name: 'now', url: '/now', component: Now },
    { name: 'interests', url: '/interests', component: Interests },
    { name: 'defaults', url: '/defaults', component: Defaults },
    { name: 'uses', url: '/uses', component: Uses },
    { name: 'changelog', url: '/changelog', component: Changelog },
    { name: 'colophon', url: '/colophon', component: Colophon },
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
