import React from "react"
import Layout from "../components/common/Layout"
import { graphql, Link } from "gatsby"
import Card from "../components/projects/Card"
import * as styles from "../styles/projects/main.module.scss"

const projects = ({ data }) => {
  const nodes = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>energy projects</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
            {nodes.map(node => (
              <Link
                to={`/projects/${node.frontmatter.slug}`}
                key={node.frontmatter.slug}
              >
                <Card
                  title={node.frontmatter.title}
                  image={
                    node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default projects

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
