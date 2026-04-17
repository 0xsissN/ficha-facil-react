import { createBrowserRouter } from 'react-router-dom';
import { HealthCheckPage } from '../../features/health/pages/HealthCheckPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HealthCheckPage />,
  },
  {
    path: '/health',
    element: <HealthCheckPage />,
  },
]);