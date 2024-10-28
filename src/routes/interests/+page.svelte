<script lang="ts">
  import InterestsPage from '$lib/components/InterestsPage'
  const { data }: { data: { interests: { name: string }[] } } = $props()
  const { interests } = data
</script>

<InterestsPage {interests} />

<style>
</style>
