import { useRef, useState } from 'react'
import {
  NavWrapper,
  RightNavWrapper,
  NavList,
  NavSearchBox,
  MobileNav,
  NavMenu,
} from './components'
import SignIn from '../forms/sign-in'
import { MyButton } from '../global'
import SignUp from '../forms/sign-up'
import AddStartup from '../forms/add-startup'
import { useLocation, Link } from 'react-router-dom'

export type NavLinksType = 'login' | 'register' | 'add'

const NavBar: React.FC = (): React.ReactElement => {
  const login = useRef<HTMLDivElement>(null)

  const register = useRef<HTMLDivElement>(null)

  const add = useRef<HTMLDivElement>(null)

  const menu = useRef<HTMLUListElement>(null)

  const [open, setOpen] = useState<boolean>(false)

  const { pathname } = useLocation()

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

  const toggleMenu = () => {
    setOpen(!open)
    if (menu.current) {
      if (open) {
        menu.current.style.display = 'flex'
      } else {
        menu.current.style.display = 'none'
      }
    }
  }
  return (
    <>
      <NavWrapper>
        <div>
          <p style={{ fontSize: '1.2rem' }}>starterList</p>
        </div>
        {pathname === '/' ? (
          <RightNavWrapper>
            <NavList>
              <NavSearchBox
                type="search"
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
        ) : (
          <RightNavWrapper>
            <MyButton as={Link} to="/">
              Back to Home
            </MyButton>
          </RightNavWrapper>
        )}
      </NavWrapper>
      <MobileNav>
        <div>
          <p style={{ fontSize: '1.2rem' }}>starterList</p>
        </div>
        {pathname === '/' ? (
          <RightNavWrapper>
            <MyButton onClick={toggleMenu}>Menu</MyButton>
          </RightNavWrapper>
        ) : (
          <RightNavWrapper>
            <MyButton as={Link} to="/">
              Back to Home
            </MyButton>
          </RightNavWrapper>
        )}
      </MobileNav>
      <NavMenu ref={menu}>
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
      </NavMenu>
      <SignIn ref={login} />
      <SignUp ref={register} />
      <AddStartup ref={add} />
    </>
  )
}

export default NavBar
