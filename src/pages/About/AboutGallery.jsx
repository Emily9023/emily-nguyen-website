import React from 'react'
import './AboutGallery.scss';
import { Gallery } from 'react-grid-gallery';
import { galleryContent } from "../../util/About/galleryContent.jsx"

const AboutGallery = () => {
  return ( 
    <div style={{margin: "0 auto"}}>
      <Gallery images={galleryContent}
      
        tagStyle={{
          display: "inline",
          padding: ".2em .6em .3em",
          fontSize: "65%",
          fontWeight: "600",
          lineHeight: "1",
          color: "#7deab8",
          background: "rgba(0,0,0,0.65)",
          textAlign: "center",
          whiteSpace: "nowrap",
          verticalAlign: "baseline",
          borderRadius: ".25em"
        }}
        enableLightbox={true}
        // maxRows={3}
        backdropClosesModal
        // currentImage={3}
        // isOpen={ true}
        defaultContainerWidth={1000}
        rowHeight={330}
      />
    </div>
  )
}

export { AboutGallery };