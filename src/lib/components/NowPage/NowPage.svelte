<script lang="ts">
  type NowEntry = {
    name: string
    image?: string
    url?: string
  }

  type ReadingEntry = NowEntry & {
    author: string
    authorUrl?: string
  }

  type PlayingEntry = NowEntry & {
    platform: string
  }

  type WatchingEntry = NowEntry & {
    secondary: string
  }

  type ProjectEntry = {
    title: string
    description: string
    url?: string
  }

  type Projects = ProjectEntry[]

  type Props = {
    updated: string
    projects: Projects
    playing: PlayingEntry
    reading: ReadingEntry
    watching: WatchingEntry
  }

  const { updated, projects, reading, playing, watching }: Props = $props()
  const updatedDate = new Date(Date.parse(updated))
</script>

<div>
  <p class="updated">last updated: {updatedDate.toLocaleDateString()}</p>

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
            src={reading.image
              ? reading.image
              : `/img/reading/placeholder-book.png`}
            alt={`${reading.name} book cover`}
            loading="lazy"
          />
          <p>
            {reading.name}
            <span class="author">
              by
              {#if reading.authorUrl}
                <a href={reading.authorUrl}>{reading.author}</a>
              {:else}
                {reading.author}
              {/if}
            </span>
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
          {#if playing.name || playing.platform}
            <p>
              {playing.name}
              <span class="game-platform">on {playing.platform}</span>
            </p>
          {:else}
            <p>Nothing</p>
          {/if}
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

  .doing,
  .media-grid {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
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
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.125rem;
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
    font-style: italic;
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
    font-style: normal;
  }

  .media-grid img {
    border-radius: 0.125rem;
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
  }

  /*
  @media (prefers-color-scheme: light) {
    .project {
      background: #fff;
    }

    .project-description {
      color: var(--color-text-body-light);
    }
  }
  */

  @media (min-width: 600px) {
    .book,
    .game,
    .media {
      font-size: 1rem;
    }

    .media-grid {
      gap: 1rem;
    }

    .projects-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
