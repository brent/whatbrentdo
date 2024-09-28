<script lang="ts">
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

  const shuffleInterests = () => {
    return interests
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }
</script>

<ul>
  {#each shuffleInterests() as interest}
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
    display: inline-block;
    background: #00000009;
    border-radius: 0.125rem;
    padding: 0.25rem 0.75rem;
    margin: 0 0.5rem 0.5rem 0;
  }

  li:last-of-type {
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    li {
      background: #ffffff10;
    }
  }
</style>
