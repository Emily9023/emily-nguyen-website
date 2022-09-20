import React from 'react'

import { MainImage } from '../../components/MainImage/MainImage';
import { Gallery } from '../../components/Gallery/Gallery';
import { homeGalleryContent } from '../../util/Home/galleryContent'

const Home = () => {
  return (
    <div>
      <MainImage></MainImage>
      <Gallery galleryContent={homeGalleryContent}/>
    </div>
  )
}

export { Home };