<script lang="ts">
  import RevealText from '$lib/components/RevealText'

  const jobsData = [
    {
      role: 'Lead Digital Product Designer',
      company: 'Spanx',
      years: {
        start: '2023',
        end: 'now',
      },
    },
    {
      role: 'Product Design Manager',
      company: 'Maisonette',
      years: {
        start: '2021',
        end: '2023',
      },
    },
    {
      role: 'Senior Product Designer',
      company: 'Walmart+ InHome',
      years: {
        start: '2020',
        end: '2021',
      },
    },
    {
      role: 'Conversational UX Designer',
      company: 'Walmart Text-to-Shop',
      years: {
        start: '2020',
      },
    },
    {
      role: 'Senior UX Designer',
      company: 'Jetblack',
      years: {
        start: '2018',
        end: '2020',
      },
    },
    {
      role: 'Freelance Product Designer',
      years: {
        start: '2016',
        end: '2018',
      },
    },
    {
      role: 'Senior Product Designer',
      company: 'Crowdtap',
      years: {
        start: '2012',
        end: '2015',
      },
    },
    {
      role: 'User Interface Designer',
      company: 'BuddyMedia',
      years: {
        start: '2011',
        end: '2012',
      },
    },
  ]

  const projectsData = [
    {
      name: 'bundle',
      description:
        'A simple list-based link sharing app. Made to solve a very specific annoyance of mine. Built with NextJs and Supabase.',
      url: 'https://bundleof.link',
    },
    {
      name: 'whatbrentplay',
      description:
        "Concise video game reviews with a bespoke scoring system. I don't play as many as I used to but I do review all the ones I finish. Built with React and Firebase.",
      url: 'https://whatbrentplay.com',
    },
  ]

  const wbsData = {
    name: 'whatbrentsay',
    url: 'https://whatbrentsay.com',
    description:
      'Most of what I write about is related to tech. The feature articles are my favorite thing about it. Each one is unique--designed and built to delight.',
    features: [
      {
        name: 'Siri, Use My Phone For Me',
        url: 'https://whatbrentsay.com/features/siri-use-my-phone-for-me',
      },
      {
        name: 'A Practical Guide to Consuming a Backlog',
        url: 'https://whatbrentsay.com/features/a-practical-guide-to-consuming-a-backlog/',
      },
      {
        name: 'Hello Again, Night City',
        url: 'https://whatbrentsay.com/features/hello-again-night-city/',
      },
      {
        name: 'Notable Quotables',
        url: 'https://whatbrentsay.com/features/notable-quotables',
      },
      {
        name: 'A Half Hour in Kyrat',
        url: 'https://whatbrentsay.com/features/a-half-hour-in-kyrat-remastered/',
      },
    ],
  }
</script>

{#snippet job(data)}
  <span class="experience">
    {#each data as job}
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

{#snippet sideProjects(data)}
  <span class="sideProjects">
    {#each data as project}
      <span class="project">
        <span class="name"
          ><a href={project.url} target="_blank">{project.name} </a></span
        >
        <span class="description">{project.description}</span>
      </span>
    {/each}
  </span>
{/snippet}

{#snippet wbs(data)}
  <span class="wbs project">
    <span class="name"><a href={data.url} target="_blank">{data.name}</a></span>
    <span class="description">{data.description}</span>
    <span class="features">
      {#each data.features as feature}
        <span class="featureName"
          ><a href={feature.url} target="_blank">{feature.name}</a></span
        >
      {/each}
    </span>
  </span>
{/snippet}

<section>
  <h2>Hi, I'm Brent</h2>

  <p>
    I'm a <strong>Digital Product Designer</strong> who is as comfortable in a
    terminal as Figma.<RevealText>
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
    I really like making digital products.<RevealText
      >I've got a few I'm working on for fun: {@render sideProjects(
        projectsData,
      )}As well as a blog that doesn't have a schedule: {@render wbs(
        wbsData,
      )}</RevealText
    >
  </p>
</section>

<style>
  h2 {
    margin-bottom: 2rem;
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
