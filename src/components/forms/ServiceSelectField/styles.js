import styled from 'styled-components'

export default styled.div`
  margin-bottom: 40px;

  label {
    display: block;
    font-size: ${props => props.theme.fontSizes.normal};
    margin-bottom: 5px;
  }

  @media (min-width: ${props => props.theme.width.tablet}) {
    margin-bottom: 50px;

    .ant-select {
      width: 70%;
    }
  }

  @media (min-width: ${props => props.theme.width.desktop}) {
    margin-bottom: 0;
    width: calc(30% - 25px);

    .ant-select {
      width: 100%;
    }
  }
`

// @todo use .ant-select here?
