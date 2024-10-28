<script lang="ts">
  import { default as Now } from '$lib/components/NowPage'
  const { data } = $props()
  const { updated, projects, reading, playing, watching } = data
</script>

<Now {updated} {projects} {reading} {playing} {watching} />

<style>
</style>
