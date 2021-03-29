import { useRef, useState, useEffect, useContext } from 'react'
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
import { MainContext } from '../../utils/global/context'
import ProfileCard from '../forms/profile-card'
import { UserInterface } from '../../interfaces/global'
import axios from 'axios'

export interface NavPropsInterface {
  search?: (e) => void
}

const NavBar: React.FC<NavPropsInterface> = ({
  search,
}): React.ReactElement => {
  const login = useRef<HTMLDivElement>(null)

  const register = useRef<HTMLDivElement>(null)

  const add = useRef<HTMLDivElement>(null)

  const menu = useRef<HTMLUListElement>(null)

  const [open, setOpen] = useState<boolean>(false)

  const { pathname } = useLocation()

  const { currentUser } = useContext(MainContext)

  const [userName, setUserName] = useState<string | null>(null)

  const [data, setData] = useState<UserInterface>()

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

  useEffect(() => {
    setUserName(localStorage.getItem('name'))
  }, [currentUser])

  const toggleMenu = () => {
    setOpen(!open)
    if (menu.current) {
      if (!open) {
        menu.current.style.display = 'flex'
      } else {
        menu.current.style.display = 'none'
      }
    }
  }

  const profile = useRef<HTMLDivElement>(null)

  const showProfile = () => {
    if (profile.current) {
      profile.current.style.display = 'flex'
    }
    const getCurrentUser = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `https://starter-list-backend.glitch.me/api/users/${currentUser}`
        )

        if (response.data.status === 200) {
          setData(response.data.data.user)
        }
      } catch (err) {
        alert('error')
      }
    }
    getCurrentUser()
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
                onChange={search}
              />
            </NavList>
            <NavList>
              <MyButton id="add" onClick={showLogin}>
                Add a startup
              </MyButton>
            </NavList>
            {currentUser !== 'none' ? (
              <>
                <NavList>
                  <MyButton id="register" onClick={showProfile}>
                    {userName}
                  </MyButton>
                </NavList>
              </>
            ) : (
              <>
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
              </>
            )}
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
        {currentUser !== 'none' ? (
          <>
            <NavList>
              <MyButton id="register" onClick={showProfile}>
                {userName}
              </MyButton>
            </NavList>
          </>
        ) : (
          <>
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
          </>
        )}
      </NavMenu>
      <SignIn ref={login} />
      <SignUp ref={register} />
      <AddStartup ref={add} />
      <ProfileCard ref={profile} data={data} />
    </>
  )
}

export default NavBar
