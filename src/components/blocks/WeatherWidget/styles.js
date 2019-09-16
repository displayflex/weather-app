import styled from 'styled-components'

export default styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: ${props => props.theme.width.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const WeatherImage = styled.img`
  width: 130px;
  height: auto;
`

export const WeatherInfoWrapper = styled.div`
  @media (min-width: ${props => props.theme.width.tablet}) {
    margin-right: 15px;
  }
`

export const Temperature = styled.b`
  font-size: ${props => props.theme.fontSizes.veryBig};
`

export const WeatherDescription = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSizes.big};
  margin-bottom: 10px;
`
