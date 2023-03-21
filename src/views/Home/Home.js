import React, {
  useState,
  useEffect,
} from 'react';

import styles from './home.module.css';

import { Header } from '../Header';
import { Emoji } from '../../components/Emoji';

const GreetingSection = ({ onAnimationDone }) => {
  const [wavesAnimating, setWavesAnimating] = useState(true)
  const [greetingAnimating, setGreetingAnimating] = useState(false)

  useEffect(() => {
    if (wavesAnimating === false && greetingAnimating === false) {
      console.log('useEffect')
      onAnimationDone()
    }
  }, [greetingAnimating])

  return (
    <section className={ styles.greetingSection }>
      { wavesAnimating
        ? (
          <WavesSection
            isAnimating={wavesAnimating}
            onAnimationDone={() => {
              setWavesAnimating(false)
              setGreetingAnimating(true)
            }}
          />
        ) : (
          <TextGreeting
            isAnimating={greetingAnimating}
            onAnimationDone={() => setGreetingAnimating(false)}
          />
        )
      }
    </section>
  )
}

const TextGreeting = ({ onAnimationDone }) => {
  const [greetLevel, setGreetLevel] = useState(0)

  const InitialGreet = () => (
    <>
      <p className={styles.bigText}>Hi</p>
    </>
  )

  const FullGreet = () => (
    <>
      <p className={styles.bigText}>Hi,</p>
      <p className={styles.bigText}>I'm Brent</p>
    </>
  )

  const FullGreetWithSubline = () => (
    <>
      <FullGreet />
      <p>I make apps and web sites</p>
    </>
  )

  const greetings = [
    <InitialGreet />,
    <FullGreet />,
    <FullGreetWithSubline />,
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (greetLevel < (greetings.length - 1)) {
        setGreetLevel(greetLevel + 1)
      } else {
        console.log('animation done')
        onAnimationDone()
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [greetLevel])

  return (
    <div className={ styles.textGreeting }>
      { greetings[greetLevel] }
    </div>
  )
}

const WavesSection = ({
  isAnimating,
  onAnimationDone,
}) => {
  const [currentWave, setCurrentWave] = useState(0);
  const [wavesSticky, setWavesSticky] = useState(false);

  const waves = [
    { symbol: "👋🏽", label: "flipped hand wave emoji" },
    { symbol: "👋🏽", label: "hand wave emoji"},
    { symbol: "👋🏽", label: "flipped hand wave emoji" },
    { symbol: "👋🏽", label: "hand wave emoji"},
    { symbol: "🌊", label: "waves emoji"},
  ]

  const setWavesStyle = (currentWave, cb) => {
    const flipWave = currentWave === 0 || currentWave === 2;
    const waveStyle = flipWave ? { transform: "scale(-1, 1)" } : null

    return waveStyle
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      currentWave < (waves.length - 1)
        ? setCurrentWave(currentWave + 1)
        : onAnimationDone()
    }, 200)

    return () => clearTimeout(timer)
  }, [currentWave])

  return (
    <section className={styles.wavesSection}>
      <div 
        className={styles.emojiWrapper}
        style={setWavesStyle(currentWave)}
      >
        <Emoji
          className={styles.bigText}
          symbol={waves[currentWave].symbol}
          label={waves[currentWave].label}
        />
      </div>
    </section>
  )
};

const ProfessionalSection = () => (
  <section className={styles.professionalSection}>
    <div className={styles.proBlurb}>
      <p>I’m the Product Design Manager at Maisonette where I lead design for web and app.</p>
      <p>In my time there, I created a style guide, redesigned our checkout experience, helped launch our app, hired a designer, managed a few different freelancers, supported A/B tests, and redesigned the site (which never went live), among other feature work and initiatives.</p>
      <p>Previously, I worked at InHome, Text to Shop, and Jetblack&mdash;internally incubated products at Walmart. Before that, Crowdtap (now Suzy), BuddyMedia, and other startups.</p>
    </div>
  </section>
)

const PersonalProjectsSection = () => {
  const projectsData = [
    {
      name: 'whatbrentplay',
      link: 'https://whatbrentplay.com',
      imgUrl: 'img/wbp-screens.png',
    },
    {
      name: 'whatbrentsay',
      link: 'https://whatbrentsay.com',
    },
    {
      name: 'Gradient',
      imgUrl: 'img/gradient-screens.png',
    },
  ]

  const PersonalProjectSubsection = ({ project, children }) => (
    <div className={styles.personalProjectSubsection}>
      <div className={styles.projectHeader}>
        <p>{project.name}</p>
        { project.link ? <a href={project.link}>visit &rarr;</a> : null }
        { project.imgUrl ? <img src={project.imgUrl} /> : null }
      </div>
      <div className={styles.projectDescription}>
        {children}
      </div>
    </div>
  )

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

export const Home = () => {
  const [isIntroAnimating, setIsIntroAnimating] = useState(true)

  return (
    <>
      <Header
        title='whatbrentdo'
        src='img/wbd-logo.svg'
        className={ styles.header }
      />

      <div className={ styles.homeWrapper }>
        <GreetingSection
          onAnimationDone={() => setIsIntroAnimating(false)}
        />
        { !isIntroAnimating
          ? (
            <div className={styles.mainContentWrapper}>
              <ProfessionalSection />
              <PersonalProjectsSection />
            </div>
          ) : null
        }
      </div>
    </>
  )
}
