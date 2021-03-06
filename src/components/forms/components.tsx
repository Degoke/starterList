import styled from 'styled-components'
import { MyIconButton } from '../global/index'

export const ModalWrapper = styled.div`
  width: 60%;
  margin: 5% auto 2%;
  background-color: ${(props) => props.theme.color.primary};
  padding: 2rem;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  overflow: auto;
  @media all and (max-width: 600px) {
    padding: 1rem;
  }
  @media all and (max-width: 450px) {
    padding: 0.5rem;
    width: 85%;
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1001;
  display: none;
`
export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  input,
  select,
  textarea {
    margin-bottom: 1rem;
  }
`

export const SubmitButton = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) => props.theme.color.secondary};
  width: 35%;
  font-size: inherit;
  &:hover {
    background-color: ${(props) => props.theme.color.background};
    cursor: pointer;
  }
`

export const QuitButton = styled(MyIconButton)`
  float: right;
`

export const ProfileCardWrapper = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
  h2,
  h3 {
    margin-top: 2rem;
  }
  @media all and (max-width: 450px) {
    width: 85%;
  }
`
export const CardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
