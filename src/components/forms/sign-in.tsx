import {
  ModalWrapper,
  ModalContainer,
  MyForm,
  SubmitButton,
  QuitButton,
} from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MyInput } from '../global'
import { forwardRef, useRef, useState, useContext } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'
import axios from 'axios'
import { MainContext } from '../../utils/global/context'
import { useHistory } from 'react-router-dom'

const SignIn = forwardRef(
  (props, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
    const innerRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

    const [data, setData] = useState({})

    const history = useHistory()

    const { setCurrentUser } = useContext(MainContext)

    const login = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()
      try {
        const response = await axios.post(
          'https://starter-list-backend.glitch.me/api/users/login',
          data
        )
        if (response.data.status === 200) {
          localStorage.setItem('user', response.data.data.user._id)
          localStorage.setItem('name', response.data.data.user.name)
          if (setCurrentUser) {
            setCurrentUser(response.data.data.user._id)
          }

          alert(`${response.data.message} Signed in`)
          closeLogin()
          history.push('/')
        }
      } catch (err) {
        alert(`${err}Error Signing in`)
      }
    }

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }

    const closeLogin = () => {
      if (combinedRef) {
        const final = combinedRef as React.RefObject<HTMLDivElement>
        if (final.current) {
          final.current.style.display = 'none'
        }
      }
    }
    return (
      <ModalContainer ref={combinedRef}>
        <ModalWrapper>
          <QuitButton onClick={closeLogin}>
            <CloseRoundedIcon />
          </QuitButton>
          <h1>Login</h1>
          <MyForm onSubmit={login}>
            <label htmlFor="email">Email Address...</label>
            <MyInput
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password...</label>
            <MyInput
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit" value="login" />
          </MyForm>
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

SignIn.displayName = 'SignIn'

export default SignIn
