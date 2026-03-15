<script lang="ts">
  import AboutPage from '$lib/components/AboutPage'
  import PageHeading from '$lib/components/PageHeading'
  const { data } = $props()
  const { jobs, projects, wbs } = data
</script>

<PageHeading />
<AboutPage {jobs} {projects} {wbs} />
