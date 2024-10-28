<script lang="ts">
  import UsesPage from '$lib/components/UsesPage'
  const { data } = $props()
  const { hardware, software } = data
</script>

<UsesPage {hardware} {software} />

<style>
</style>
