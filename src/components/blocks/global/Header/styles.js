import styled from 'styled-components'

export default styled.header`
  height: 64px;
  background-color: ${props => props.theme.colors.backgroundDark};
  color: ${props => props.theme.colors.fontPrimary};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${props => props.theme.fontSizes.veryBig};
    color: ${props => props.theme.colors.fontPrimary};
    margin-bottom: 0;
  }
`
