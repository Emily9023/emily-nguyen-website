import React from 'react'
import PropTypes from 'prop-types';

import './Gallery.scss';

const Gallery = ({ galleryContent }) => {
  return (
    <div>
      {console.log(galleryContent)}
      
      {galleryContent.map((content) => {
          <img src={content.img}></img>
          
        })
      }
    </div>
  )
};

Gallery.propTypes = {
  galleryContent: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.object,
      text: PropTypes.string,
      path: PropTypes.string,
    })
  ),
};

export { Gallery }
