import React from 'react'
import * as styles from '../../styles/about/about.module.scss'
import { useStaticQuery,graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const AboutContent = () => {

  const data = useStaticQuery(graphql`{
    allFile(filter: {relativeDirectory: {eq: "images/about"}}) {
    nodes {
      childrenImageSharp {
        gatsbyImageData
      }
    }
  }
  markdownRemark(frontmatter: {title: {eq: "about"}}) {
    html
    frontmatter {
      featuredImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}`)
const images = data.allFile.nodes
  return (
    <div className={styles.about} id="about">
      <div className={styles.header}>
            <h2>who are we</h2>
          </div>
      <div className={styles.container}>
        <div className={styles.left}>
          
          <div className={styles.pg}>
            <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
          </div>
          <div className={styles.sdgContainer} >
            <div><GatsbyImage image={images[0].childrenImageSharp[0].gatsbyImageData}/></div>
            <div> <GatsbyImage image={images[1].childrenImageSharp[0].gatsbyImageData}/></div>
            <div><GatsbyImage image={images[2].childrenImageSharp[0].gatsbyImageData}/></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <GatsbyImage image={data.markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent