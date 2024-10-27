<script lang="ts">
  import { shuffleArray } from '$lib/funcs'

  type UsesItem = {
    name: string
    imgUrl: string
    category?: string
    status?: string
  }

  const hardware: UsesItem[] = [
    {
      name: 'iPhone 16 Pro',
      category: 'phone',
      status: 'new',
      imgUrl: 'img/hardware/iphone-16-pro.jpg',
    },
    {
      name: '16" MacBook Pro',
      category: 'laptop',
      status: '',
      imgUrl: 'img/hardware/mbp16-m2.jpg',
    },
    {
      name: '13" iPad Pro',
      category: 'tablet',
      status: 'new',
      imgUrl: 'img/hardware/ipad-pro-13.jpg',
    },
    {
      name: 'Kindle Paperwhite',
      category: 'e-reader',
      status: '',
      imgUrl: 'img/hardware/kindle-paperwhite.webp',
    },
    {
      name: 'AirPods Pro 2',
      category: 'earbuds',
      status: '',
      imgUrl: 'img/hardware/airpods-pro-2.jpg',
    },
    {
      name: 'LG C1',
      category: 'tv',
      status: '',
      imgUrl: 'img/hardware/lg-c1.jpg',
    },
    {
      name: 'Pixel 4a',
      category: 'phone',
      status: '',
      imgUrl: 'img/hardware/pixel-4a.jpg',
    },
    {
      name: 'Keychron K6',
      category: 'keyboard',
      status: '',
      imgUrl: 'img/hardware/keychron-k6.jpg',
    },
    {
      name: 'PlayStation 5',
      category: 'video games',
      status: '',
      imgUrl: 'img/hardware/playstation-5.jpg',
    },
    {
      name: 'Dell P2715Q',
      category: 'monitor',
      status: '',
      imgUrl: 'img/hardware/dell-p2715q.jpg',
    },
    {
      name: 'Dell UltraSharp U2720Q',
      category: 'monitor',
      status: '',
      imgUrl: 'img/hardware/dell-u2720q.jpg',
    },
    {
      name: 'Apple Watch',
      category: 'wearable',
      status: '',
      imgUrl: 'img/hardware/apple-watch-s4.jpg',
    },
    {
      name: 'Meta Ray-Ban Wayfarer',
      category: 'wearable',
      status: '',
      imgUrl: 'img/hardware/meta-ray-ban-wayfarer.jpg',
    },
    {
      name: 'Sony WH1000XM3',
      category: 'headphones',
      status: '',
      imgUrl: 'img/hardware/sony-wh1000xm3.jpg',
    },
    {
      name: 'Synology DS212j',
      category: 'nas',
      status: '',
      imgUrl: 'img/hardware/synology-ds212j.jpg',
    },
  ]

  const software: UsesItem[] = [
    {
      name: 'Obsidian',
      category: 'note-taking',
      status: '',
      imgUrl: 'img/software/obsidian-icon.png',
    },
    {
      name: 'Reader',
      category: 'rss',
      status: '',
      imgUrl: 'img/software/reader-icon.png',
    },
    {
      name: 'iTerm',
      category: 'terminal',
      status: '',
      imgUrl: 'img/software/iterm-icon.png',
    },
    {
      name: 'Arc',
      category: 'browser',
      status: '',
      imgUrl: 'img/software/arc-icon.png',
    },
    {
      name: 'Copilot',
      category: 'finance',
      status: '',
      imgUrl: 'img/software/copilot-icon.png',
    },
    {
      name: 'Figma',
      category: 'design',
      status: '',
      imgUrl: 'img/software/figma-icon.png',
    },
    {
      name: 'Slack',
      category: 'communication',
      status: '',
      imgUrl: 'img/software/slack-icon.png',
    },
    {
      name: 'Soulver',
      category: 'calculator',
      status: '',
      imgUrl: 'img/software/soulver-icon.png',
    },
    {
      name: 'Bartender',
      category: 'utility',
      status: '',
      imgUrl: 'img/software/bartender-icon.png',
    },
    {
      name: '1Password',
      category: 'utility',
      status: '',
      imgUrl: 'img/software/1password-icon.png',
    },
    {
      name: 'Hazel',
      category: 'utility',
      status: '',
      imgUrl: 'img/software/hazel-icon.png',
    },
    {
      name: 'Magnet',
      category: 'utility',
      status: '',
      imgUrl: 'img/software/magnet-icon.png',
    },
    {
      name: 'Homerow',
      category: 'utility',
      status: '',
      imgUrl: 'img/software/homerow-icon.png',
    },
    {
      name: 'Raycast',
      category: 'utility',
      status: '',
      imgUrl: 'img/software/raycast-icon.png',
    },
  ]
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
