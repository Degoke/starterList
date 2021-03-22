import { RightNavWrapper, NavList, TagButton, TagWrapper } from './components'

const tags: string[] = ['All', 'Tech', 'Games', 'Books', 'Tools', 'Wearables']

const SearchTags: React.FC = (): React.ReactElement => {
  return (
    <TagWrapper>
      <RightNavWrapper>
        {tags.map((tag, index) => {
          return (
            <NavList key={index}>
              <TagButton>{tag}</TagButton>
            </NavList>
          )
        })}
      </RightNavWrapper>
    </TagWrapper>
  )
}

export default SearchTags
