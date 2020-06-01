import React, { useState } from 'react';
import styles from './home.module.css';

import { Header } from '../../components/Header';

const HomeContentBlock = ({ type, children }) => {
  let typeClass;

  switch (type) {
    case 'light':
      typeClass = styles.homeContentBlockLight;
      break;
    case 'dark':
      typeClass = styles.homeContentBlockDark;
      break;
    default:
      return null;
  }

  return (
    <div className={ `${styles.homeContentBlock} ${typeClass}` }>
      <div className={ styles.homeContentBlockInner }>
        { children }
      </div>
    </div>
  );
};

const ProfessionalAbout = ({ level, onMoreTap }) => {
  const defaultContent = (
    <>
      <p>I'm currently working on text-based shopping experiences within Walmart's New Product Innovation group.</p>
    </>
  );

  const levelOneContent = (
    <>
      { defaultContent }
      <p>Previously I was at Jetblack, the first company out of Walmart’s Store No. 8 incubator, working on a similar product. My experience spans a decade, mostly at start ups and small companies—from contractor to full time and in between.</p>
    </>
  );

  const levelTwoContent = (
    <>
    { levelOneContent }
    <p>I've been a User Interface Designer, User Experience Designer, Product Designer, Designer/Front-End Developer, etc. Titles for designers are all over the place. Simply put, I can design user experiences and produce visual artifacts across many channels, formats, and media. I'm also very comfortable writing code (VIM for life, yo).</p>
    </>
  );

  let displayContent = defaultContent;

  if (level === 1) {
    displayContent = levelOneContent;
  } else if (level === 2) {
    displayContent = levelTwoContent;
  } else {
    displayContent = defaultContent;
  }

  return (
    <>
      { displayContent }
      { level < 2
          ?  <button
              className={ styles.moreTrigger }
              onClick={ onMoreTap }>
                more
              </button>
          : null
      }
    </>
  )
};

export const Home = () => {
  const [moreLevel, setMoreLevel] = useState(0);

  const onMoreTap = (e) => {
    setMoreLevel(moreLevel + 1)
  }

  return (
    <div className={ styles.homeWrapper }>
      <Header
        className={ styles.homeHeader }
        title='whatbrentdo'
        src='img/logo.png'
      />

      <div className={ styles.homeContentBlockWrapper }>
        <HomeContentBlock type='light'>
          <h2 className={ styles.greeting }>Hey, I’m Brent.</h2>
          <h3 className={ styles.sectionExplainer }>I design and build digital products professionally.</h3>
          <ProfessionalAbout
            level={ moreLevel }
            onMoreTap={ onMoreTap }
          />
        </HomeContentBlock>

        <HomeContentBlock type='dark'>
          <h3 className={ styles.sectionExplainer }>Outside of work, I'm usually  coding, playing video games, or writing. </h3>
          <ul>
            <li>
              <p>I review games at <a href='http://byte-sized-reviews.whatbrentsay.com'>byte sized reviews</a></p>
            </li>
            <li>
              <p>I keep other words at <a href='http://whatbrentsay.com'>whatbrentsay</a></p>
            </li>
          </ul>
          <p>I've almost always got a side project I'm working on as well.</p>
        </HomeContentBlock>
      </div>
    </div>
  );
};
