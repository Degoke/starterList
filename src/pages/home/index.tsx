import NavBar from '../../components/navbar'
import SearchTags from '../../components/navbar/searchtags'
import StartupCard from '../../components/startup-card'
import { CardSection, HomeWrapper } from './components'

const HomePage: React.FC = (): React.ReactElement => {
  return (
    <div>
      <NavBar />
      <HomeWrapper>
        <SearchTags />
        <CardSection>
          <StartupCard />
          <StartupCard />
          <StartupCard />
          <StartupCard />
          <StartupCard />
          <StartupCard />
        </CardSection>
      </HomeWrapper>
    </div>
  )
}

export default HomePage
