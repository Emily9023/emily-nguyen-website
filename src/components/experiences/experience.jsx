import React from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';

const Experience = ({ dates, onClick }) => {
  return (
    <>
      <div className="experience-container">
        {dates.map((content) => {
            <div
              key={content.title}
              // className={
              //   'experience-date-container ' +
              //   (content.description ? ' experience-date-container-clickable' : '')
              // }
              // onClick={() => {
              //   date.description ? onClick(date) : 0;
              // }}
            >
              <div className="extracurriculars-container">
                <div className="extracurriculars-experience-container">
                  <div className='extracurriculars-experience-image-container'>
                    <img src={content.img} alt={content.altImage}></img>
                  </div>
                  <div className='extrcurriculars-experience-content'>
                    <h2> {content.title} </h2>
                    {content.description}
                    {content.positions.map((position, index) => (
                      <div>
                        <h3> {position.title} </h3>
                        {position.description.map((point, index) => (
                          <li>{point}</li>
                        ))}
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
        })}
      </div>
    </>
  );
};

Experience.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export { Experience };
