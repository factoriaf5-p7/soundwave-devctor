import { styled } from 'styled-components'
import { Title } from '../../components/UI/title'
import { BtnSm } from '../../components/UI/btn-sm'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const Container = styled.div`
  padding: 0 30px;
  margin-block-start: auto;
  margin-block-end: 13rem;
  max-width: 3rem;
  flex:1;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  `

const Section = styled.section`
display: flex;
@media (width > 1024px) {
  background-image: url(/landing-page-girl.png);
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: 25% 100%;
  max-width: var(--xl);
  margin: 0 auto;
  flex: 1;
  ${Container} {
    & * + * {
      margin-block-start: 1rem;
    }
    max-width: 50%;
    display: block;
    margin-inline-start: auto;
    margin-block-end: auto;
    p { max-width: 30ch}
  }
}
`

export const Home = (props: any): JSX.Element => {
  useDocumentTitle('Home')
  return (
    <>
    <Section>
      <Container>
        <Title isBold={false}>Feel the music</Title>
        <p>Stream over 20 thousand songs with a click</p>
        <BtnSm link='csd'>Join now</BtnSm>
    </Container>
    </Section>
    </>
  )
}
