import React from 'react'

import './MainImage.scss';

import profilePic from '../../assets/Profile/profile-pic-no-background.png';
import artsyProfilePic from '../../assets/Profile/profile-pic-imppressionist-DLX-1-no-background.png';

const MainImage = () => {
  return (
    <div className='main-image-container'>
      <div className="main-image-left" >
        <img src={profilePic} className="main-image" style={{width: '100%'}}></img>
      </div>
      <div className="main-image-right" >
        <img src={artsyProfilePic} className="main-image" style={{width: '100%'}}></img>
      </div>
    </div>
  )
};
export { MainImage }
