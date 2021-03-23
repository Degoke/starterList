import NavBar from '../../components/navbar'
import SearchTags from '../../components/navbar/searchtags'
import StartupCard from '../../components/startup-card'
import { CardSection, HomeWrapper } from './components'
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
        <SearchTags />
        {data
          .map((s) => s['founding-date'])
          .map((date, i) => {
            return (
              <>
                <h4 key={i}>{date}</h4>
                <CardSection>
                  {startups
                    .filter((startup) => startup['founding-date'] === date)
                    .map((startup, i) => (
                      <StartupCard key={i} startup={startup} />
                    ))}
                </CardSection>
              </>
            )
          })}
      </HomeWrapper>
    </div>
  )
}

export default HomePage
