import React from 'react'
import './AboutMe.scss';
import PropTypes from 'prop-types';
import { ImageAndTextDisplaySimple } from '../../components/imageAndTextDisplay/imageAndTextDisplaySimple';
import { aboutMeContent } from '../../util/About/aboutMeContent';

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className='about-me-gallery'>  
        <ImageAndTextDisplaySimple 
                title={"Introduction"} 
                text={aboutMeContent.Introduction.text} 
                imageDisplaySide={aboutMeContent.Introduction.imageDisplaySide}
                img={aboutMeContent.Introduction.img}
                id={aboutMeContent.Introduction.id}
                container_height={aboutMeContent.Introduction.container_height}
              >
              </ImageAndTextDisplaySimple>
        {Object.entries(aboutMeContent.Subheaders).map( ([key, value]) => {
          return (
            <div style={{margin:'50px 0 0 0'}}>
              <ImageAndTextDisplaySimple 
                title={key} 
                text={value.text} 
                imageDisplaySide={value.imageDisplaySide}
                img={value.img}
                id={value.id}
                container_height={value.container_height}
              >
              </ImageAndTextDisplaySimple>
            </div>
          )
        } )}
         
        <ImageAndTextDisplaySimple 
                title={"Conclusion"} 
                text={aboutMeContent.Conclusion.text} 
                imageDisplaySide={aboutMeContent.Conclusion.imageDisplaySide}
                img={aboutMeContent.Conclusion.img}
                id={aboutMeContent.Conclusion.id}
                container_height={aboutMeContent.Conclusion.container_height}
              >
              </ImageAndTextDisplaySimple>
        {/* {content.map((key) => {
          return(
            <ImageAndTextDisplaySimple 
              title={key.title} 
              text={key.text} imageDisplaySide={'left'}
              img={key.img}
            >
            </ImageAndTextDisplaySimple>
          )
        })} */}
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  content: PropTypes.object
};

export { AboutMe };

// PropTypes.arrayOf(
//   PropTypes.shape({
//     img: PropTypes.object,
//     text: PropTypes.string,
//     path: PropTypes.string,
//   })
// ),
// PropTypes.shape({
//   k0: PropTypes.arrayOf(/* your type here, eg: PropTypes.number */),
//   k1: PropTypes.arrayOf(/* other type here, eg: PropTypes.string */)
// })