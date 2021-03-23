import styled from 'styled-components'

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
export const CardTopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1rem 1rem;
`
export const CardBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  justify-self: flex-end;
`
export const CardMiddleWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  text-align: center;
`
export const CardBottomGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const AvatarImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`
export const ImageWrapper = styled.img`
  width: 18rem;
  height: 10rem;
`
