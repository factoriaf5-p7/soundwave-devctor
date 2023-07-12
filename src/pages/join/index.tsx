import { styled } from 'styled-components'
import { Title } from '../../components/UI/title'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { BtnSm } from '../../components/UI/btn-sm'

interface InputProps {
  type: string
  label: string
}
const Container = styled.section`
  padding: 0 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  max-width: var(--xl);
  margin-inline: auto;
  ${Title} {
  flex: 2;
  & span {
    color: var(--accent);
  }
  }
  @media (width > 1280px){
    br { display: none; }
  }
`

const Form = styled.form`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 700;
  padding: 16px 35px;
  border-radius: 16px;
  flex: 1;
  margin-block-end: 3rem;

  & label {
    display: flex;
    flex-direction: column;
    gap: .7rem;
  }
  input {
    font-weight: 400;
    border: 1px solid var(--dark-100);
    border-radius: 6px;
    padding: 8px 12px;
    &:focus {
      border: 1px solid var(--sky-500);
    }
  }
    & button {
      text-align: center;
      margin-block-start: 1rem;
      border-radius: 6px;
      font-weight: 400;
      padding: 8px 12px;
      width: 100%;
    }
`
const InputComponent = ({ type, label }: InputProps): JSX.Element => {
  return (
    <label>
      {label}
      <input type={type} />
    </label>
  )
}

export const Join = (): JSX.Element => {
  useDocumentTitle('Join')
  return (
    <Container>
      <Title isBold={true}>Join the <br /><span>fun</span></Title>
      <Form>
        <InputComponent type="text" label="Name:" />
        <InputComponent type="email" label="Email:" />
        <InputComponent type="password" label="Password:" />
        <BtnSm link="/join">Join now</BtnSm>
      </Form>
    </Container>
  )
}
