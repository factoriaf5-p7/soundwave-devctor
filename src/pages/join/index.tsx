import { styled } from 'styled-components'
import { Title } from '../../components/UI/title'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const Container = styled.div`
  ${Title} {
    & span {
      color: var(--accent);
    }
  }
`

export const Join = (): JSX.Element => {
  useDocumentTitle('Join')
  return (
    <Container>
      <Title isBold={true}>Join the <span>fun</span></Title>
    </Container>
  )
}
