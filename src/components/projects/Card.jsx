import React from 'react'
import * as styles from '../../styles/projects/card.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

const Card = ({title,image,desc}) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgBox}>
          <GatsbyImage image={image}/>
        </div>
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card