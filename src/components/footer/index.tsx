import { styled } from 'styled-components'
interface SocialItemProps {
  icon: string
  alt: string
  title: string
  className?: string
}

const FooterContainer = styled.footer`
  background-color: var(--black);
  font-size: 1rem;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  ul {
    display: flex;
    gap: 1rem;
  }
  .container {
      display: flex;
      flex:1;
      justify-content: space-between;
      align-items: center;
  }

  .social-nav {
    display: flex;
    gap: .5rem;
  }
  @media (width > 1280px) {
    & > .container {
      flex: 1;
      max-width: var(--xl);
      margin-inline: auto;
    }
}
`

const SocialItemComponent = ({ icon, alt, title, className }: SocialItemProps): JSX.Element => {
  return (
    <div className={className}>
      <img src={icon} alt={alt} />
      <p>{title}</p>
    </div>
  )
}

const SocialItem = styled(SocialItemComponent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: .3rem;
  img {
    width: 20px;
    aspect-ratio: 1 / 1;
  }
`

export function Footer (): JSX.Element {
  return (
    <FooterContainer>
    <div className="container">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className='social-nav'>
        <SocialItem
          icon="twitter.svg"
          alt="Twitter icon"
          title="Twitter"
        />
        <SocialItem
          icon="facebook.svg"
          alt="Facebook icon"
          title="Facebook"
        />
      </div>
    </div>
    </FooterContainer>
  )
}
