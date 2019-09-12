import styled from 'styled-components'

export default styled.div`
  margin-bottom: 70px;

  label {
    display: block;
    font-size: ${props => props.theme.fontSizes.normal};
    margin-bottom: 5px;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-bottom: 0;
    width: 100%;
    width: calc(30% - 25px);
  }
`
