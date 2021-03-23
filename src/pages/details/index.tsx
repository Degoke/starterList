import data from '../../mock-backend/mock-data'
import { DetailsWrapper } from './components'

const DetailsPage: React.FC = (): React.ReactElement => {
  return (
    <DetailsWrapper>
      <h1>{data[1].name}</h1>
      <p>{data[1]['short-description']}</p>
      <img src={data[1].images} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo
        cumque cum! Sit vero, dolore corporis eaque nulla aut ipsam
        necessitatibus minus neque impedit quaerat aliquam, aspernatur
        consequuntur obcaecati accusantium odio blanditiis repellat excepturi
        ipsum illum ullam, ab sapiente perferendis. Sed ea distinctio veniam
        autem dignissimos vitae voluptate! In, pariatur.
      </p>
      <div>
        <button>Visit site</button>
        <button>Get app</button>
        <button>Twitter</button>
      </div>
      <button>Maker</button>
      <h1>Discussion</h1>
      <div>{data[1].comments}</div>
      <form>
        <label htmlFor="comment">
          Add a Comment...
          <input type="text" name="comment" id="comment" />
        </label>
      </form>
    </DetailsWrapper>
  )
}

export default DetailsPage
