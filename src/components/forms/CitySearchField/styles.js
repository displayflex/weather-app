import styled from 'styled-components'

export default styled.div`
  margin-bottom: 30px;
  align-items: center;

  @media (min-width: ${props => props.theme.width.tablet}) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-bottom: 70px;
    width: calc(70% - 25px);
    margin-right: 50px;
  }
`

export const CitySearchLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes.normal};
  margin-bottom: 5px;
  width: 100%;
`
