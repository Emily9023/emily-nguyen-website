import { React } from 'react';
import './Extraccuriculars.scss';
import { experienceContent } from '../../util/Experience/experienceContent';
import { ExperienceDisplay } from '../../components/experiences/experienceDisplay/experienceDisplay.jsx';

const Extraccuriculars = () => {
  return (
    <ExperienceDisplay positions={experienceContent.extracurriculars}></ExperienceDisplay>
  );
};

export { Extraccuriculars };
