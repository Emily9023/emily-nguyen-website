import { React } from 'react';
import './Extraccuriculars.scss';
import { experienceContent } from '../../util/Experience/experienceContent';
import { ExperienceDisplay } from '../../components/experiences/experienceDisplay/experienceDisplay.jsx';

const Extraccuriculars = () => {
  return (
    <ExperienceDisplay positions={experienceContent.extracurriculars}></ExperienceDisplay>
    // <div className="extracurriculars-container">
    //   {experienceContent.extracurriculars.map((content, index) => (
    //     <div className="extracurriculars-experience-container">
    //       <img src={"temp"} alt={content.altImage}></img>
    //       <div className='extrcurriculars-experience-content'>
    //         <h2> {content.title} </h2>
    //         {content.description}
    //         {content.positions.map((position, index) => (
    //           <div>
    //             <h3> {position.title} </h3>
    //             {position.description.map((point, index) => (
    //               <li>{point}</li>
    //             ))}
    //           </div>
    //         ))}

    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export { Extraccuriculars };
