import React from 'react';
import styles from './PersonalProjectsSection.module.css';

const PersonalProjectSubsection = ({project, children }) => {
  const projectClassName = ((project) => {
    switch (project.toLowerCase()) {
      case "whatbrentplay":
        return styles.projectWbp
      case "whatbrentsay":
        return styles.projectWbs
      case "gradient":
        return styles.projectGradient
      default:
        return ""
    }
  })(project.name)

  const classNames = `${styles.personalProjectSubsection} ${projectClassName || ""}`

  return (
    <div className={classNames}>
      <div className={styles.projectHeader}>
        <p className={styles.projectName}>{project.name}</p>
        { project.link
            ? (
              <p className={styles.projectLink}>
                <a 
                  href={project.link}
                >visit site &rarr;</a>
              </p>
            ) : null
        }
      </div>
      { project.imgUrl
          ? (
            <div className={styles.projectImgWrapper}>
              <img src={project.imgUrl} alt={project.imgAlt} />
            </div>
          ) : null
      }
      <div className={styles.projectDescription}>
        {children}
      </div>
    </div>
  )
}

const BlogSection = () => (
  <div className={styles.blogSection}>
    <p className={styles.sectionHeader}>I write sometimes, too</p>
    <p><a href="https://whatbrentsay.com">whatbrentsay</a> is a self-published Gatsby.js + Wordpress blog that I update when I have something to say. It’s mostly about tech—often Apple and video games—but sometimes not.</p>
  </div>
)

export const PersonalProjectsSection = () => {
  const projectsData = [
    {
      name: 'whatbrentplay',
      link: 'https://whatbrentplay.com',
      imgUrl: 'img/wbp-screens.png',
      imgAlt: '',
    },
    {
      name: 'whatbrentsay',
      link: 'https://whatbrentsay.com',
      imgUrl: 'img/wbs-screens.png',
      imgAlt: '',
    },
    {
      name: 'Gradient',
      imgUrl: 'img/gradient-screens.png',
      imgAlt: '',
    },
  ]

  return (
    <section className={styles.personalProjectsSection}>
      <div className={styles.personalProjectsHeader}>
        <p className={styles.sectionHeader}>I also love a good side project.</p>
        <p>I'm working on a couple.</p>
      </div>
      <ul>
        <li>
          <PersonalProjectSubsection project={projectsData[2]}>
            <p><strong>Gradient is a daily mood tracker.</strong></p>
            <p>It started as a web app built with React, Node, Express, and PostgreSQL. Now it’s a native iOS Swift app. I use it almost daily but it’s been a while since I’ve added features.</p>
            <p>I wanted a quick and easy way to capture how I felt at the end of my days without the weight of a full blown journaling app.</p>
            <img src="img/gradient-entry.png" />
            <p>Sentiment is captured by interacting with a slider that maps to a color gradient. A note can optionally be added to provide additional context.</p>
            <img src="img/gradient-detailView.png" />
            <p>The detail view for each logged day also contains a visualization comparing it to a rolling average.</p>
          </PersonalProjectSubsection>
        </li>
        <li>
          <PersonalProjectSubsection project={projectsData[0]}>
            <p><strong><a href={projectsData[0].link}>whatbrentplay</a> is a personal video game review site I built using React and Firebase.</strong></p>
            <p>I play the games and review them with a bespoke scoring system.</p>
            <img src="img/whatbrentplay-reviewDetail.png" />
            <p>Each game is given a score out of 25, which comes from five individual categories, and a written summary.</p>
            <p>There’s also an admin panel where reviews can be fully managed. In addition to basic CRUD, review statuses can be toggled between draft and live, which controls whether or not they’re visibile on the front-end.</p>
            <img src="img/whatbrentplay-admin.png" />
            <p>I wrote <a href="https://old.whatbrentsay.com/2020/08/26/byte-sized-reviews-2-years-later">a two year retrospective</a> for whatbrentplay&mdash;formerly byte sized reviews&mdash;on my blog if you’re interested in learning more about its progress. Speaking of my blog...</p>
          </PersonalProjectSubsection>
        </li>
      </ul>

      <BlogSection />
    </section>
  )
}
