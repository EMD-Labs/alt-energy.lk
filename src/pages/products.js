import React from "react"
import Layout from "../components/common/Layout"
import { graphql, Link } from "gatsby"
import Card from "../components/projects/Card"
import * as styles from "../styles/projects/main.module.scss"

const products = ({ data }) => {
  const nodes = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.header}></div>
        <div className={styles.container}>
          <div className={styles.grid}>
            {nodes.map(node => (
              <Link
                to={`/products/${node.frontmatter.slug}`}
                key={node.frontmatter.slug}
              >
                <Card title={node.frontmatter.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default products

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "product" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
