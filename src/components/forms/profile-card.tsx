import { ModalWrapper, ModalContainer, QuitButton } from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { forwardRef, useRef } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'
import data from '../../mock-backend/mock-data'

const ProfileCard = forwardRef(
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
          <h1>Profile</h1>
          <img src={data[6].ownerImage} />
          <h2>{data[6].owner}</h2>
          <p>Occupation</p>
          <p>{data[6].shortDescription}</p>
          <p>startups</p>
          <img src={data[6].logo} />
          <h1>Comments</h1>
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

ProfileCard.displayName = 'ProfileCard'

export default ProfileCard
