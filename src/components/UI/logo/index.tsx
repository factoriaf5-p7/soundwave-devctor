import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
}

export const LogoComponent = ({ className }: LogoProps): JSX.Element => (
  <Link to='/'>
    <div className={className}>
      <img src="/logo.png" alt="Soundwave Logo" />
      <span>Soundwave</span>
    </div>
  </Link>
)

export const Logo = styled(LogoComponent)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
