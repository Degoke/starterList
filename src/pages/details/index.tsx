import { MyForm, SubmitButton } from '../../components/forms/components'
import { MyTextField } from '../../components/global'
import NavBar from '../../components/navbar'
import data from '../../mock-backend/mock-data'
import {
  ColumnGroup,
  CommentBox,
  DetailsContainer,
  DetailsWrapper,
  DiscussionsWrapper,
  RowGroup,
} from './components'
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const DetailsPage: React.FC = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <DetailsContainer>
        <DetailsWrapper>
          <img src={data[1].logo} />
          <h1>{data[1].name}</h1>
          <p>{data[1].shortDescription}</p>
          <img src={data[1].images} />
          <p>{data[1].longDescription}</p>
          <RowGroup>
            <ColumnGroup>
              <h3>Team members</h3>
              <p>{data[1].owner}</p>
            </ColumnGroup>
            <ColumnGroup>
              <h3>Location</h3>
              <p>{data[1].location}</p>
            </ColumnGroup>
            <ColumnGroup>
              <h3>Founded</h3>
              <p>{data[1].dateFounded}</p>
            </ColumnGroup>
          </RowGroup>
          <RowGroup>
            <ColumnGroup>
              <h3>FundRaising Round</h3>
              <p>{data[1].fundRaisingRound}</p>
            </ColumnGroup>
            <ColumnGroup>
              <h3>Existing Investors</h3>
              <p>{data[1].existingInvestors}</p>
            </ColumnGroup>
            <ColumnGroup>
              <h3>ToTal Funding</h3>
              <p>{data[1].totalFunding}</p>
            </ColumnGroup>
          </RowGroup>
          <div>
            <LanguageIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </DetailsWrapper>
        <DiscussionsWrapper>
          <h1>Discussion</h1>
          <MyForm>
            <label htmlFor="comment">
              Add a Comment...
              <MyTextField rows={8} cols={50} />
            </label>
            <SubmitButton value="Add" />
          </MyForm>
          <CommentBox>
            <div>{data[1].shortDescription}</div>
          </CommentBox>
          <CommentBox>
            <div>{data[1].shortDescription}</div>
          </CommentBox>
          <CommentBox>
            <div>{data[1].shortDescription}</div>
          </CommentBox>
          <CommentBox>
            <div>{data[1].shortDescription}</div>
          </CommentBox>
          <CommentBox>
            <div>{data[1].shortDescription}</div>
          </CommentBox>
        </DiscussionsWrapper>
      </DetailsContainer>
    </>
  )
}

export default DetailsPage
