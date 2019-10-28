import styled from 'styled-components'
import { Icon } from 'antd'

export default styled.div`
  text-align: center;
  margin-bottom: 60px;
`

export const MainInfo = styled.div`
  margin-bottom: 10px;

  @media (min-width: ${props => props.theme.width.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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

export const AdditionalInfoList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${props => props.theme.width.tablet}) {
    flex-direction: row;
  }
`

export const AdditionalInfoItem = styled.li`
  margin-bottom: 10px;
  border-bottom: 1px solid #ececec;
  padding-bottom: 10px;
  min-width: 200px;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    min-width: 0;
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
    margin-right: 20px;
    border-right: 1px solid #ececec;
    padding-right: 20px;

    &:last-child {
      margin-right: 0;
      border-right: none;
    }
  }
`

export const AdditionalInfoHeader = styled.h3`
  color: #a7a7a7;
`

export const AdditionalInfoIcon = styled(Icon)`
  color: #a7a7a7;
  font-size: 20px;
  margin-right: 5px;
`

export const AdditionalInfoRate = styled.b`
  color: #a7a7a7;
  font-size: 20px;
`
