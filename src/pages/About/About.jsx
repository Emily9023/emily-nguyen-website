import React from 'react'
import './About.scss';
import { Gallery } from 'react-grid-gallery';
import { galleryContent } from "../../util/About/galleryContent.jsx"

const About = () => {

  return (
    <div className='about-container'>
      <div className='about-gallery'>  
        <Gallery images={galleryContent}/>
      </div>
      {'hello'}
    </div>
  )
}

export { About };

