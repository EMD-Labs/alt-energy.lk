import React from 'react'
import * as styles from '../../styles/landing/hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>join us to combat</h1>
            <h1>the crisis</h1>
            </div>
            <div className={styles.btn}>
                <button>explore</button>
            </div>
        </div>
    </div>
  )
}

export default Hero