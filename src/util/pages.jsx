import { Page404 } from '../pages/404/404';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About.jsx';

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
      // component: <Home />,
      path: '/about',
      includeFooter: true,
    },
    {
      label: 'resume',
      // component: <Home />,
      path: '/resume',
      includeFooter: true,
    },
  ],
};
