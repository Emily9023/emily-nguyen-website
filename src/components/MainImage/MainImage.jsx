import React from 'react'

import './MainImage.scss';

import profilePic from '../../assets/Profile/profile-pic-no-background.png';
import homePagePic from '../../assets/Profile/home_page.jpg';

const MainImage = () => {
  return (
    <div className='main-image-container'>
      <img src={homePagePic} className="main-image" ></img>
    </div>
  )
};
export { MainImage }
