import type { routerType } from '../types/router.types'
import { Discover } from '../pages/Discover'
import { Home } from '../pages/Home'
import { Join } from '../pages/join'

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home title='ddd'/>,
    title: 'home'
  },
  {
    path: 'discover',
    element: <Discover />,
    title: 'discover'
  },
  {
    path: 'join',
    element: <Join />,
    title: 'join'
  }
]

export default pagesData
