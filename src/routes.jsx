import { HomePage } from './component/pages/home/HomePage';
import { ShopPage } from './component/pages/shop/ShopPage';
import { ErrorPage } from './component/pages/error/ErrorPage';

const routes = [
  {
    path: 'odin-shopping-cart/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'odin-shopping-cart/shop',
    element: <ShopPage />,
  },
];

export default routes;
