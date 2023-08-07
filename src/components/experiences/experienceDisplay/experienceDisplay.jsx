// import React, { useState } from 'react';

import PropTypes from 'prop-types';
import './experienceDisplay.scss';

// import { Experience } from '../experience';
// import { PopupModal } from '../../popup/PopupModal.jsx';


const ExperienceDisplay = ({ positions }) => {
  // const [showPopUp, setShowPopUp] = useState(false);
  // const [selectedExperience, setSelectedExperience] = useState({});

  return (
    !(positions === undefined || positions?.length === 0) && (
      <div className="home-page-timeline">
        <h2 className="home-page-section-header">Timeline</h2>
        {/* <Experience
          dates={positions}
          onClick={(position) => {
            setShowPopUp(true);
            setSelectedExperience(position);
          }}
        /> */}
        
        <div className="experience-display-container">
          {positions.map((content) => {
            return (
              <div 
                className={
                  "experience-display-container " +
                  'position-container ' +
                  (content.description ? ' position-container-clickable' : '')
                }
                onClick={(content) => {
                  // setShowPopUp(true);
                  // setSelectedExperience(content);
                }}
              >
                <div className='extracurriculars-experience-image-container'>
                  <img src={content.img} alt={content.altImage}></img>
                </div>
                <div className='extracurriculars-experience-content'>
                  <h2> {content.title} </h2>
                  {content.description}
                  {content.positions.map((position) => 
                    <div>
                      <div className='position-details-container'></div>
                      <h3 className='position-details-title'> {position.title} </h3>
                      <h3 className='position-details-date'> {position.startDate} - {position.endDate} </h3>
                      
                      <ul>
                        {position.description.map((point) => 
                          <li>
                            {point} 
                          </li>
                        )} 
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* <PopupModal
          trigger={showPopUp}
          setTrigger={setShowPopUp}
          blurBackground={false}
          exitIcon={true}
        >
          <div className={"extracurriculars-experience-container "}>
            <div className='extracurriculars-experience-image-container'>
              <img src={selectedExperience.img} alt={selectedExperience.altImage}></img>
            </div>
            <div className='extrcurriculars-experience-content'>
              <h2> {selectedExperience.title} </h2>
              {selectedExperience.description}
            </div>
          </div>
        </PopupModal> */}
      </div>
    )
  );
};

ExperienceDisplay.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object)
};

export { ExperienceDisplay };
