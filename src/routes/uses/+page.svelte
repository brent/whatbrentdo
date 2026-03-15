<script lang="ts">
  import UsesPage from '$lib/components/UsesPage'
  import PageHeading from '$lib/components/PageHeading'
  const { data } = $props()
  const { hardware, software } = data
</script>

<PageHeading />
<UsesPage {hardware} {software} />
