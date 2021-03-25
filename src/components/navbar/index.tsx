import { useRef } from 'react'
import {
  NavWrapper,
  RightNavWrapper,
  NavList,
  NavSearchBox,
} from './components'
import SignIn from '../forms/sign-in'
import { MyButton } from '../global'
import SignUp from '../forms/sign-up'
import AddStartup from '../forms/add-startup'

export type NavLinksType = 'login' | 'register' | 'add'

const NavBar: React.FC = (): React.ReactElement => {
  const login = useRef<HTMLDivElement>(null)

  const register = useRef<HTMLDivElement>(null)

  const add = useRef<HTMLDivElement>(null)

  const showLogin = (e: React.MouseEvent<HTMLButtonElement>): void => {
    switch ((e.target as Element).id) {
      case 'login':
        if (login.current) {
          login.current.style.display = 'flex'
        }
        break
      case 'register':
        if (register.current) {
          register.current.style.display = 'flex'
        }
        break
      case 'add':
        if (add.current) {
          add.current.style.display = 'flex'
        }
        break
      default:
        return
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
            <MyButton id="add" onClick={showLogin}>
              Add a startup
            </MyButton>
          </NavList>
          <NavList>
            <MyButton id="register" onClick={showLogin}>
              Sign Up
            </MyButton>
          </NavList>
          <NavList>
            <MyButton id="login" onClick={showLogin}>
              Sign In
            </MyButton>
          </NavList>
        </RightNavWrapper>
      </NavWrapper>
      <SignIn ref={login} />
      <SignUp ref={register} />
      <AddStartup ref={add} />
    </>
  )
}

export default NavBar
