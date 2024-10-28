<script lang="ts">
  import AboutPage from '$lib/components/AboutPage'
  const { data } = $props()
  const { jobs, projects, wbs } = data
</script>

<AboutPage {jobs} {projects} {wbs} />

<style>
</style>
