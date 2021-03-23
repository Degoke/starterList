import { RightNavWrapper, NavList, TagButton, TagWrapper } from './components'
import { useContext } from 'react'
import { MainContext } from '../../utils/global/context'

const tags: string[] = ['All', 'tech', 'games', 'books', 'tools', 'wearables']

const SearchTags: React.FC = (): React.ReactElement => {
  const { setCurrentTag } = useContext(MainContext)

  const filterTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (setCurrentTag) {
      setCurrentTag((e.target as Element).id)
    }
  }

  return (
    <TagWrapper>
      <RightNavWrapper>
        {tags.map((tag, index) => {
          return (
            <NavList key={index}>
              <TagButton id={tag} onClick={filterTag}>
                {tag.toUpperCase()}
              </TagButton>
            </NavList>
          )
        })}
      </RightNavWrapper>
    </TagWrapper>
  )
}

export default SearchTags
