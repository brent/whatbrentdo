<script lang="ts">
  import NowPage from '$lib/components/NowPage'
  import PageHeading from '$lib/components/PageHeading'
  const { data } = $props()
  const { updated, projects, reading, playing, watching } = data
</script>

<PageHeading />
<NowPage {updated} {projects} {reading} {playing} {watching} />
