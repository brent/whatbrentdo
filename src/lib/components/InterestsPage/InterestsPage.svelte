<script lang="ts">
  type Interest = {
    name: string
  }

  type Props = {
    interests: Interest[]
  }

  const { interests }: Props = $props()
</script>

<ul>
  {#each interests as interest}
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
