/* eslint-disable import/extensions */
import NowPlaying from '../views/pages/list_restaurants.js';
import Upcoming from '../views/pages/upcoming.js';
import Detail from '../views/pages/detail.js';
import Like from '../views/pages/like.js';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
