import { Page404 } from '../pages/404/404';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About.jsx';
import { Experience } from '../pages/Experience/Experience.jsx';
import { Portfolio } from '../pages/Portfolio/Portfolio.jsx';

export const pages = {
  page404: {
    label: '404',
    component: <Page404 />,
  },
  navbar: [
    {
      label: 'Home',
      component: <Home />,
      path: '/',
      includeFooter: true,
    },
    {
      label: 'About',
      component: <About />,
      path: '/about',
      includeFooter: true,
    },
    {
      label: 'Experience',
      component: <Experience />,
      path: '/experience',
      includeFooter: true,
    },
    // {
    //   label: 'Portfolio',
    //   component: <Portfolio />,
    //   path: '/portfolio',
    //   includeFooter: true,
    // },
  ],
};
