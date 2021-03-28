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
import { useHistory } from 'react-router-dom'
import { MainContext } from '../../utils/global/context'

const SignUp = forwardRef(
  (props, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
    const innerRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

    const [data, setData] = useState({})

    const history = useHistory()

    const { setCurrentUser } = useContext(MainContext)

    const addUser = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()
      try {
        const response = await axios.post(
          'https://starter-list-backend.glitch.me/api/users/create',
          data
        )

        if (response.data.status === 200) {
          localStorage.setItem('name', response.data.data.user.name)
          localStorage.setItem('user', response.data.data.user._id)
          if (setCurrentUser) {
            setCurrentUser(response.data.data.user._id)
          }
          alert(`${response.data.message} User added`)
          closeLogin()
          history.push('/')
        }
      } catch (err) {
        alert(`${err}Error Adding Startup`)
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
          <MyForm onSubmit={addUser}>
            <label htmlFor="name">Full Name..</label>
            <MyInput type="text" name="name" onChange={handleChange} />
            <label htmlFor="email">Email Address...</label>
            <MyInput type="email" name="email" onChange={handleChange} />
            <label htmlFor="phone">Phone Number</label>
            <MyInput type="text" name="phone" onChange={handleChange} />
            <label htmlFor="occupation">Occupation...</label>
            <MyInput type="text" name="occupation" onChange={handleChange} />
            <label htmlFor="github">Github Link...</label>
            <MyInput type="text" name="github" onChange={handleChange} />
            <label htmlFor="twitter">Twitter Link...</label>
            <MyInput type="text" name="twitter" onChange={handleChange} />
            <label htmlFor="profileImage">Profile Image...</label>
            <MyInput
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
            />
            <label htmlFor="password">Password...</label>
            <MyInput type="password" name="password" onChange={handleChange} />
            <SubmitButton type="submit" value="Register" />
          </MyForm>
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

SignUp.displayName = 'SignUp'

export default SignUp
