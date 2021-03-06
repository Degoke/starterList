import {
  ModalWrapper,
  ModalContainer,
  QuitButton,
  ProfileCardWrapper,
  CardBox,
} from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { forwardRef, useRef } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'
import { Loading, MyButton, MyFullImage } from '../global'
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
      sessionStorage.clear()
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
              <MyFullImage
                height={50}
                width={50}
                src={props.data.profileImage}
              />
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
              <CardBox>
                {props.data.startups.map((startup, i) => (
                  <CommentBox className="profile" key={i}>
                    <Link to={`/details/${startup._id}`}>{startup.name}</Link>
                  </CommentBox>
                ))}
              </CardBox>

              <h3>Comments</h3>
              <CardBox>
                {props.data.comments.map((comment, i) => (
                  <CommentBox className="profile" key={i}>
                    {comment.comment}
                  </CommentBox>
                ))}
              </CardBox>
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
