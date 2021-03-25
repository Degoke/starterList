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
  &:hover {
    cursor: pointer;
    color: #ffffff;
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
