import {
  ModalWrapper,
  ModalContainer,
  MyForm,
  SubmitButton,
  QuitButton,
} from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MyInput } from '../global'
import { forwardRef, useRef } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'

const SignUp = forwardRef(
  (props, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
    const innerRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

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
          <MyForm>
            <label htmlFor="email">Email Address...</label>
            <MyInput type="email" name="email" />
            <label htmlFor="password">Password...</label>
            <MyInput type="password" name="password" />
            <SubmitButton type="submit" value="login" />
          </MyForm>
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

SignUp.displayName = 'SignUp'

export default SignUp
