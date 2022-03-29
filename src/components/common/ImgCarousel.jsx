import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { GatsbyImage } from "gatsby-plugin-image"

const ImgCarousel = ({images}) => {
console.log(images);
  return (
    <Carousel thumbWidth={60} showThumbs={true}>
        {
            images.map((img,index)=><div key={index}>
                <GatsbyImage image={img.childrenImageSharp[0].gatsbyImageData}/>
            </div>)
        }
    </Carousel>
  )
}

export default ImgCarousel