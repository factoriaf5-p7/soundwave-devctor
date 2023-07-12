import { styled } from 'styled-components'

const CardContainer = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  max-width: 4rem;
  padding: 12px 19px;
  p { font-size: .8rem;}
`

interface CardProps {
  icon: string
  alt: string
  title: string
}

export const IconTextCard = ({ icon, alt, title }: CardProps): JSX.Element => {
  return (
    <>
    <CardContainer>
      <img src={icon} alt={alt} />
      <p>{title}</p>
    </CardContainer>

    </>
  )
}
