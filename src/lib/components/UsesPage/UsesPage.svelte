<script lang="ts">
  type UsesItem = {
    name: string
    imgUrl: string
    category?: string
    status?: string
  }

  type Props = {
    hardware: UsesItem[]
    software: UsesItem[]
  }

  const { hardware, software }: Props = $props()
</script>

{#snippet usesSection(data: UsesItem[])}
  <div class="grid-wrapper">
    <ul class="uses-list uses-grid">
      {#each data as { name, imgUrl, status }}
        <li class="uses-card">
          <img
            class="uses-image"
            src={imgUrl}
            alt={`product shot of ${name}`}
          />
          <p class="uses-item-name">{name}</p>
          {#if status}
            <p class={`badge badge-${status}`}>{status}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

<section>
  <section class="uses-section uses-hardware">
    <h3 class="uses-heading">Hardware</h3>
    {@render usesSection(hardware)}
  </section>

  <section class="uses-section uses-software">
    <h3 class="uses-heading">Software</h3>
    {@render usesSection(software)}
  </section>
</section>

<style>
  h3.uses-heading {
    font-size: 1.25rem;
  }

  .uses-section {
    margin-bottom: 1.5rem;
  }

  .grid-wrapper {
    overflow: scroll;
    min-width: 100%;
    padding: 1rem 0 1rem 1rem;
    transform: translateX(-1rem);
    width: calc(100% + 2rem);
  }

  .uses-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .uses-grid {
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, max-content);
    width: fit-content;
    padding-right: 1rem;
  }

  .uses-card {
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.125rem;
    font-size: 0.875rem;
    padding: 0.5rem;
  }

  .uses-image {
    border-radius: 0.0675rem;
    object-fit: cover;
    height: auto;
    margin-bottom: 0.25rem;
  }

  .uses-hardware :global(.uses-image) {
    width: 8rem;
  }

  .uses-software :global(.uses-image) {
    width: 5rem;
  }

  .uses-card:last-of-type {
    margin-bottom: 0;
  }

  .uses-item-name + .badge {
    margin-top: 0.25rem;
  }

  .badge {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.8);
    display: inline-block;
    padding: 0.0625rem 0.375rem 0.1875rem;
    border-radius: 0.125rem;
  }

  .badge-new {
    background: green;
    color: rgba(255, 255, 255, 0.8);
  }

  .badge-old {
    background: orange;
  }

  /*
  @media (prefers-color-scheme: light) {
    .uses-card {
      background-color: #fff;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.05);
    }
  }
  */

  @media (min-width: 600px) {
    .grid-wrapper {
      overflow: initial;
      width: 100%;
      padding: 1rem 0 1rem;
      transform: none;
      width: 100%;
    }

    .uses-grid {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5rem;
      width: 100%;
      margin: 0;
    }

    .uses-hardware :global(.uses-card) {
      max-width: calc(calc(100% / 4) - 0.375rem);
    }

    .uses-hardware :global(.uses-image),
    .uses-software :global(.uses-image) {
      width: 100%;
    }

    .uses-software :global(.uses-card) {
      max-width: calc(calc(100% / 6) - 0.4375rem);
    }
  }
</style>
