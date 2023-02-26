import DetailPage from '../views/pages/detail';
import LikePage from '../views/pages/favorite';
import HomePage from '../views/pages/home';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/like': LikePage,
  '/detail/:id': DetailPage,
};

export default routes;
