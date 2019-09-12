import styled from 'styled-components'

export default styled.div`
  text-align: center;
  margin-bottom: 30px;

  b {
    font-size: ${props => props.theme.fontSizes.veryBig};
  }

  span {
    display: block;
    font-size: ${props => props.theme.fontSizes.big};
    margin-bottom: 10px;
  }

  img {
    width: 130px;
    height: auto;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin-right: 15px;
    }
  }
`
