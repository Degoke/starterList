import DetailsPage from '../../pages/details'
import HomePage from '../../pages/home'
import RouteInterface from './interface'

const routes: RouteInterface[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/details',
    name: 'Details',
    component: DetailsPage,
  },
]

export default routes
