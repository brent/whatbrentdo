<script lang="ts">
  import type { Snippet } from 'svelte'

  type Props = { children: Snippet }
  const { children }: Props = $props()

  let isChildVisible = $state(false)

  function handleClick() {
    isChildVisible = true
  }
</script>

<span>
  {#if !isChildVisible}
    <button onclick={handleClick}>more</button>
  {:else}
    {' '}{@render children()}
  {/if}
</span>

<style>
  button::before {
    background: url('/plus-btn.svg') no-repeat;
    background-size: cover;
    content: '';
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    position: relative;
    top: 0.125rem;
    margin-right: 0.125rem;
  }

  button {
    background-color: var(--color-brand-primary);
    border: none;
    border-radius: 1rem;
    color: var(--color-brand-white);
    font-size: 0.875rem;
    margin-left: 0.25rem;
    padding: 0.1875rem 0.5rem;
    position: relative;
    top: -3px;
  }

  @media (prefers-color-scheme: dark) {
  }
</style>
