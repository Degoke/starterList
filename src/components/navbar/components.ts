import styled from 'styled-components'
import { MyList, MyButton, MyInput } from '../global'

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  padding: 0 5%;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
`

export const RightNavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled(MyList)`
  margin: auto 0.5rem;
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
export const NavButton = styled(MyButton)`
  background-color: ${(props) => props.theme.color.primary};
`
