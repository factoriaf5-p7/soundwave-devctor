// import { styled } from 'styled-components'

import useDocumentTitle from '../../hooks/useDocumentTitle'

export const Home = (props: any): JSX.Element => {
  useDocumentTitle('Home')
  return (
    <>
        <h1>Home here </h1>
    </>
  )
}
