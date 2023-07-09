import { Header } from '../components/header/'
import { Footer } from '../components/footer'
import { styled } from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(/blue-circle.svg),url(/blue-circle.svg), url(/pink-circle.svg), linear-gradient(var(--darker), var(--darker));
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: 150% 110%, 40% 20%, 10% 90%, center center;
  background-size: 220px, 100px, 130px, cover;
`
const Main = styled.main`
  flex: 1;
`

const Layout = ({ children, title }: { children: React.ReactNode, title: string }): JSX.Element => {
  return (
    <AppContainer className={title}>
      <Header />
      <Main>
      {children}
      </Main>
      <Footer />
    </AppContainer>
  )
}

export default Layout
