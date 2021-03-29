import styled from 'styled-components'

export const MyList = styled.li`
  list-style: none;
`
export const MyButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.color.text};
  background-color: inherit;
  font-size: inherit;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.secondary};
  }
`
export const MyInput = styled.input`
  padding: 0.5rem;
  color: ${(props) => props.theme.color.text};
  border: none;
  background-color: ${(props) => props.theme.color.secondary};
  font-size: inherit;
  &:focus {
    border-color: ${(props) => props.theme.color.secondary};
  }
`

export const MyIconButton = styled.button`
  padding: none;
  border: none;
  color: ${(props) => props.theme.color.text};
  background-color: inherit;
  margin: auto 0.5rem;
  p {
    visibility: hidden;
  }
  &:hover {
    cursor: pointer;
    color: #ffffff;
    transform: scale(1.1);
    p {
      visibility: visible;
    }
  }
`
export const MyTextField = styled.textarea`
  padding: 0.5rem;
  color: ${(props) => props.theme.color.text};
  border: none;
  background-color: ${(props) => props.theme.color.secondary};
  font-size: inherit;
  resize: none;
  &:focus {
    border-color: ${(props) => props.theme.color.secondary};
  }
`
export const MySelect = styled.select`
  padding: 0.5rem;
  color: ${(props) => props.theme.color.text};
  border: none;
  background-color: ${(props) => props.theme.color.secondary};
  font-size: inherit;
  &:focus {
    border-color: ${(props) => props.theme.color.secondary};
  }
`
export const MyFullImage = styled.img`
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
  margin: 1rem auto;
`
export const Loading = styled.div`
  margin: 20% auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: dashed 3px #d0ce03;
  animation-name: loader-spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
