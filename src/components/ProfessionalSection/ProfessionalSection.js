import React from 'react';
import styles from './ProfessionalSection.module.css';

import { ProfesssionalTimeline } from '../ProfesssionalTimeline'

export const ProfessionalSection = () => (
  <section className={styles.professionalSection}>
    <div className={styles.professionalRecent}>
      <p className={styles.professionalRecent__highlight}>I was most recently the Product Design Manager at Maisonette.</p>
      <p>As the functional lead I was responsible for all digital product design.</p>
    </div>

    <p className={styles.professionalPast}>Previously, I worked at <a href="https://www.walmart.com/plus/inhome">InHome</a>, <a href="https://texttoshop.walmart.com/">Text to Shop</a>, and <a href="https://www.crunchbase.com/organization/jetblack">Jetblack</a>&mdash;internally incubated products at Walmart. Before that, <a href="https://crowdtap.com/">Crowdtap</a>, <a href="https://www.crunchbase.com/organization/buddymedia">BuddyMedia</a>, and other startups. In between, I've freelanced.</p>

    <ProfesssionalTimeline />
  </section>
);
