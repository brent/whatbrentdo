import React from 'react';
import styles from './PersonalProjectsSection.module.css';

const PersonalProjectSubsection = ({ number, project, children }) => {
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
        <p className={styles.projectNumber}>{number}</p>
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
        <p>I also love a good side project.</p>
        <p>I’m juggling three(ish) of them. Each one is 100% designed and built by me.</p>
      </div>
      <ul>
        <li>
          <PersonalProjectSubsection number={1} project={projectsData[0]}>
            <p><strong><a href={projectsData[0].link}>whatbrentplay</a> is a personal video game review site I built using React and Firebase.</strong></p>
            <p>I play the games and review them with a bespoke scoring system.</p>
          </PersonalProjectSubsection>
        </li>
        <li>
          <PersonalProjectSubsection number={2} project={projectsData[1]}>
            <p><strong><a href={projectsData[1].link}>whatbrentsay</a> is a self-published Gatsby.js + Wordpress blog that I update when I have something to say.</strong></p>
            <p>It’s mostly about tech—often Apple and video games—but sometimes not.</p>
          </PersonalProjectSubsection>
        </li>
        <li>
          <PersonalProjectSubsection number={3} project={projectsData[2]}>
            <p><strong><a href={projectsData[2].link}>Gradient </a> is a daily mood tracker.</strong></p>
            <p>It started as a web app built with React, Node, Express, and PostgreSQL. Now it’s a native iOS Swift app. I use it almost daily but it’s been a while since I’ve added features&hellip;</p>
          </PersonalProjectSubsection>
        </li>
      </ul>
    </section>
  )
}
