import Home from '../views/page/home';
import Detail from '../views/page/detail';
import Favorite from '../views/page/like';

const Routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/like': Favorite,
};

export default Routes;
