import styled from 'styled-components'

export default styled.div`
  margin-bottom: 30px;

  label {
    display: block;
    font-size: ${props => props.theme.fontSizes.normal};
    margin-bottom: 5px;
    width: 100%;
  }

  button {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    display: flex;
    flex-wrap: wrap;

    button {
      width: auto;
      flex-grow: 1;
    }
  }

  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-bottom: 70px;
    width: calc(70% - 25px);
    margin-right: 50px;
  }
`
