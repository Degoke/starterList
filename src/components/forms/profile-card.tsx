import {
  ModalWrapper,
  ModalContainer,
  QuitButton,
  ProfileCardWrapper,
} from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { forwardRef, useRef } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'
import { Loading, MyButton } from '../global'
import { UserInterface } from '../../interfaces/global'
import { CommentBox } from '../../pages/details/components'
import { useHistory } from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Link } from 'react-router-dom'

export interface ProfileProps {
  data: UserInterface | undefined
}

const ProfileCard = forwardRef(
  (props: ProfileProps, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
    const innerRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

    const history = useHistory()

    const closeLogin = () => {
      if (combinedRef) {
        const final = combinedRef as React.RefObject<HTMLDivElement>
        if (final.current) {
          final.current.style.display = 'none'
        }
      }
    }

    const logout = () => {
      localStorage.clear()
      closeLogin()
      history.push('/')
    }

    return (
      <ModalContainer ref={combinedRef}>
        <ModalWrapper>
          <QuitButton onClick={closeLogin}>
            <CloseRoundedIcon />
          </QuitButton>
          {props.data === undefined ? (
            <Loading />
          ) : (
            <ProfileCardWrapper>
              <h1>Profile</h1>
              <h2>{props.data.name}</h2>
              <p>{props.data.occupation}</p>
              <p>{props.data.phone}</p>
              <div>
                <a href={props.data.github}>
                  <TwitterIcon />
                </a>
                <a href={props.data.twitter}>
                  <GitHubIcon />
                </a>
              </div>

              <h3>startups</h3>
              {props.data.startups.map((startup, i) => (
                <CommentBox key={i}>
                  <Link to={`/details/${startup._id}`}>{startup.name}</Link>
                </CommentBox>
              ))}
              <h3>Comments</h3>
              {props.data.comments.map((comment, i) => (
                <CommentBox key={i}>{comment.comment}</CommentBox>
              ))}
              <MyButton onClick={logout}>Logout</MyButton>
            </ProfileCardWrapper>
          )}
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

ProfileCard.displayName = 'ProfileCard'

export default ProfileCard
