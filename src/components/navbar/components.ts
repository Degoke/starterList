import styled from 'styled-components'
import { MyList, MyButton, MyInput } from '../global'

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  padding: 0 5%;
`

export const RightNavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled(MyList)`
  margin: auto 1rem;
`
export const TagButton = styled(MyButton)`
  background-color: ${(props) => props.theme.color.background};
`
export const NavSearchBox = styled(MyInput)`
  background-color: ${(props) => props.theme.color.primary};
  border-top: none;
  border-left: none;
  border-right: none;
`
export const TagWrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: flex-end;
`
