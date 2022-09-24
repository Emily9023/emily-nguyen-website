import { React } from 'react';
// import './Professional.scss';
import { experienceContent } from '../../util/Experience/experienceContent';
import { ExperienceDisplay } from '../../components/experiences/experienceDisplay/experienceDisplay.jsx';

const Professional = () => {
  return (
    <ExperienceDisplay positions={experienceContent.professional}></ExperienceDisplay>
  );
};

export { Professional };
