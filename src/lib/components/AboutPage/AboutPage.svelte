<script lang="ts">
  import RevealText from '$lib/components/RevealText'
  const { jobs: jobsData, projects: projectsData, wbs: wbsData } = $props()
</script>

{#snippet job(jobsData)}
  <span class="experience">
    {#each jobsData as job}
      <span class="job">
        {#if job.company}<span class="company">{job.company}</span>{/if}
        <span class="role">{job.role}</span>
        <span class="years"
          >{job.years.start}
          {#if job.years.end}
            &ndash; {job.years.end}{/if}</span
        >
      </span>
    {/each}
  </span>
{/snippet}

{#snippet sideProjects(projectsData)}
  <span class="sideProjects">
    {#each projectsData as project}
      <span class="project">
        <span class="name"
          ><a href={project.url} target="_blank">{project.name} </a></span
        >
        <span class="description">{project.description}</span>
      </span>
    {/each}
  </span>
{/snippet}

{#snippet wbs(wbsData)}
  <span class="wbs project">
    <span class="name"
      ><a href={wbsData.url} target="_blank">{wbsData.name}</a></span
    >
    <span class="description">{wbsData.description}</span>
    <span class="features">
      {#each wbsData.features as feature}
        <span class="featureName"
          ><a href={feature.url} target="_blank">{feature.name}</a></span
        >
      {/each}
    </span>
  </span>
{/snippet}

<section>
  <p class="hi">Hi, I'm Brent</p>

  <p>
    I'm a <strong>Digital Product Designer</strong> who is just as comfortable
    in Vim as Figma.<RevealText>
      I've also been a Product Design Manager, User Experience Designer, User
      Interface Designer, Front-end Developer, and even Conversational UX
      Designer.</RevealText
    >
  </p>
  <p>
    I'm working at Spanx where I'm <strong>Lead Digital Product Designer</strong
    >.<RevealText>
      My team is responsible for all UX and UI design for the site. We support
      feature development work and ecommerce initiatives while improving
      usability and expressing our brand.</RevealText
    >
  </p>

  <p>
    <strong
      >Since 2010, I’ve worked for, with, at, and around tech companies</strong
    >
    in the NYC area.<RevealText
      >{@render job(jobsData)} I have a lot of experience with start-ups and early
      stage companies.</RevealText
    >
  </p>

  <p>
    I love making digital products.<RevealText
      >I've got a few I'm working on for fun: {@render sideProjects(
        projectsData,
      )}As well as a blog that doesn't have a schedule: {@render wbs(
        wbsData,
      )}</RevealText
    >
  </p>
</section>

<style>
  p.hi {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    hyphens: auto;
  }

  p,
  span {
    line-height: 1.25;
  }

  .experience,
  .experience span,
  .sideProjects,
  .sideProjects > span,
  .project > span,
  .wbs,
  .features,
  .featureName {
    display: block;
  }

  .experience,
  .sideProjects,
  .wbs {
    margin-top: 1rem;
    margin-left: 0.25rem;
  }

  .job,
  .project {
    border-left: 0.1875rem solid #937e97;
    margin-bottom: 2rem;
    padding-left: 1.25rem;
  }

  .job > .company,
  .job > .years,
  .project > .description {
    font-size: 1.125rem;
  }

  .job > .company {
    font-style: italic;
  }

  .job > .role,
  .project > .name {
    font-size: 1.375rem;
  }

  .job > .role {
    font-weight: 600;
  }

  .project > .name,
  .wbs .name {
    margin-bottom: 0.125rem;
  }

  .project > .description {
    line-height: 1.25;
  }

  .features {
    margin-top: 0.375rem;
  }

  .featureName {
    font-size: 1.125rem;
    display: list-item;
    list-style-type: circle;
    margin-left: 1rem;
    margin-bottom: 0.375rem;
    text-decoration-style: wavy;
  }

  .featureName::marker {
    color: #a168ab;
  }

  .featureName:last-child {
    margin-bottom: 0;
  }
</style>
