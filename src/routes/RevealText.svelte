<script lang='ts'>
  import type { Snippet } from 'svelte'

  type Props = { children: Snippet }
  const { children } : Props = $props()

  let isChildVisible = $state(false)

  function handleClick() {
    isChildVisible = true
  }

</script>

<span>
  {#if !isChildVisible}
    <button onclick={handleClick}>more</button>
  {:else}
    {@render children()}
  {/if}
</span>

<style>
  button {
    background: url('/plus-btn.svg') no-repeat;
    background-size: contain;
    border: none;
    margin-left: 0.25rem;
    position: relative;
    text-indent: -9999px;
    top: -3px;
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
  }
</style>