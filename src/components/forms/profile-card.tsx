import { ModalWrapper, ModalContainer, QuitButton } from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { forwardRef, useRef } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'

import { Loading } from '../global'
import { UserInterface } from '../../interfaces/global'

export interface ProfileProps {
  data: UserInterface | undefined
}

const ProfileCard = forwardRef(
  (props: ProfileProps, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
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
          {props.data === undefined ? (
            <Loading>Loading</Loading>
          ) : (
            <>
              <h1>Profile</h1>
              <p>{props.data.name}</p>
              <p>Occupation</p>
              {props.data.occupation}
              <p>startups</p>
              {props.data.startups.map((startup) => startup.name)}
              <h1>Comments</h1>
              {props.data.comments.map((comment) => comment)}
            </>
          )}
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

ProfileCard.displayName = 'ProfileCard'

export default ProfileCard
