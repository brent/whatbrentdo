<script lang="ts">
  const updated = new Date(2024, 8, 27) // month is zero indexed

  const projects = [
    {
      name: 'learning piano',
      description: '250+ hours played this year',
      url: '',
    },
    {
      name: 'bundle',
      description: 'maintaining my simple link-based list maker/sharer',
      url: 'https://bundleof.link',
    },
    {
      name: 'a writing app',
      description:
        'what if writing prompts were excerpts from existing writing?',
      url: '',
    },
    {
      name: 'Tales From Around The System',
      description: 'a small anthology of short stories from a shared world',
      url: '',
    },
  ]

  const reading = {
    name: 'Yumi and the Nightmare Painter',
    author: 'Brandon Sanderson',
    authorUrl: 'https://www.dragonsteelbooks.com/',
    image: '/img/reading/yumi-and-the-nightmare-painter-cover.jpg',
    url: '',
  }

  const playing = [
    {
      name: "Baldur's Gate 3",
      platform: 'PlayStation 5',
      image: '/img/playing/baldurs-gate-3-cover.webp',
      url: '',
    },
    {
      name: 'Hogwarts Legacy',
      platform: 'PlayStation 5',
      image: '/img/playing/hogwarts-legacy-cover.jpg',
      url: '',
    },
  ]

  const watching = [
    {
      name: 'The Wire',
      image: '/img/watching/the-wire-cover.jpg',
      url: '',
    },
  ]
</script>

<div>
  <p class="updated">last updated: {updated.toDateString()}</p>

  <section class="doing">
    <h3>Doing</h3>
    <ul>
      {#each projects as project}
        <li class="project">
          {#if project.url}
            <a href={project.url}>
              <span class="project-name project-name__linked"
                >{project.name}</span
              >
              <span class="project-description">{project.description}</span>
            </a>
          {:else}
            <span class="project-name">{project.name}</span>
            <span class="project-description">{project.description}</span>
          {/if}
        </li>
      {/each}
    </ul>
  </section>

  <section class="reading">
    <h3>Reading</h3>
    <ul class="media-grid">
      <li class="book">
        <span class="book-cover">
          <img src={reading.image} alt={`${reading.name} book cover`} />
        </span>
        {reading.name}
        <span class="author">
          by <a href={reading.authorUrl}>{reading.author}</a></span
        >
      </li>
    </ul>
  </section>

  <section class="playing">
    <h3>Playing</h3>
    <ul class="media-grid">
      {#each playing as game}
        <li class="game">
          <img src={game.image} alt={`${game.name} cover image`} />
          <p>
            {game.name} <span class="game-platform">on {game.platform}</span>
          </p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="watching">
    <h3>Watching</h3>
    <ul class="media-grid">
      {#each watching as media}
        <li class="media">
          <img src={media.image} alt={`${media.name} cover image`} />
          <p>{media.name}</p>
        </li>
      {/each}
    </ul>
  </section>
</div>

<style>
  .updated {
    color: var(--color-text-body-medium);
    font-size: 0.875rem;
    margin: -0.875rem 0 2rem;
  }

  section {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.375rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  .project {
    border: 0.0625rem solid var(--color-ui-gray-300);
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }

  .project:last-of-type {
    margin-bottom: 0;
  }

  .project a {
    text-decoration: none;
  }

  .media-grid {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .book,
  .game,
  .media {
    font-size: 0.875rem;
  }

  .book-cover,
  .project-name,
  .project-description {
    display: block;
  }

  .project-name {
    margin-bottom: 0.25rem;
  }

  .project-description {
    color: var(--color-text-body-medium);
  }

  .project-name__linked {
    text-decoration: underline;
  }

  .author {
    font-style: italic;
  }

  .media-grid img {
    width: 100%;
  }

  .game-platform {
    font-style: italic;
  }

  @media (prefers-color-scheme: dark) {
    .project {
      border-color: var(--color-ui-gray-900);
    }
  }
</style>
