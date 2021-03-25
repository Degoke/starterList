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
        <ImageWrapper src={props.startup.images} />
      </div>
      <CardTopWrapper>
        <div>
          <div>{props.startup.name}</div>
          <div>{props.startup.industry}</div>
        </div>
      </CardTopWrapper>
      <CardMiddleWrapper>{props.startup.shortDescription}</CardMiddleWrapper>
      <CardBottomWrapper>
        <CardBottomGroup>
          <MyIconButton>
            <ModeCommentRoundedIcon />
            <div>{props.startup.comments}</div>
          </MyIconButton>
        </CardBottomGroup>
        <CardBottomGroup>
          <MyIconButton>
            <ThumbUpRoundedIcon />
            <div>{props.startup.ratings}</div>
          </MyIconButton>
        </CardBottomGroup>
        <div>
          <MyIconButton>
            <AccountCircleRoundedIcon fontSize="large" />
          </MyIconButton>
        </div>
      </CardBottomWrapper>
    </CardWrapper>
  )
}

export default StartupCard
