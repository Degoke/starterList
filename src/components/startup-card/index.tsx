import {
  CardWrapper,
  CardBottomWrapper,
  CardTopWrapper,
  CardMiddleWrapper,
  CardBottomGroup,
  ImageWrapper,
} from './components'
import { StartupDataInterface } from '../../interfaces/global'
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { MyIconButton } from '../global'
import { useHistory } from 'react-router-dom'
import { useState, useRef } from 'react'
import axios from 'axios'
import ProfileCard from '../forms/profile-card'
import { UserInterface } from '../../interfaces/global'

export interface StartupInterface {
  key: number
  startup: StartupDataInterface
  id: string
}

const StartupCard: React.FC<StartupInterface> = (
  props: StartupInterface
): React.ReactElement => {
  const history = useHistory()

  const [votes, setVotes] = useState(props.startup.ratings)

  const [data, setData] = useState<UserInterface>()

  const vote = useRef<HTMLButtonElement | null>(null)

  const showDetails = () => {
    history.push(`/details/${props.id}#discussion`)
  }

  const upVote = async (): Promise<void> => {
    setVotes((prevVotes) => prevVotes + 1)
    try {
      const response = await axios.post(
        `https://starter-list-backend.glitch.me/api/startups/${props.id}/upvote`
      )
      if (response.data.status === 200) {
        setVotes((prevVotes) => prevVotes + 1)
        if (vote.current) {
          vote.current.style.color = '#000000'
        }
      }
    } catch (err) {
      alert(`${err}voting`)
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
          `https://starter-list-backend.glitch.me/api/users/${props.startup.owner._id}`
        )

        if (response.data.status === 200) {
          setData(response.data.data.user)
        }
      } catch (err) {
        alert(`${err}error`)
      }
    }
    getCurrentUser()
  }

  return (
    <>
      <CardWrapper>
        <div>
          <ImageWrapper src={props.startup.images} onClick={showDetails} />
        </div>
        <CardTopWrapper onClick={showDetails}>
          <div>
            <div style={{ fontSize: '1.2rem' }}>{props.startup.name}</div>
            <div style={{ fontSize: '0.6rem' }}>{props.startup.industry}</div>
          </div>
        </CardTopWrapper>
        <CardMiddleWrapper onClick={showDetails}>
          {props.startup.shortDescription}
        </CardMiddleWrapper>
        <CardBottomWrapper>
          <CardBottomGroup>
            <CardBottomGroup>
              <MyIconButton>
                <ModeCommentRoundedIcon onClick={showDetails} />
                <div>{props.startup.comments?.length}</div>
              </MyIconButton>
            </CardBottomGroup>
            <CardBottomGroup>
              <MyIconButton onClick={upVote} ref={vote}>
                <ThumbUpRoundedIcon />
                <div>{votes}</div>
              </MyIconButton>
            </CardBottomGroup>
          </CardBottomGroup>
          <div>
            <MyIconButton onClick={showProfile}>
              <AccountCircleRoundedIcon fontSize="large" />
            </MyIconButton>
          </div>
        </CardBottomWrapper>
      </CardWrapper>
      <ProfileCard ref={profile} data={data} />
    </>
  )
}

export default StartupCard
