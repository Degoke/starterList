import styled from 'styled-components'

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media all and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
  @media all and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
export const HomeWrapper = styled.div`
  width: 95%;
  margin-right: 0;
  margin-left: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 3rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media all and (max-width: 800px) {
    margin-left: 1rem;
    grid-column-gap: 2rem;
  }
  @media all and (max-width: 600px) {
    margin-left: 1rem;
    grid-column-gap: 1rem;
  }
`
export const HomeDisplayArea = styled.div`
  background-color: inherit;
`

export const HomeSideArea = styled.aside`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.primary};
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  min-height: 100vh;
  position: fixed;
  right: 0;
  width: 20%;
  @media all and (max-width: 600px) {
    visibility: hidden;
  }
`
export const DisplaySet = styled.div`
  margin-top: 3rem;
  h2 {
    margin-bottom: 1rem;
  }
`

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  &select {
    margin-bottom: 1rem;
    padding: inherit 0.2rem;
  }
`
