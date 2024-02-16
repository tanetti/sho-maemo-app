import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>456</div>,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default Router;
