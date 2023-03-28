import React, {
  useState,
  useEffect,
} from 'react';
import styles from './GreetingSection.module.css';

import { WavesSection } from '../WavesSection';
import { TextGreeting } from '../TextGreeting';

export const GreetingSection = ({ onAnimationDone }) => {
  const [wavesAnimating, setWavesAnimating] = useState(true)
  const [greetingAnimating, setGreetingAnimating] = useState(false)

  useEffect(() => {
    if (wavesAnimating === false && greetingAnimating === false) {
      onAnimationDone()
    }
  })

  return (
    <section className={ styles.greetingSection }>
      { wavesAnimating
        ? (
          <WavesSection
            isAnimating={wavesAnimating}
            onAnimationDone={() => {
              setWavesAnimating(false)
              setGreetingAnimating(true)
            }}
          />
        ) : (
          <TextGreeting
            isAnimating={greetingAnimating}
            onAnimationDone={() => setGreetingAnimating(false)}
          />
        )
      }
    </section>
  )
}
