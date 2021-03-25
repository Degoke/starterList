import {
  ModalWrapper,
  ModalContainer,
  MyForm,
  SubmitButton,
  QuitButton,
} from './components'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { MyInput, MyTextField, MySelect } from '../global'
import { forwardRef, useRef } from 'react'
import { useCombinedRefs } from '../../utils/global/functions'

const AddStartup = forwardRef(
  (props, ref: React.Ref<HTMLDivElement>): React.ReactElement => {
    const innerRef = useRef(null)
    const combinedRef = useCombinedRefs(ref, innerRef)

    const closeLogin = () => {
      if (combinedRef) {
        const final = combinedRef as React.RefObject<HTMLDivElement>
        if (final.current) {
          final.current.style.display = 'none'
        }
      }
    }
    return (
      <ModalContainer ref={combinedRef}>
        <ModalWrapper>
          <QuitButton onClick={closeLogin}>
            <CloseRoundedIcon />
          </QuitButton>
          <h1>Add a Startup</h1>
          <MyForm>
            <label htmlFor="name">Name of Startup</label>
            <MyInput type="text" name="name" />
            <label htmlFor="industry">Industry</label>
            <MyInput type="text" name="industry" />
            <label htmlFor="website">Website</label>
            <MyInput type="url" name="website" />
            <label htmlFor="slogan">Slogan</label>
            <MyInput type="text" name="slogan" />

            <label htmlFor="location">Location</label>
            <MyInput type="text" name="location" />
            <label htmlFor="logo">Logo</label>
            <MyInput type="file" name="logo" accept="image/*" />
            <label htmlFor="images">Images</label>
            <MyInput type="file" name="images" multiple accept="image/*" />
            <label htmlFor="dateFounded">Founding Date</label>
            <MyInput type="date" name="dateFounded" />
            <label htmlFor="fundraisingRound">FundRaising Round</label>
            <MySelect name="fundraisingRound">
              <option value="pre-seed">Pre-Seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b">Series B</option>
              <option value="series-c">Series C</option>
            </MySelect>
            <label htmlFor="existingInvestors">Existing Investors</label>
            <MyInput type="text" name="existingInvestors" />
            <label htmlFor="totalFunding">Total Funding Amount Raised</label>
            <MyInput type="email" name="totalFunding" />
            <label htmlFor="userMetrics">User Metrics</label>
            <MyInput type="password" name="userMetrics" />
            <label htmlFor="team">Team Members</label>
            <MyInput type="password" name="team" />
            <label htmlFor="details">Tell us About Your Startup</label>
            <MyTextField name="details" />
            <SubmitButton type="submit" value="login" />
          </MyForm>
        </ModalWrapper>
      </ModalContainer>
    )
  }
)

AddStartup.displayName = 'AddStartup'

export default AddStartup
