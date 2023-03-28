import React, {
  useState,
  useEffect,
} from 'react';
import styles from './WavesSection.module.css';

import { Emoji } from '../Emoji';

export const WavesSection = ({
  isAnimating,
  onAnimationDone,
}) => {
  const [currentWave, setCurrentWave] = useState(0);

  const waves = [
    { symbol: "👋🏽", label: "flipped hand wave emoji" },
    { symbol: "👋🏽", label: "hand wave emoji"},
    { symbol: "👋🏽", label: "flipped hand wave emoji" },
    { symbol: "👋🏽", label: "hand wave emoji"},
    { symbol: "🌊", label: "waves emoji"},
  ]

  const setWavesStyle = (currentWave, cb) => {
    const flipWave = currentWave === 0 || currentWave === 2;
    const waveStyle = flipWave ? { transform: "scale(-1, 1)" } : null

    return waveStyle
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      currentWave < (waves.length - 1)
        ? setCurrentWave(currentWave + 1)
        : onAnimationDone()
    }, 200)

    return () => clearTimeout(timer)
  })

  return (
    <section className={styles.wavesSection}>
      <div 
        className={styles.emojiWrapper}
        style={setWavesStyle(currentWave)}
      >
        <Emoji
          className={styles.bigText}
          symbol={waves[currentWave].symbol}
          label={waves[currentWave].label}
        />
      </div>
    </section>
  )
}
