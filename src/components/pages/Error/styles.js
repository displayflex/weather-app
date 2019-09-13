import styled from 'styled-components'

export default styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.big};

  p:first-child {
    font-size: ${props => props.theme.fontSizes.veryBig};
  }
`
