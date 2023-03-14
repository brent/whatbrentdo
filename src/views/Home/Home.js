import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './home.module.css';

import { Header } from '../Header';
import { Emoji } from '../../components/Emoji';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const proTitles = [
    'a Product Design Manager',
    'a UX Designer',
    'a UI Designer',
    'a front-end developer',
  ]

  const otherTitles = [
    'a hobbyist back-end developer',
    'savvy on the command line',
    'a technophile',
    'a gamer',
    'an infrequent writer',
    'an NBA fan',
    'not as tall as you think',
  ]

  const titlesList = [...proTitles, ...otherTitles];

  const renderTitlesList = (activeIndex) => {
    return titlesList.map((title, index) => (
      <li 
        key={title}
        className={styles.introTitleItem}
      >{title}</li>
    ))
  }

  const [activeTitle, setActiveTitle] = useState(0)
  const [topLineVisible, setTopLineVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  const sectionRef = useRef()
  const introTopLineRef = useRef()
  const introTitles = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(introTopLineRef.current, {
        scrollTrigger: {
          //markers: true,
          trigger: introTitles.current,
          endTrigger: sectionRef.current,
          start: "top top+=176px",
          end: "bottom top",
          onStart: () => setScrolled(true),
          onLeave: () => setTopLineVisible(false),
          onEnterBack: () => setTopLineVisible(true),
          onLeaveBack: () => setScrolled(false)
        }
      })
    })

    return () => ctx.revert()
  })

  const topLineClass = (() => {
    const baseClass = `${styles.introTopLine}`
    return topLineVisible
      ? baseClass
      : `${baseClass} ${styles.introTopLine__hidden}`
  })()

  return (
    <section ref={sectionRef} className={ styles.introSection }>
      <h2 className={ styles.introContent }>
        <p ref={introTopLineRef} className={ topLineClass }>Brent is</p>
        <ul ref={introTitles} className={ styles.introTitles }>
          { renderTitlesList() }
        </ul>
      </h2>
    </section>
  );
}

const WavesSection = () => {
  const [currentWave, setCurrentWave] = useState(0);
  const [wavesSticky, setWavesSticky] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const wavesRef = useRef(null)
  const emojiRef = useRef(null)
  const hiRef = useRef(null)

  const waves = [
    { symbol: "👋🏽", label: "flipped hand wave emoji" },
    { symbol: "👋🏽", label: "hand wave emoji"},
    { symbol: "👋🏽", label: "flipped hand wave emoji" },
    { symbol: "👋🏽", label: "hand wave emoji"},
    { symbol: "🌊", label: "waves emoji"},
  ]

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(wavesRef.current, {
        scrollTrigger: {
          //markers: true,
          trigger: wavesRef.current,
          endTrigger: emojiRef.current,
          start: "top top",
          end: "bottom top+=168px",
          onUpdate: self => updateWave(self),
          onLeave: () => setShowGreeting(true),
          onEnterBack: () => setShowGreeting(false),
        },
      })
    })

    return () => ctx.revert();
  })

  const progressSectors = ((waves) => {
    const threshold = (1.0/waves.length).toFixed(3);
    let sectors = [parseFloat(threshold)];

    for (let i = 0; i < waves.length; i++) {
      const sectorsTotal = threshold * i;
      const newSector = parseFloat(sectorsTotal) + parseFloat(threshold);
      sectors.push(newSector);
    }

    return sectors;
  })(waves);

  const updateWave = (self) => {
    const scrollPos = self.progress.toFixed(3);
    const progressThreshold = (1.0/waves.length).toFixed(3);
    let nextWave = currentWave;

    if (scrollPos < progressSectors[0]) {
      setCurrentWave(0)
      return
    }

    progressSectors.forEach((sector, i) => {
      if (scrollPos > sector) {
        nextWave = i;
      }
    })

    setCurrentWave(nextWave);
  }

  const setWavesStyle = (currentWave, cb) => {
    const flipWave = currentWave === 0 || currentWave === 2;
    const waveStyle = flipWave ? { transform: "scale(-1, 1)" } : null

    let moreStyles = (() => typeof cb === "function" ? cb() : null)();

    return {
      ...waveStyle,
      ...moreStyles,
    }
  }

  useEffect(() => {
  }, [currentWave]);

  return (
    <section className={styles.wavesSection} ref={wavesRef}>
      <div 
        className={styles.emojiWrapper}
        style={setWavesStyle(currentWave)}
        ref={emojiRef}
      >
        { !showGreeting ? (
          <Emoji 
            symbol={waves[currentWave].symbol}
            label={waves[currentWave].label}
          />
        ) : (
          <p className={styles.bigHi} ref={hiRef}>Hi</p>
        )}
      </div>
    </section>
  )
};

const ProfessionalSection = () => (
  <section className={styles.professionalSection}>
    <div className={styles.proBlurb}>
      <p>I’m the Product Design Manager at Maisonette where I lead design for web and app.</p>
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
  return (
    <>
      <Header
        title='whatbrentdo'
        src='img/wbd-logo.svg'
        className={ styles.header }
      />

      <div className={ styles.homeWrapper }>
        <IntroSection />
        <WavesSection />
        <ProfessionalSection />
        <PersonalProjectsSection />
      </div>
    </>
  );
};
