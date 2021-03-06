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
import { useState, useEffect } from 'react'
import { Loading, MyInput, MySelect } from '../../components/global'
import { StartupDataInterface } from '../../interfaces/global'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { MyForm, SubmitButton } from '../../components/forms/components'
import { parseDate } from '../../utils/global/functions'

const HomePage: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<StartupDataInterface[]>()

  const [sort, setSort] = useState('date')

  const location = useLocation()

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

  useEffect(() => {
    getAllStartups()
  }, [location])

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  const search = (e) => {
    if (e.target.value === '') {
      getAllStartups()
      return
    }
    const searched = data.filter((d) =>
      d.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setData(searched)
  }

  return (
    <div>
      <NavBar search={search} />
      <HomeWrapper>
        <HomeDisplayArea>
          <h1>Find the latest startups...</h1>
          {!data ? (
            <Loading />
          ) : (
            <>
              <DisplaySet>
                <h2>Top Rated Startups</h2>
                <CardSection>
                  {data
                    .sort((a: StartupDataInterface, b: StartupDataInterface) =>
                      b.ratings > a.ratings ? 1 : -1
                    )
                    .slice(0, 3)
                    .map((d: StartupDataInterface, i: number) => (
                      <StartupCard key={i} startup={d} id={d._id as string} />
                    ))}
                </CardSection>
              </DisplaySet>
              {sort === 'date' ? (
                Array.from(
                  new Set(
                    data.map((x) =>
                      x.createdAt
                        ? new Date(x.createdAt).toLocaleDateString()
                        : ''
                    )
                  )
                )
                  .sort((a, b) => (a && b ? (b > a ? 1 : -1) : 1))
                  .map((date, i) => {
                    return (
                      <DisplaySet key={i}>
                        <h2>{date ? parseDate(date) : ''}</h2>
                        <CardSection>
                          {data
                            .filter(
                              (startup) =>
                                new Date(
                                  startup.createdAt || Date.now()
                                ).toLocaleDateString() === date
                            )
                            .map((startup, i) => (
                              <StartupCard
                                key={i}
                                startup={startup}
                                id={startup._id}
                              />
                            ))}
                        </CardSection>
                      </DisplaySet>
                    )
                  })
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
                        <StartupCard key={i} startup={d} id={d._id as string} />
                      ))}
                  </CardSection>
                </DisplaySet>
              )}
            </>
          )}
        </HomeDisplayArea>
        <HomeSideArea>
          <h2>Sort</h2>
          <label>
            <MySelect name="sort" onChange={handleSort}>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </MySelect>
          </label>

          <h2 className="sub">Subscribe to our Newsletter</h2>
          <MyForm>
            <label htmlFor="subscribe">Email Address</label>

            <MyInput type="email" name="subscribe" />

            <SubmitButton type="submit" value="Subscribe" disabled />
          </MyForm>
        </HomeSideArea>
      </HomeWrapper>
    </div>
  )
}

export default HomePage
