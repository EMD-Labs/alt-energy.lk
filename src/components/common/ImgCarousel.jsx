import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../../styles/carousel.module.scss'

const ImgCarousel = ({images}) => {
console.log(images);
  return (
    <Carousel autoPlay>
        {
            images.map((img,index)=><div key={index} className={styles.imgCtr}>
                <GatsbyImage image={img.childrenImageSharp[0].gatsbyImageData}/>
            </div>)
        }
    </Carousel>
  )
}

export default ImgCarousel