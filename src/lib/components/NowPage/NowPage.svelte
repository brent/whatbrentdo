<script lang="ts">
  const updated = new Date(2024, 10 - 1, 2) // month is zero indexed

  const projects = [
    {
      title: 'learning piano',
      description: 'goal: 400 practice hours in 2024',
      url: '',
    },
    {
      title: 'maintaining bundle',
      description: 'a simple link-based list maker/sharer',
      url: 'https://bundleof.link',
    },
    {
      title: 'building a writing-related app',
      description:
        'transform excerpts from existing writing into prompts for new writing',
      url: '',
    },
    {
      title: 'writing Tales From Around The System',
      description: 'a (small) anthology of short stories',
      url: '',
    },
  ]

  const reading = {
    name: 'The Sunlit Man',
    author: 'Brandon Sanderson',
    authorUrl: 'https://www.dragonsteelbooks.com/',
    image: '/img/reading/sunlit-man-cover.jpg',
    url: '',
  }

  const playing = {
    name: "Baldur's Gate 3",
    platform: 'PlayStation 5',
    image: '/img/playing/baldurs-gate-3-cover.webp',
    url: '',
  }

  const watching = {
    name: 'The Wire',
    secondary: 'Season 3',
    image: '/img/watching/the-wire-cover.jpg',
    url: '',
  }
</script>

<div>
  <p class="updated">last updated: {updated.toLocaleDateString()}</p>

  <section class="doing">
    <h3>Doing</h3>
    <ul class="projects-list">
      {#each projects as project}
        <li class="project">
          {#if project.url}
            <a href={project.url}>
              <span class="project-name project-name__linked"
                >{project.title}</span
              >
              <span class="project-description">{project.description}</span>
            </a>
          {:else}
            <span class="project-name">{project.title}</span>
            <span class="project-description">{project.description}</span>
          {/if}
        </li>
      {/each}
    </ul>
  </section>

  <div class="media-grid">
    <section class="reading">
      <h3>Reading</h3>
      <ul>
        <li class="book">
          <img
            src={reading.image}
            alt={`${reading.name} book cover`}
            loading="lazy"
          />
          <p>
            {reading.name}
            <span class="author">
              by <a href={reading.authorUrl}>{reading.author}</a></span
            >
          </p>
        </li>
      </ul>
    </section>

    <section class="playing">
      <h3>Playing</h3>
      <ul>
        <li class="game">
          <img
            src={playing.image}
            alt={`${playing.name} cover image`}
            loading="lazy"
          />
          <p>
            {playing.name}
            <span class="game-platform">on {playing.platform}</span>
          </p>
        </li>
      </ul>
    </section>

    <section class="watching">
      <h3>Watching</h3>
      <ul>
        <li class="media">
          <img
            src={watching.image}
            alt={`${watching.name} cover image`}
            loading="lazy"
          />
          <p>
            {watching.name}{#if watching.secondary}
              <span class="watching-secondary">, {watching.secondary}</span>
            {/if}
          </p>
        </li>
      </ul>
    </section>
  </div>
</div>

<style>
  .updated {
    color: var(--color-text-body-medium);
    font-size: 0.875rem;
    font-style: italic;
    margin: -0.875rem 0 1rem;
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

  .projects-list {
    align-items: stretch;
    align-content: stretch;
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
  }

  .project {
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.033);
    flex: 1 0 calc(calc(37.5rem / 2) - calc(0.875rem + 0.5rem));
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

  .project-name,
  .project-description {
    display: block;
  }

  .project-name {
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
  }

  .project-description {
    color: var(--color-text-body-medium);
    font-size: 0.875rem;
  }

  .project-name__linked {
    text-decoration: underline;
  }

  .author,
  .game-platform,
  .watching-secondary {
    font-style: italic;
  }

  .media-grid img {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
  }

  @media (prefers-color-scheme: dark) {
    .project {
      background-color: rgba(255, 255, 255, 0.05);
      border-color: var(--color-ui-gray-900);
    }

    .project-description {
      color: var(--color-text-body-light);
    }
  }

  @media (min-width: 600px) {
    .book,
    .game,
    .media {
      font-size: 1rem;
    }
  }
</style>
