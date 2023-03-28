import React from 'react';
import styles from './PersonalProjectsSection.module.css';

const PersonalProjectSubsection = ({ project, children }) => (
  <div className={styles.personalProjectSubsection}>
    <div className={styles.projectHeader}>
      <p>{project.name}</p>
      { project.link ? <a href={project.link}>visit &rarr;</a> : null }
      { project.imgUrl ? <img src={project.imgUrl} alt={project.imgAlt} /> : null }
    </div>
    <div className={styles.projectDescription}>
      {children}
    </div>
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
        <p>I’m juggling three(ish) of them.</p>
      </div>
      <ul>
        <li>
          <PersonalProjectSubsection project={projectsData[0]}>
            <p><a href={projectsData[0].link}>whatbrentplay</a> is a small game review site I built using React and Firebase.</p>
            <p>I play the games and review them with a bespoke scoring system.</p>
          </PersonalProjectSubsection>
        </li>
        <li>
          <PersonalProjectSubsection project={projectsData[1]}>
            <p><a href={projectsData[1].link}>whatbrentsay</a> is a self-published Gatsby.js + Wordpress blog that I update when I have something to say.</p>
            <p>It’s mostly about tech—often Apple and video games—but sometimes not.</p>
          </PersonalProjectSubsection>
        </li>
        <li>
          <PersonalProjectSubsection project={projectsData[2]}>
            <p><a href={projectsData[2].link}>Gradient </a> is a daily mood tracker.</p>
            <p>It started as a web app built with React, Node, Express, and PostgreSQL. Now it’s a native iOS Swift app. I use it almost daily but it’s been a while since I’ve worked on it&hellip;</p>
          </PersonalProjectSubsection>
        </li>
      </ul>
    </section>
  )
}
