import React, {
  useState,
  useEffect,
} from 'react';
import styles from './TextGreeting.module.css';

export const TextGreeting = ({ onAnimationDone }) => {
  const [greetLevel, setGreetLevel] = useState(0)

  const InitialGreet = () => (
    <>
      <p className={styles.bigText}>Hi</p>
    </>
  )

  const FullGreet = () => (
    <>
      <p className={styles.bigText}>Hi,</p>
      <p className={styles.bigText}>I'm Brent</p>
    </>
  )

  const FullGreetWithSubline = () => (
    <>
      <FullGreet />
      <p>I make apps and web sites</p>
    </>
  )

  const greetings = [
    <InitialGreet />,
    <FullGreet />,
    <FullGreetWithSubline />,
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (greetLevel < (greetings.length - 1)) {
        setGreetLevel(greetLevel + 1)
      } else {
        onAnimationDone()
      }
    }, 250)

    return () => clearTimeout(timer)
  })

  return (
    <div className={ styles.textGreeting }>
      { greetings[greetLevel] }
    </div>
  )
}
