import { styled } from 'styled-components'

const Container = styled.div`
padding:  30px;
background-color: red;
display: flex;
`

export function Header (): JSX.Element {
  return (
    <header>
      <Container>
        Header
      </Container>
    </header>
  )
}
