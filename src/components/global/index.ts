import styled from 'styled-components'

export const MyList = styled.li`
  list-style: none;
`
export const MyButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) => props.theme.color.background};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
  }
`
export const MyInput = styled.input`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.color.text};
`
