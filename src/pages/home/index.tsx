import NavBar from '../../components/navbar'
import StartupCard from '../../components/startup-card'
import {
  CardSection,
  DisplaySet,
  HomeDisplayArea,
  HomeSideArea,
  HomeWrapper,
  FilterDiv,
} from './components'
import data from '../../mock-backend/mock-data'
import { useContext, useState, useEffect, useRef } from 'react'
import { MainContext } from '../../utils/global/context'
import { MyInput, MySelect } from '../../components/global'
import { MyForm, SubmitButton } from '../../components/forms/components'
import ProfileCard from '../../components/forms/profile-card'

const HomePage: React.FC = (): React.ReactElement => {
  const { currentTag } = useContext(MainContext)

  const [startups, setStartups] = useState(data)

  const profile = useRef<HTMLDivElement>(null)

  const dinstinctDates = Array.from(new Set(data.map((x) => x.dateAdded)))

  const dinstinctIndustries = Array.from(new Set(data.map((x) => x.industry)))

  const dinstinctLocations = Array.from(new Set(data.map((x) => x.location)))

  const fundingRounds = Array.from(new Set(data.map((x) => x.fundRaisingRound)))

  const showProfile = () => {
    if (profile.current) {
      profile.current.style.display = 'flex'
    }
  }

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
      <ProfileCard ref={profile} />
      <HomeWrapper>
        <HomeDisplayArea>
          <h1>Find the latest startups...</h1>
          <DisplaySet>
            <h3>Top Rated Startups</h3>
            <CardSection>
              {data
                .sort((a, b) => (b.ratings > a.ratings ? 1 : -1))
                .slice(0, 3)
                .map((d, i) => (
                  <StartupCard
                    key={i}
                    startup={d}
                    showProfile={showProfile}
                    id={d.id.$oid}
                  />
                ))}
            </CardSection>
          </DisplaySet>

          {dinstinctDates.map((date, i) => {
            return (
              <DisplaySet key={i}>
                <h4>{date}</h4>
                <CardSection>
                  {startups
                    .filter((startup) => startup.dateAdded === date)
                    .map((startup, i) => (
                      <StartupCard
                        key={i}
                        startup={startup}
                        showProfile={showProfile}
                        id={startup.id.$oid}
                      />
                    ))}
                </CardSection>
              </DisplaySet>
            )
          })}
        </HomeDisplayArea>
        <HomeSideArea>
          <h1>Sort</h1>
          <label>
            <MySelect name="sort">
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </MySelect>
          </label>
          <h1>Filter</h1>
          <FilterDiv>
            <label htmlFor="industry">By Industry</label>

            <MySelect name="industry">
              <option value="all">All</option>
              {dinstinctIndustries.map((ind, i) => (
                <option key={i} value={ind}>
                  {ind.toUpperCase()}
                </option>
              ))}
            </MySelect>
            <label htmlFor="location">By Location</label>

            <MySelect name="location">
              <option value="all">All</option>
              {dinstinctLocations.map((ind, i) => (
                <option key={i} value={ind}>
                  {ind.toUpperCase()}
                </option>
              ))}
            </MySelect>

            <label htmlFor="funding">By Funding Round</label>

            <MySelect name="funding">
              <option value="all">All</option>
              {fundingRounds.map((ind, i) => (
                <option key={i} value={ind}>
                  {ind.toUpperCase()}
                </option>
              ))}
            </MySelect>
          </FilterDiv>

          <h1>Subscribe to our Newsletter</h1>
          <MyForm>
            <label htmlFor="email">Email Address</label>

            <MyInput type="email" name="subscribe" />

            <SubmitButton value="Subscribe" />
          </MyForm>
        </HomeSideArea>
      </HomeWrapper>
    </div>
  )
}

export default HomePage
