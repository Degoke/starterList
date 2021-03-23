import { useRef } from 'react'
import {
  NavWrapper,
  RightNavWrapper,
  NavList,
  NavSearchBox,
  NavButton,
} from './components'
import SignIn from '../forms/sign-in'

const NavBar: React.FC = (): React.ReactElement => {
  const login = useRef<HTMLDivElement>(null)
  const showLogin = (): void => {
    if (login.current) {
      login.current.style.display = 'flex'
    }
  }
  return (
    <>
      <NavWrapper>
        <div>
          <p>starterList</p>
        </div>
        <RightNavWrapper>
          <NavList>
            <NavSearchBox
              type="search"
              size={50}
              placeholder="Find the next Unicorn..."
            />
          </NavList>
          <NavList>
            <NavButton>Add a startup</NavButton>
          </NavList>
          <NavList>
            <NavButton>Sign Up</NavButton>
          </NavList>
          <NavList>
            <NavButton onClick={showLogin}>Sign In</NavButton>
          </NavList>
        </RightNavWrapper>
      </NavWrapper>
      <SignIn ref={login} />
    </>
  )
}

export default NavBar
