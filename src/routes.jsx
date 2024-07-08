import { HomePage } from './component/pages/home/HomePage';
import { ShopPage } from './component/pages/shop/ShopPage';
import { ErrorPage } from './component/pages/error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <ShopPage />,
  },
];

export default routes;
