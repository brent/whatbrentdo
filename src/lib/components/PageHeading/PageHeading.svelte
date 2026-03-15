<script lang="ts">
  import { page } from '$app/stores'
</script>

<h2>{$page.url.pathname.slice(0, -1)}</h2>

<style>
  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 1rem;
    color: var(--color-brand-primary-dark-mode);
  }
</style>
