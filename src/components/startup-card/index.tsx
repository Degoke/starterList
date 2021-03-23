import {
  CardWrapper,
  CardBottomWrapper,
  CardTopWrapper,
  CardMiddleWrapper,
  CardBottomGroup,
  AvatarImage,
  ImageWrapper,
} from './components'
import { StartupDataInterface } from '../../interfaces/global'
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'

export interface StartupInterface {
  key: number
  startup: StartupDataInterface
}

const StartupCard: React.FC<StartupInterface> = (
  props: StartupInterface
): React.ReactElement => {
  return (
    <CardWrapper>
      <div>
        <ImageWrapper src={props.startup.logo} />
      </div>
      <CardTopWrapper>
        <AvatarImage src={props.startup.logo} alt="logo" />
        <div>
          <div>{props.startup.name}</div>
          <div>{props.startup.industry}</div>
        </div>
      </CardTopWrapper>
      <CardMiddleWrapper>
        {props.startup['short-description']}
      </CardMiddleWrapper>
      <CardBottomWrapper>
        <CardBottomGroup>
          <ModeCommentRoundedIcon />
          <div>{props.startup.comments.length}</div>
        </CardBottomGroup>
        <CardBottomGroup>
          <ThumbUpRoundedIcon />
          <div>{props.startup.rating}</div>
        </CardBottomGroup>
        <div>
          <AccountCircleRoundedIcon />
        </div>
      </CardBottomWrapper>
    </CardWrapper>
  )
}

export default StartupCard
