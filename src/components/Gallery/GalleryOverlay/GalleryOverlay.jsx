import React from 'react'
import PropTypes from 'prop-types';

import './GalleryOverlay.scss';

const GalleryOverlay = ({ galleryOverlayContent }) => {
  return (
    <div className='gallery-overlay-container'>
      <div className='gallery-overlay-content'>
        <h4> {galleryOverlayContent.title} </h4>
        <p> {galleryOverlayContent.description} </p>
      </div>
    </div>
  )
};

GalleryOverlay.propTypes = {
  galleryOverlayContent: PropTypes.objectOf(PropTypes.object),
};

export { GalleryOverlay }

