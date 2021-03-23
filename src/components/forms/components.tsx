import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 60%;
  margin: 8% auto;
  height: 60vh;
  background-color: ${(props) => props.theme.color.primary};
  padding: 2rem;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
`
export const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
`
export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
`
