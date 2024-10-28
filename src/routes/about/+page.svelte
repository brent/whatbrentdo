<script lang="ts">
  import { default as About } from '$lib/components/AboutPage'
  const { data } = $props()
  const { jobs, projects, wbs } = data
</script>

<About {jobs} {projects} {wbs} />

<style>
</style>
