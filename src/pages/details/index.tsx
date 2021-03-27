import { MyForm, SubmitButton } from '../../components/forms/components'
import { MyTextField, MyIconButton, MyFullImage } from '../../components/global'
import NavBar from '../../components/navbar'
import data from '../../mock-backend/mock-data'
import {
  ColumnGroup,
  CommentBox,
  DetailsBox,
  DetailsContainer,
  DetailsWrapper,
  DiscussionsWrapper,
  RowGroup,
  CloseRowGroup,
} from './components'
import LanguageIcon from '@material-ui/icons/Language'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { StartupDataInterface } from '../../interfaces/global'

export interface ParamsInterface {
  id?: string
}

const DetailsPage: React.FC = (): React.ReactElement => {
  const { id } = useParams<ParamsInterface>()

  const [startup, setStartup] = useState<StartupDataInterface>()

  useEffect(() => {
    setStartup(data.filter((d) => d.id.$oid === id)[0])
  }, [id])

  return (
    <>
      <NavBar />
      {startup === undefined ? (
        <h1>Loading</h1>
      ) : (
        <DetailsContainer>
          <DetailsWrapper>
            <img src={startup.logo} />
            <h1>{startup.name}</h1>
            <p>{startup.shortDescription}</p>
            <MyFullImage src={startup.images} />
            <p>{startup.longDescription}</p>
            <DetailsBox>
              <RowGroup>
                <ColumnGroup>
                  <h3>Team</h3>
                  <p>{startup.owner}</p>
                </ColumnGroup>
                <ColumnGroup>
                  <h3>Location</h3>
                  <p>{startup.location}</p>
                </ColumnGroup>
              </RowGroup>
              <RowGroup>
                <ColumnGroup>
                  <h3>Founded</h3>
                  <p>{startup.dateFounded}</p>
                </ColumnGroup>
                <ColumnGroup>
                  <h3>Existing Investors</h3>
                  <p>{startup.existingInvestors}</p>
                </ColumnGroup>
              </RowGroup>
              <RowGroup>
                <ColumnGroup>
                  <h3>FundRaising Round</h3>
                  <p>{startup.fundRaisingRound}</p>
                </ColumnGroup>
                <ColumnGroup>
                  <h3>ToTal Funding</h3>
                  <p>{startup.totalFunding}</p>
                </ColumnGroup>
              </RowGroup>
            </DetailsBox>

            <div>
              <MyIconButton>
                <LanguageIcon fontSize="large" />

                <p>Visit Site</p>
              </MyIconButton>
              <MyIconButton>
                <FacebookIcon fontSize="large" />

                <p>Share</p>
              </MyIconButton>
              <MyIconButton>
                <TwitterIcon fontSize="large" />

                <p>Share</p>
              </MyIconButton>
            </div>
          </DetailsWrapper>
          <DiscussionsWrapper>
            <h1>Discussion</h1>
            <MyForm>
              <label htmlFor="comment">Add a Comment...</label>

              <MyTextField rows={8} cols={50} />

              <SubmitButton value="Add" />
            </MyForm>
            <CommentBox>
              <ColumnGroup>
                <CloseRowGroup>
                  <AccountCircleRounded /> <p className="commentname">name</p>
                </CloseRowGroup>

                <div>{startup.shortDescription}</div>
                <p className="commentdate">date</p>
              </ColumnGroup>
            </CommentBox>
            <CommentBox>
              <div>{startup.shortDescription}</div>
            </CommentBox>
            <CommentBox>
              <div>{startup.shortDescription}</div>
            </CommentBox>
            <CommentBox>
              <div>{startup.shortDescription}</div>
            </CommentBox>
            <CommentBox>
              <div>{startup.shortDescription}</div>
            </CommentBox>
          </DiscussionsWrapper>
        </DetailsContainer>
      )}
    </>
  )
}

export default DetailsPage
