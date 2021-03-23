import { ModalWrapper, ModalContainer, MyForm } from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MyButton } from '../../components/global'
import { forwardRef, useRef, useEffect } from 'react'

const useCombinedRefs = (
  ...refs: React.Ref<HTMLDivElement>[]
): React.Ref<HTMLDivElement> => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

const SignIn = forwardRef(
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
          <MyButton onClick={closeLogin}>
            <CloseRoundedIcon />
          </MyButton>
          <h1>Login</h1>
          <MyForm>
            <label htmlFor="email">Email Address...</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password...</label>
            <input type="password" name="password" />
            <input type="submit" value="login" />
          </MyForm>
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

SignIn.displayName = 'SignIn'

export default SignIn
