import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>Alt Energy | EMD Labs | {new Date().getFullYear()} | <Link to="/terms-and-conditions">Terms and Conditions</Link></p>
    </div>
  )
}

export default Footer