import React from 'react';
import styles from './ConsultingSection.module.css';
import { BtnCta } from '../BtnCta';

export const ConsultingSection = () => (
  <div className={styles.consultingSection}>
    <div className={styles.consultingSection__inner}>
      <p className={styles.consultingHighlight}>Psst, start ups and SMBs</p>
      <p>Most of my 13+ years of experience is with small teams and early stage companies; I’ve seen a lot. If you want to get your design house in order but aren't sure where to start, we should talk.</p>
      {/*
      <BtnCta
        className={styles.consultingSectionCta}
        btnStyle="outline"
        label="How I can help &rarr;"
      />
      */}
    </div>
  </div>
);
