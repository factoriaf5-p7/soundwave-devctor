import type { ReactNode } from 'react'
import { styled } from 'styled-components'
// import '@fontsource/poppins/700.css'

interface TitleProps {
  children: ReactNode
  className?: string
  $isBold?: boolean
}

const TitleComponent = ({ children, className }: TitleProps): JSX.Element => {
  return (
    <>
      <h1 className={className}>{ children }</h1>
    </>
  )
}

export const Title = styled(TitleComponent)<{ isBold: boolean }>`
  font-size: 4rem;
  font-weight: ${(props) => props.isBold ? '700' : '400'};
`

export const BtnBase = styled.button`
  background-color: blue;
  color: white;
  &:hover {
    background-color: aliceblue;
  }

`

export const BtnLarge = styled(BtnBase)`
width: 100%;
`
