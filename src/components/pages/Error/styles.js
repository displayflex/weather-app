import styled from 'styled-components'

export default styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.big};
`

export const ErrorStatus = styled.p`
  font-size: ${props => props.theme.fontSizes.veryBig};
`
