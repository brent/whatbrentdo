<script lang="ts">
  import InterestsPage from '$lib/components/InterestsPage'
  import PageHeading from '$lib/components/PageHeading'
  const { data }: { data: { interests: { name: string }[] } } = $props()
  const { interests } = data
</script>

<PageHeading />
<InterestsPage {interests} />
