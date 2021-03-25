import NavBar from '../../components/navbar'
import StartupCard from '../../components/startup-card'
import {
  CardSection,
  HomeDisplayArea,
  HomeSideArea,
  HomeWrapper,
} from './components'
import data from '../../mock-backend/mock-data'
import { useContext, useState, useEffect } from 'react'
import { MainContext } from '../../utils/global/context'

const HomePage: React.FC = (): React.ReactElement => {
  const { currentTag } = useContext(MainContext)

  const [startups, setStartups] = useState(data)

  useEffect(() => {
    if (currentTag === 'All') {
      setStartups(data)
    } else {
      setStartups(data.filter((startup) => currentTag === startup.industry))
    }
  }, [currentTag])

  return (
    <div>
      <NavBar />
      <HomeWrapper>
        <HomeDisplayArea>
          <div>
            <h3>Top Rated Startups</h3>
            <CardSection>
              {data
                .sort((a, b) => (b.ratings > a.ratings ? 1 : -1))
                .slice(0, 8)
                .map((d, i) => (
                  <StartupCard key={i} startup={d} />
                ))}
            </CardSection>
          </div>

          {data
            .map((s) => s.dateFounded)
            .map((date, i) => {
              return (
                <>
                  <h4 key={i}>{date}</h4>
                  <CardSection>
                    {startups
                      .filter((startup) => startup.dateFounded === date)
                      .map((startup, i) => (
                        <StartupCard key={i} startup={startup} />
                      ))}
                  </CardSection>
                </>
              )
            })}
        </HomeDisplayArea>
        <HomeSideArea>
          <h1>Adverts</h1>
        </HomeSideArea>
      </HomeWrapper>
    </div>
  )
}

export default HomePage
