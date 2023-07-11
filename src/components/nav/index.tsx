import { styled } from 'styled-components'
import type { routerType } from '../../types/router.types'
import { Link } from 'react-router-dom'

type Navigation = Omit<routerType, 'element'>

export const NavStyled = styled.nav`
color: inherit;
margin-inline-start: auto;
`

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
`

const NavItem = styled.li`
  text-transform: capitalize;
`

interface NavProps {
  navItems: Navigation[]
}
export const Nav = ({ navItems }: NavProps): JSX.Element => {
  return (
    <NavStyled>
      <NavList>
        {navItems.map(item => (
          <NavItem key={ item.path }><Link to={`/${item.path}`} >{ item.title }</Link></NavItem>
        ))}
      </NavList>
    </NavStyled>
  )
}
