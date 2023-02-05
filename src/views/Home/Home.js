import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './home.module.css';

import { Header } from '../Header';
import { Emoji } from '../../components/Emoji';

export const Home = () => {
  const [showWave01, setShowWave01] = useState(true);
  const [showWave02, setShowWave02] = useState(false);
  const [showWave03, setShowWave03] = useState(false);

  return (
    <>
      <Header
        title='whatbrentdo'
        src='img/logo.png'
      />

      <div className={ styles.homeWrapper }>
        <div className={ styles.greetings }>
          <CSSTransition
            in={showWave01}
            timeout={2000}
            classNames={{
              enter: `${styles.greeting__enter}`,
              enterActive: `${styles.greeting__enterActive}`,
              exit: `${styles.greeting__exit}`,
              exitActive: `${styles.greeting__exitActive}`,
            }}
          >
            <h1 className={ styles.greeting }>
              <Emoji 
                className={ styles.greeting__wave01 }
                symbol="👋🏽"
                label="wave emoji"
              />
            </h1>
          </CSSTransition>
            <h1 className={ styles.greeting }>
              <Emoji 
                className={ styles.greeting__wave02 }
                symbol="👋🏽"
                label="wave emoji"
              />
            </h1>
            <h1 className={ styles.greeting }>
              <Emoji 
                className={ styles.greeting__wave03 }
                symbol="🌊"
                label="wave emoji"
              />
            </h1>
        </div>
      </div>
    </>
  );
};
