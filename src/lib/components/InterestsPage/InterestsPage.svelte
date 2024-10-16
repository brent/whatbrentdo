<script lang="ts">
  import { shuffleArray } from '$lib/funcs'

  const interests = [
    { name: 'tech' },
    { name: 'Apple' },
    { name: 'iPhone' },
    { name: 'iPad' },
    { name: 'Google' },
    { name: 'web design' },
    { name: 'app design' },
    { name: 'programming' },
    { name: 'reading' },
    { name: 'movies' },
    { name: 'writing' },
    { name: 'architecture' },
    { name: 'astronomy' },
    { name: 'cosmology' },
    { name: 'interior design' },
    { name: 'JavaScript' },
    { name: 'Svelte' },
    { name: 'React' },
    { name: 'macOS' },
    { name: 'iOS' },
    { name: 'iPadOS' },
    { name: 'PlayStation' },
    { name: 'graphic novels' },
    { name: 'sci-fi' },
    { name: 'video games' },
    { name: 'cooking' },
    { name: 'Android' },
    { name: 'industrial design' },
    { name: 'drawing' },
    { name: 'photography' },
    { name: 'watches' },
    { name: 'mechanical keyboards' },
    { name: 'smartphones' },
    { name: 'augmented reality' },
    { name: 'mixed-reality' },
  ]
</script>

<ul>
  {#each shuffleArray(interests) as interest}
    <li>{interest.name}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    background: #ffffff10;
    display: inline-block;
    border-radius: 0.125rem;
    padding: 0.25rem 0.75rem;
    margin: 0 0.5rem 0.5rem 0;
  }

  li:last-of-type {
    margin: 0;
  }

  /*
  @media (prefers-color-scheme: dark) {
    li {
      background: #fff;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.033);
    }
  }
  */
</style>
