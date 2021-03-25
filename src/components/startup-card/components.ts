import styled from 'styled-components'

export const CardWrapper = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
    cursor: pointer;
  }
`
export const CardTopWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.1rem 1rem;
`
export const CardBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`
export const CardMiddleWrapper = styled.div`
  padding: 0.2rem 1rem;
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
  width: 100%;
  height: 10rem;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
