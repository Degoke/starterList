import styled from 'styled-components'

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
`
export const CardTopWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.1px solid ${(props) => props.theme.color.background};
  padding: 0.1rem 1rem;
`
export const CardBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1px solid ${(props) => props.theme.color.background};
  padding: 1rem;
`
export const CardMiddleWrapper = styled.div`
  padding: 1rem;
`
export const CardBottomGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
