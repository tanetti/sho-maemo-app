import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout, LandingContent } from '@/components';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingContent />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default Router;
