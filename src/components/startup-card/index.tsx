import {
  CardWrapper,
  CardBottomWrapper,
  CardTopWrapper,
  CardMiddleWrapper,
  CardBottomGroup,
} from './components'
import { MyButton } from '../global'

const StartupCard: React.FC = (): React.ReactElement => {
  return (
    <CardWrapper>
      <CardTopWrapper>
        <div>
          <h1>FT</h1>
        </div>
        <div>
          <div>Felt teachers</div>
          <div>Education tech</div>
        </div>
      </CardTopWrapper>
      <CardMiddleWrapper>
        An ed tech platform Lorem ipsum, dolor sit amet consectetur adipisicing
        elit.
      </CardMiddleWrapper>
      <CardBottomWrapper>
        <CardBottomGroup>
          <MyButton>C</MyButton>
          <div>12</div>
        </CardBottomGroup>
        <CardBottomGroup>
          <MyButton>+</MyButton>
          <div>78</div>
        </CardBottomGroup>
        <div>
          <MyButton>Action</MyButton>
        </div>
      </CardBottomWrapper>
    </CardWrapper>
  )
}

export default StartupCard
