/* eslint-disable @typescript-eslint/no-explicit-any */
import NavBar from '../../components/navbar'
import StartupCard from '../../components/startup-card'
import {
  CardSection,
  DisplaySet,
  HomeDisplayArea,
  HomeSideArea,
  HomeWrapper,
} from './components'
import { useState, useEffect, useRef } from 'react'
import { Loading, MyInput, MySelect } from '../../components/global'
import { MyForm, SubmitButton } from '../../components/forms/components'
//import ProfileCard from '../../components/forms/profile-card'
import { StartupDataInterface } from '../../interfaces/global'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const HomePage: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<StartupDataInterface[]>()

  const [sort, setSort] = useState('date')

  const location = useLocation()

  useEffect(() => {
    const getAllStartups = async (): Promise<void> => {
      try {
        const response = await axios.get(
          'https://starter-list-backend.glitch.me/api/startups/'
        )
        setData(response.data.data.startups)
      } catch (err) {
        alert(`omo server is down o`)
      }
    }
    getAllStartups()
  }, [location])

  const profile = useRef<HTMLDivElement>(null)

  const showProfile = () => {
    if (profile.current) {
      profile.current.style.display = 'flex'
    }
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  return (
    <div>
      <NavBar />
      <HomeWrapper>
        <HomeDisplayArea>
          <h1>Find the latest startups...</h1>
          {!data ? (
            <Loading>
              <h1>Loading... Bear with us Network no good</h1>
            </Loading>
          ) : (
            <>
              <DisplaySet>
                <h3>Top Rated Startups</h3>
                <CardSection>
                  {data
                    .sort((a: StartupDataInterface, b: StartupDataInterface) =>
                      b.ratings > a.ratings ? 1 : -1
                    )
                    .slice(0, 3)
                    .map((d: StartupDataInterface, i: number) => (
                      <StartupCard
                        key={i}
                        startup={d}
                        showProfile={showProfile}
                        id={d._id as string}
                      />
                    ))}
                </CardSection>
              </DisplaySet>
              {sort === 'date' ? (
                Array.from(new Set(data.map((x) => x.createdAt))).map(
                  (date, i) => {
                    return (
                      <DisplaySet key={i}>
                        <h4>{date}</h4>
                        <CardSection>
                          {data
                            .filter((startup) => startup.createdAt === date)
                            .map((startup, i) => (
                              <StartupCard
                                key={i}
                                startup={startup}
                                showProfile={showProfile}
                                id={startup._id}
                              />
                            ))}
                        </CardSection>
                      </DisplaySet>
                    )
                  }
                )
              ) : (
                <DisplaySet>
                  <h2>By Rating</h2>
                  <CardSection>
                    {data
                      .sort(
                        (a: StartupDataInterface, b: StartupDataInterface) =>
                          b.ratings > a.ratings ? 1 : -1
                      )
                      .map((d: StartupDataInterface, i: number) => (
                        <StartupCard
                          key={i}
                          startup={d}
                          showProfile={showProfile}
                          id={d._id as string}
                        />
                      ))}
                  </CardSection>
                </DisplaySet>
              )}
            </>
          )}
        </HomeDisplayArea>
        <HomeSideArea>
          <h1>Sort</h1>
          <label>
            <MySelect name="sort" onChange={handleSort}>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </MySelect>
          </label>
          <h1>Filter</h1>

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
