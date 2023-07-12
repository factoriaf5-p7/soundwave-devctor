import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

interface Btn {
  children?: ReactNode
  className?: string
  link: string
}
const BtnSmComponent = ({ children, className, link }: Btn): JSX.Element => {
  return (
    <>
      <button className={className}><Link to={link}>{ children }</Link></button>
    </>
  )
}

export const BtnSm = styled(BtnSmComponent)`
  background-color: var(--sky-300);
  font-size: .9rem;
  padding: 0.4rem .6rem;
  border-radius: 3px;
  &:hover {
    background-color: var(--sky-400);
  }
`
