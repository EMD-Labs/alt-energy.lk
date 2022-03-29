import React from "react"
import Layout from "../components/common/Layout"
import * as styles from "../styles/templates/productTemp.module.scss"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}></div>
          <div className={styles.content}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
