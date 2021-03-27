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

export interface StartupInterface {
  key: number
  startup: StartupDataInterface
  showProfile: () => void
  id: string
}

const StartupCard: React.FC<StartupInterface> = (
  props: StartupInterface
): React.ReactElement => {
  const history = useHistory()

  const showDetails = () => {
    history.push(`/details/${props.id}`)
  }

  return (
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
              <div>{props.startup.comments}</div>
            </MyIconButton>
          </CardBottomGroup>
          <CardBottomGroup>
            <MyIconButton>
              <ThumbUpRoundedIcon />
              <div>{props.startup.ratings}</div>
            </MyIconButton>
          </CardBottomGroup>
        </CardBottomGroup>
        <div>
          <MyIconButton onClick={props.showProfile}>
            <AccountCircleRoundedIcon fontSize="large" />
          </MyIconButton>
        </div>
      </CardBottomWrapper>
    </CardWrapper>
  )
}

export default StartupCard
