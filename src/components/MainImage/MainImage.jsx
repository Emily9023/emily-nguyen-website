import React from 'react'

import './MainImage.scss';

// import profilePic from '../../assets/Profile/profile-pic-no-background.png';
import homePagePic from '../../assets/Profile/home_page.jpg';

const MainImage = () => {
  return (
    <div className='main-image-container'>
      <img src={homePagePic} className="main-image" alt="Emily N on a mountain in Kelowna for the Great Northern Concrete Toboggan Race (GNCTR) competition"></img>
    </div>
  )
};
export { MainImage }
