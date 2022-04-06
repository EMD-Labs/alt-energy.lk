import React from "react"
import Layout from "../components/common/Layout"
import { graphql } from "gatsby"
import * as styles from "../styles/templates/productTemp.module.scss"
import ImgCarousel from "../components/common/ImgCarousel"
import Head from "../components/common/Head"

const ProjectTemplate = ({ data }) => {
  const { email, name, phone, title, description } =
    data.markdownRemark.frontmatter
  return (
    <Layout>
      <Head title={title} description={description} />
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>{title}</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <ImgCarousel images={data.allFile.nodes} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.textContent}>
                <div
                  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
              </div>
              <div className={styles.contact}>
                <div className={styles.contactInfo}>
                  <h4>contact info</h4>
                  <p>
                    <span>Name : </span>
                    {name}
                  </p>
                  <p>
                    <span>Phone : </span>
                    {phone}
                  </p>
                  <p>
                    <span>Email : </span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query Single($relativepath: String) {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { eq: $relativepath }
      }
    ) {
      nodes {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
    markdownRemark(frontmatter: { relativep: { eq: $relativepath } }) {
      html
      frontmatter {
        email
        name
        phone
        title
      }
    }
  }
`
