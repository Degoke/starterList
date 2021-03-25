import styled from 'styled-components'
import { MyList, MyInput } from '../global'

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  padding: 0 5%;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  width: 90%;
  z-index: 1000;
`

export const RightNavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled(MyList)`
  margin: auto 0.5rem;
`

export const NavSearchBox = styled(MyInput)`
  background-color: ${(props) => props.theme.color.primary};
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
`
export const TagWrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: flex-end;
`
