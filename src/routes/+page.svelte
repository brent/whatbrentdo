<script lang="ts">
  import { default as About } from '$lib/components/AboutPage'
  import { default as Now } from '$lib/components/NowPage'
  import { default as Interests } from '$lib/components/InterestsPage'
  import { default as Uses } from '$lib/components/UsesPage'
  import { default as Colophon } from '$lib/components/ColophonPage'

  const { data } = $props()
  const { about, now, interests, uses } = data

  const pages = [
    { name: 'about', url: '/about', component: About, data: about },
    { name: 'now', url: '/now', component: Now, data: now },
    {
      name: 'interests',
      url: '/interests',
      component: Interests,
      data: { interests },
    },
    { name: 'uses', url: '/uses', component: Uses, data: uses },
    { name: 'colophon', url: '/colophon', component: Colophon },
  ]
</script>

{#each pages as page}
  <section id={`${page.name}`}>
    <h2><a href={page.url}>{page.url}</a></h2>
    <page.component {...page.data} />
  </section>
{/each}

<style>
  section {
    margin-bottom: 5rem;
  }

  section:last-of-type {
    margin-bottom: 0;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
</style>
