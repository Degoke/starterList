import {
  NavWrapper,
  RightNavWrapper,
  NavList,
  NavSearchBox,
} from './components'
import { MyButton } from '../global'

const NavBar: React.FC = (): React.ReactElement => {
  return (
    <NavWrapper>
      <div>
        <p>starterList</p>
      </div>
      <RightNavWrapper>
        <NavList>
          <NavSearchBox type="search" placeholder="Find the next Unicorn..." />
        </NavList>
        <NavList>
          <MyButton>Add a startup</MyButton>
        </NavList>
        <NavList>
          <MyButton>Login</MyButton>
        </NavList>
        <NavList>
          <MyButton>Signup</MyButton>
        </NavList>
      </RightNavWrapper>
    </NavWrapper>
  )
}

export default NavBar
