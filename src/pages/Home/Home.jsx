import React from 'react'

import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { MainImage } from '../../components/MainImage/MainImage';
// import { homeGalleryContent } from '../../util/Home/galleryContent'
import { homeImageCarouselContent } from '../../util/Home/imageCarouselContent'

// import { Gallery } from 'react-grid-gallery';

const Home = () => {
  return (
    <div>
      <MainImage></MainImage>
      
      <ImageCarousel items={homeImageCarouselContent}></ImageCarousel>
    </div>
  )
}

export { Home };