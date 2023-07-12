import { Title } from '../../components/UI/title'
import { IconTextCard } from '../../components/UI/icon-text-card'
import { styled } from 'styled-components'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const PageContainer = styled.div`
  --gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap);
  max-width: var(--xl);
  margin-inline: auto;
  margin-block: auto;
  padding: 0 30px;
  
  @media (width > 1280px) {
    padding: 0;
  }
  
`

const Half = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  flex: 1;
  margin-block: auto;
`

export const Discover = (): JSX.Element => {
  useDocumentTitle('Discover')
  return (
    <PageContainer>
      <Half>
        <Title isBold={false}>Discover new music</Title>
        <IconContainer>
          <IconTextCard
            icon='/microphone.svg'
            alt='Microphone icon'
            title='Charts'
          />
          <IconTextCard
            icon='/albums.svg'
            alt='Albums icon'
            title='Albums'
          />
          <IconTextCard
            icon='/more.svg'
            alt='More music icon'
            title='More'
          />
        </IconContainer>
        <p>By joining you can benefit by listening to the latest albums released.</p>
      </Half>
      <div>
        <img src="/covers.jpg" alt="" />
      </div>
    </PageContainer>
  )
}
