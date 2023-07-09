import { Route, Routes } from 'react-router-dom'
import type { routerType } from '../types/router.types'
import pagesData from './pagesData'
import Layout from './layout'

const Router = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={<Layout title={title}>{element}</Layout>} />
  })

  return <Routes>{pageRoutes}</Routes>
}

export default Router
