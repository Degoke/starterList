import { MyForm, SubmitButton } from '../../components/forms/components'
import { MyTextField } from '../../components/global'
import data from '../../mock-backend/mock-data'
import {
  CommentBox,
  DetailsContainer,
  DetailsWrapper,
  DiscussionsWrapper,
} from './components'

const DetailsPage: React.FC = (): React.ReactElement => {
  return (
    <DetailsContainer>
      <DetailsWrapper>
        <h1>{data[1].name}</h1>
        <p>{data[1].shortDescription}</p>
        <img src={data[1].images} />
        <p>{data[1].longDescription}</p>
        <div>
          <button>Visit site</button>
          <button>Get app</button>
          <button>Twitter</button>
        </div>
        <button>Maker</button>
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
  )
}

export default DetailsPage
