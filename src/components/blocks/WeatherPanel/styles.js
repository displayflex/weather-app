import styled from 'styled-components'

export default styled.div`
  button {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: auto;
      padding-left: 30px;
      padding-right: 30px;
    }
  }
`

export const WrongDataParagraph = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.big};
  margin-bottom: 40px;
`
