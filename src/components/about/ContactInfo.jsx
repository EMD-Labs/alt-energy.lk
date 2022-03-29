import React from 'react'
import * as styles from '../../styles/contact/contactinfo.module.scss'

const ContactInfo = ({icon,title,value}) => {
  return (
    <div className={styles.card}>
        <div className={styles.iconContainer}>
            {icon}
        </div>
        <div className={styles.content}>
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    </div>
  )
}

export default ContactInfo