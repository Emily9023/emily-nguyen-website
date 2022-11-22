import { React } from 'react';
import { experienceContent } from '../../util/Experience/experienceContent';
import { ExperienceDisplay } from '../../components/experiences/experienceDisplay/experienceDisplay.jsx';

const Projects = () => {
  return (
    <ExperienceDisplay positions={experienceContent.projects}></ExperienceDisplay>
  );
};

export { Projects };
