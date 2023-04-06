import React, {
  useState,
} from 'react';

import styles from './home.module.css';

import { Header } from '../../components/Header';
import { GreetingSection } from '../../components/GreetingSection';
import { ProfessionalSection } from '../../components/ProfessionalSection';
import { PersonalProjectsSection } from '../../components/PersonalProjectsSection';
import { Footer } from '../../components/Footer';

export const Home = () => {
  const [isIntroAnimating, setIsIntroAnimating] = useState(true)
  const onAnimationDone = () => setIsIntroAnimating(false)

  return (
    <>
      <Header
        title='whatbrentdo'
        src='img/wbd-logo.svg'
        className={ styles.header }
      />

      <div className={ styles.homeWrapper }>
        <GreetingSection
          onAnimationDone={onAnimationDone}
        />
        { !isIntroAnimating
          ? (
            <div className={styles.mainContentWrapper}>
              <ProfessionalSection />
              <PersonalProjectsSection />
              <Footer />
            </div>
          ) : null
        }
      </div>
    </>
  )
}
