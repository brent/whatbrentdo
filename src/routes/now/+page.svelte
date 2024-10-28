<script lang="ts">
  import NowPage from '$lib/components/NowPage'
  const { data } = $props()
  const { updated, projects, reading, playing, watching } = data
</script>

<NowPage {updated} {projects} {reading} {playing} {watching} />

<style>
</style>
