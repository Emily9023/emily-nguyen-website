import React from 'react';
import PropTypes from 'prop-types';
import './imageAndTextDisplaySimple.scss';


const ImageAndTextDisplaySimple = ({ title, text, imageDisplaySide, img, id, style, class_options, container_height }) => {
  const custom_style = { ...style, ...class_options }
  if (imageDisplaySide === 'left'){
    return (
      <div className='image-and-text-display-simple-container' id={id}>
        {/* <a id="target"></a> */}
        <h2 className='image-and-text-display-simple-title'>{title}</h2>
        <div className='image-and-text-display-simple-image-container left-element' style={container_height}>
          <img src={img}></img>
        </div>
        <div className='image-and-text-display-simple-content' style={container_height}>
          {text.map((paragraph) => {
            return(
              <p>
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    );
  } else if (imageDisplaySide === 'right') {
    return (
      <div className='image-and-text-display-simple-container'>
        <h2 className='image-and-text-display-simple-title'>{title}</h2>
        <div className='image-and-text-display-simple-content left-element style={container_height}'>
          {text.map((paragraph) => {
            return(
              <p>
                {paragraph}
              </p>
            )
          })}
        </div>
        <div className='image-and-text-display-simple-image-container' style={container_height}>
          <img src={img}></img>
        </div>
      </div>
    )
  } else {
    return (
      <div className='image-and-text-display-simple-container' style={style} id={id}>
        {/* <a id="target"></a> */}
        <h2 className='image-and-text-display-simple-title'>{title}</h2>
        <div className='image-and-text-display-simple-content' style={container_height}>
          {text.map((paragraph) => {
            return(
              <p>
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    );
  }
};

ImageAndTextDisplaySimple.propTypes = {
  title: PropTypes.string,
  img: PropTypes.object,
  imageDisplaySide: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  class_options: PropTypes.object,
  container_height: PropTypes.object,
};

export { ImageAndTextDisplaySimple };
