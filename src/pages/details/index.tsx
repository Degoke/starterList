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
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef, useContext } from 'react'
import { CommentInterface, StartupDataInterface } from '../../interfaces/global'
import axios from 'axios'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import { MainContext } from '../../utils/global/context'

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

  const { currentUser } = useContext(MainContext)

  const [clicked, setClicked] = useState(false)

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
    if (currentUser === 'none') {
      alert('Sign in or sign up to vote')
      return
    }
    setClicked(true)
    setVotes((prevVotes) => (prevVotes !== 0 ? prevVotes + 1 : 1))
    if (vote.current) {
      vote.current.style.color = '#FF0000'
    }
    try {
      await axios.post(
        `https://starter-list-backend.glitch.me/api/startups/${id}/upvote`
      )
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
        <Loading />
      ) : (
        <DetailsContainer>
          <DetailsWrapper>
            <img src={startup.logo} />
            <h1>{startup.name}</h1>
            <p>{startup.shortDescription}</p>
            <MyFullImage src={startup.images} />
            <div className="long">
              <p>{startup.longDescription.toString()}</p>
            </div>
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
                  <p>{new Date(startup.dateFounded).toLocaleDateString()}</p>
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
              <a href={startup.website}>
                <MyIconButton>
                  <LanguageIcon fontSize="large" />

                  <p>Visit Site</p>
                </MyIconButton>
              </a>
              <MyIconButton onClick={upVote} ref={vote} disabled={clicked}>
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
                    <p className="commentname">
                      {comment.author?.name || localStorage.getItem('name')}
                    </p>
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
