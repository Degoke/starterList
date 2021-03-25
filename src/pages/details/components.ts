import styled from 'styled-components'

export const DetailsWrapper = styled.section`
  width: 80%;
  margin: auto;
  text-align: center;
`
export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
`
export const DiscussionsWrapper = styled.aside`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.primary};
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  min-height: 100vh;
`
export const CommentBox = styled.div`
  border: 1px solid ${(props) => props.theme.color.secondary};
  padding: 1rem 0.5rem;
  margin: 1rem 0;
`