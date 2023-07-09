import { styled } from 'styled-components'
import { Logo } from '../UI/logo'
import { Nav, NavStyled } from '../nav'
import pagesData from '../../router/pagesData'

const Container = styled.div`
padding:  30px;
display: flex;
align-items: center;
${NavStyled} {
  margin-left: auto;
}
`

const textItems = pagesData.filter(item => item.title !== 'home')

export function Header (): JSX.Element {
  return (
    <header>
      <Container>
        <Logo />
        <Nav navItems={ textItems }/>
      </Container>
    </header>
  )
}
