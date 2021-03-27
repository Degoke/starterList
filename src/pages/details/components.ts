import styled from 'styled-components'

export const DetailsWrapper = styled.section`
  width: 80%;
  margin: auto;
  text-align: center;

  @media all and (max-width: 500px) {
    width: 90%;
  }
`
export const DetailsContainer = styled.div`
  margin: 5rem auto 3rem;
`
export const DiscussionsWrapper = styled.aside`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.primary};
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  width: 80%;
  margin: 1rem auto;
  @media all and (max-width: 500px) {
    width: 90%;
    padding: 1rem;
  }
  @media all and (max-width: 380px) {
    width: 95%;
    padding: 0.5rem;
  }
`
export const CommentBox = styled.div`
  border: 1px solid ${(props) => props.theme.color.secondary};
  padding: 1rem 0.5rem;
  margin: 1rem 0;
`

export const RowGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media all and (max-width: 380px) {
    grid-gap: 0.5rem;
  }
`
export const ColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  .commentdate {
    align-self: flex-end;
  }
`
export const DetailsBox = styled.div`
  border: 1px dotted ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.secondary};
  padding: 2rem;
  margin: 2rem 0;
  @media all and (max-width: 500px) {
    padding: 1rem;
  }
  @media all and (max-width: 380px) {
    padding: 0.5rem;
  }
`
export const CloseRowGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .commentname {
    margin: 0 1rem;
  }
`
