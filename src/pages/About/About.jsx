
import { React } from 'react';
import { Tabs } from '../../components/Tabs/tabs';
import { AboutGallery } from './AboutGallery';
import { AboutMe } from './AboutMe';
import './About.scss';


const About = () => {
  const tabs = [
    {
      title: 'About Me',
      component: <AboutMe/>,
    },
    {
      title: 'Gallery',
      component: <AboutGallery />,
    },
    // {
    //   title: 'Projects',
    //   component: <Projects/>,
    // },
    // {
    //   title: 'Skills',
    //   component: <></>,
    // },
  ];

  return (
    <div className="about-container">
      {/* <Tabs tabs={tabs} displayButtons={false} /> */}
      <AboutMe/>
      <AboutGallery />
    </div>
  );
};

export { About };


