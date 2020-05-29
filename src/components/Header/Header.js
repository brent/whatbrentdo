import React from 'react';
import styles from './header.module.css';

export const Header = ({ title, src, className }) => (
  <div className={ `${styles.headerWrapper} ${className}` }>
    <h1 className={ styles.title }>{ title }</h1>
    <img className={ styles.logo } src={ src } />
  </div>
);
