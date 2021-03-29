import { MyForm, SubmitButton } from '../../components/forms/components'
import {
  MyTextField,
  MyIconButton,
  MyFullImage,
  Loading,
} from '../../components/global'
import NavBar from '../../components/navbar'
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
import { useEffect, useState, useRef } from 'react'
import { CommentInterface, StartupDataInterface } from '../../interfaces/global'
import axios from 'axios'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'

export interface ParamsInterface {
  id?: string
}

const DetailsPage: React.FC = (): React.ReactElement => {
  const { id } = useParams<ParamsInterface>()

  const [startup, setStartup] = useState<StartupDataInterface>()

  const [votes, setVotes] = useState<number>(0)

  const [comments, setComments] = useState<CommentInterface[]>()

  const [data, setData] = useState({})

  const vote = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const getStartup = async (): Promise<void> => {
      try {
        const response = await axios.get(
          `https://starter-list-backend.glitch.me/api/startups/${id}`
        )
        setStartup(response.data.data.startup)
        setVotes(response.data.data.startup.ratings)
        setComments(response.data.data.startup.comments)
      } catch (err) {
        alert('omo server is down o')
      }
    }
    getStartup()
  }, [id])

  const upVote = async (): Promise<void> => {
    setVotes((prevVotes) => (prevVotes !== 0 ? prevVotes + 1 : 1))
    try {
      const response = await axios.post(
        `https://starter-list-backend.glitch.me/api/startups/${id}/upvote`
      )
      if (response.data.status === 200) {
        setVotes((prevVotes) => (prevVotes !== 0 ? prevVotes + 1 : 1))
        if (vote.current) {
          vote.current.style.color = '#000000'
        }
      }
    } catch (err) {
      alert(`${err}voting`)
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

  const addComment = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setComments((prevComments) => [...prevComments, data as CommentInterface])
    try {
      const response = await axios.post(
        `https://starter-list-backend.glitch.me/api/startups/${id}/comments`,
        data
      )
      if (response.data.status === 200) {
        alert('your comment has been noted')
      }
    } catch (err) {
      alert(`${err}adding comment`)
    }
  }

  return (
    <>
      <NavBar />
      {!startup ? (
        <Loading>
          <h1>Loading</h1>
        </Loading>
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
                  <p>{startup.owner?.name}</p>
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
              <MyIconButton onClick={upVote} ref={vote}>
                <ThumbUpRoundedIcon fontSize="large" />
                <p>{votes}</p>
              </MyIconButton>
            </div>
          </DetailsWrapper>
          <DiscussionsWrapper>
            <h1 id="discussion">Discussion</h1>
            <MyForm onSubmit={addComment}>
              <label htmlFor="comment">Add a Comment...</label>

              <MyTextField
                rows={8}
                cols={50}
                onChange={handleChange}
                name="comment"
              />

              <SubmitButton value="Add" type="submit" />
            </MyForm>
            {comments?.map((comment, i) => (
              <CommentBox key={i}>
                <ColumnGroup>
                  <CloseRowGroup>
                    <AccountCircleRounded />{' '}
                    <p className="commentname">{comment.author?.name}</p>
                  </CloseRowGroup>

                  <div>{comment.comment}</div>
                </ColumnGroup>
              </CommentBox>
            ))}
          </DiscussionsWrapper>
        </DetailsContainer>
      )}
    </>
  )
}

export default DetailsPage
