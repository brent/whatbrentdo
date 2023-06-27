import React from 'react';
import styles from './ProfessionalSection.module.css';

import { ProfessionalTimeline } from '../ProfessionalTimeline'
import { ConsultingSection } from '../ConsultingSection'

const RecentlySection = () => (
  <section className={styles.recentlySection}>
    <div className={styles.professionalRecent}>
      <p className={styles.professionalRecent__highlight}>I was most recently the Product Design Manager at Maisonette.</p>
      <p>As the functional lead I was responsible for all digital product design.</p>
    </div>

    <div className={styles.m2Wrapper}>
      <p>One of the last major projects I worked on there was a redesign of the web site to match an updated set of brand guidelines.</p>

      <div className={styles.m2RedesignScreens}>
        <div className={styles.m2RedesignScreens__left}>
          <img src="img/maisonette-2.0-home-mobile.png" />
        </div>

        <div className={styles.m2RedesignScreens__right}>
          <img src="img/maisonette-2.0-plp-mobile.png" />
          <img src="img/maisonette-2.0-pdp-mobile.png" />
        </div>
      </div>

      <p>Unfortunately the redesign effort fizzled out before we could get it into production.</p>
    </div>

    <div className={styles.mStyleGuideWrapper}>
      <p>On the opposite end of the spectrum, the very first initiative I worked on at Maisonette was to establish a style guide for their digital products.</p>

      <div className={styles.mStyleGuideScreens}>
        <div className={styles.mStyleGuideScreenWrapper}>
          <img src="img/maisonette-style-guide-01.png" />
        </div>
        <div className={styles.mStyleGuideScreenWrapper}>
          <img src="img/maisonette-style-guide-02.png" />
        </div>
        <div className={styles.mStyleGuideScreenWrapper}>
          <img src="img/maisonette-style-guide-03.png" />
        </div>
        <div className={styles.mStyleGuideScreenWrapper}>
          <img src="img/maisonette-style-guide-04.png" />
        </div>
      </div>
    </div>

    <p>In between those, I redesigned the Checkout flow, updated the Search experience, globally refreshed typography, helped incrementally A/B test and launch site-wide improvements, ran qualitative user testing for concepts and features, supported the creation and maintenance of our native iOS app, hired a full time designer, and worked with several freelancers and external designers.</p>
  </section>
)

export const ProfessionalSection = () => (
  <section className={styles.professionalSection}>
    <RecentlySection />
    <ProfessionalTimeline />
    <ConsultingSection />
  </section>
);
