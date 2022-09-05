import { React } from 'react';
import { Tabs } from '../../components/Tabs/tabs';
import { Professional } from './Professional';
import { Extraccuriculars } from './Extraccuriculars';
import './Experience.scss';

const Experience = () => {
  const tabs = [
    {
      title: 'Professional',
      component: <Professional />,
    },
    {
      title: 'Extraccuriculars',
      component: <Extraccuriculars />,
    },
    // {
    //   title: 'Projects',
    //   component: <></>,
    // },
    // {
    //   title: 'Skills',
    //   component: <></>,
    // },
  ];

  return (
    <div className="experience-container">
      <div className="experience-tabs-container">
        <Tabs tabs={tabs} displayButtons={false} />
      </div>
    </div>
  );
};

export { Experience };
