import styled from 'styled-components'

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`
export const HomeWrapper = styled.div`
  width: 95%;
  margin-right: 0;
  margin-left: 5%;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 4rem;
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
`
export const DisplaySet = styled.div`
  margin-top: 6rem;
`