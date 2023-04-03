import React from 'react';
import styles from './BtnCta.module.css';

export const BtnCta = ({
  btnStyle="fill",
  className,
  label,
}) => {
  const getBtnTypeStyles = btnStyle => {
    switch (btnStyle) {
      case "outline":
        return styles.btnCta__outline;
      default:
        return styles.btnCta__fill;
    }
  }

  const classes = `${styles.btnCta} ${getBtnTypeStyles(btnStyle)} ${className || ""}`;

  return (
    <div className={classes}>
      <a href="#professionally">{label}</a>
    </div>
  )
}

