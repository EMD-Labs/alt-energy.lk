import React from 'react'
import * as styles from '../../styles/projects/card.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

const Card = ({title,image}) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgBox}>
          <GatsbyImage image={image}/>
        </div>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Card