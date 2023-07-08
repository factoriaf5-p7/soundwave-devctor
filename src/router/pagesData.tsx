import type { routerType } from '../types/router.types'
import { Discover } from '../pages/Discover/index'
import { Home } from '../pages/Home/index'

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home'
  },
  {
    path: 'discover',
    element: <Discover />,
    title: 'discover'
  }
]

export default pagesData
