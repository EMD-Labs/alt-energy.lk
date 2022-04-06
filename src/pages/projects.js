import React, { useState } from "react"
import Layout from "../components/common/Layout"
import { graphql, Link } from "gatsby"
import Card from "../components/projects/Card"
import * as styles from "../styles/projects/main.module.scss"
import Head from "../components/common/Head"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const Projects = ({ data }) => {
  const provinces = [
    "eastern",
    "northern",
    "western",
    "southern",
    "central",
    "north-central",
    "north-west",
    "uwa",
    "sabaragamuwa",
  ]

  const [province, setProvince] = useState(provinces[0])

  const nodes = data.allMarkdownRemark.nodes
  const filteredNodes = nodes.filter(
    node => node.frontmatter.province === province
  )
  return (
    <Layout>
      <Head title="PROJECTS" description="alternative energy projects" />
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>energy projects</h2>
        </div>
        <div className={styles.dropdownCntr}>
          <span>Select Province</span>{" "}
          <Dropdown
            options={provinces}
            value={province}
            placeholder="select a province"
            className={styles.dropdown}
            onChange={e => setProvince(e.value)}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filteredNodes.map(node => (
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
                  desc={node.frontmatter.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          province
          description
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
