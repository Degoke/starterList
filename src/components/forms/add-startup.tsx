import {
  ModalWrapper,
  ModalContainer,
  MyForm,
  SubmitButton,
  QuitButton,
} from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MyInput, MyTextField, MySelect } from '../global'
import React, { forwardRef, useRef, useState, useContext } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { MainContext } from '../../utils/global/context'

const AddStartup = forwardRef(
  (props, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
    const innerRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

    const [data, setData] = useState({})

    const history = useHistory()

    const { currentUser } = useContext(MainContext)

    const addStartup = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()
      try {
        const response = await axios.post(
          'https://starter-list-backend.glitch.me/api/startups/create',
          data
        )

        if (response.data.status === 200) {
          alert(`${response.data.message} Startup added`)
          closeLogin()
          history.push('/')
        }
      } catch (err) {
        alert('Error Adding Startup')
      }
    }

    const closeLogin = () => {
      if (combinedRef) {
        const final = combinedRef as React.RefObject<HTMLDivElement>
        if (final.current) {
          final.current.style.display = 'none'
        }
      }
    }

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        owner: localStorage.getItem('user'),
      }))
    }
    return (
      <ModalContainer ref={combinedRef}>
        <ModalWrapper>
          <QuitButton onClick={closeLogin}>
            <CloseRoundedIcon />
          </QuitButton>
          <h1>Add a Startup</h1>
          {currentUser === 'none' ? (
            <h2>Sign in or create an account to post a startup</h2>
          ) : (
            <MyForm onSubmit={addStartup}>
              <label htmlFor="name">Name of Startup</label>
              <MyInput
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
              <label htmlFor="industry">Industry</label>
              <MyInput
                type="text"
                name="industry"
                onChange={handleChange}
                required
              />
              <label htmlFor="website">Website</label>
              <MyInput
                type="url"
                name="website"
                onChange={handleChange}
                required
              />
              <label htmlFor="shortDescription">Slogan</label>
              <MyInput
                type="text"
                name="shortDescription"
                onChange={handleChange}
                required
              />

              <label htmlFor="location">Location</label>
              <MyInput
                type="text"
                name="location"
                onChange={handleChange}
                required
              />
              <label htmlFor="logo">Logo</label>
              <MyInput
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
              />
              <label htmlFor="images">Images</label>
              <MyInput
                type="file"
                name="images"
                multiple
                accept="image/*"
                onChange={handleChange}
              />
              <label htmlFor="dateFounded">Founding Date</label>
              <MyInput
                type="date"
                name="dateFounded"
                onChange={handleChange}
                required
              />
              <label htmlFor="fundRaisingRound">FundRaising Round</label>
              <MySelect name="fundRaisingRound" required>
                <option value="pre-seed" selected>
                  Pre-Seed
                </option>
                <option value="pre-seed">Pre-Seed</option>
                <option value="seed">Seed</option>
                <option value="series-a">Series A</option>
                <option value="series-b">Series B</option>
                <option value="series-c">Series C</option>
              </MySelect>
              <label htmlFor="existingInvestors">Existing Investors</label>
              <MyInput
                type="text"
                name="existingInvestors"
                onChange={handleChange}
                required
              />
              <label htmlFor="totalFunding">Total Funding Amount Raised</label>
              <MyInput
                type="text"
                name="totalFunding"
                onChange={handleChange}
                required
              />
              <label htmlFor="userMetrics">User Metrics</label>
              <MyInput
                type="text"
                name="userMetrics"
                onChange={handleChange}
                required
              />
              <label htmlFor="longDescription">
                Tell us About Your Startup
              </label>
              <MyTextField
                name="longDescription"
                rows={8}
                onChange={handleChange}
                required
              />
              <SubmitButton type="submit" value="Add" />
            </MyForm>
          )}
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

AddStartup.displayName = 'AddStartup'

export default AddStartup
