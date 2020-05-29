import React from 'react';
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

const onMoreTap = (e) => {
  console.log('more tapped');
}

export const Home = () => (
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
        <p>I'm currently working on text-based shopping experiences within Walmart's New Product Innovation group.</p>
        <button 
          className={ styles.moreTrigger }
          onClick={ onMoreTap }
        >more</button>
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
