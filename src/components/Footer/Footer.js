import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footer__inner}>
      <p className={styles.farewell}>
        Thanks for<br />
        stopping by
      </p>
      <p>&copy;now</p>
    </div>
  </div>
);

