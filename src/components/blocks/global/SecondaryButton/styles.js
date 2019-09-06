import Button from 'antd/es/button'
import styled from 'styled-components'

export default styled(Button)`
  background-color: ${props => props.theme.colors.background};
  border-color: ${props => props.theme.colors.secondaryDark};
  color: ${props => props.theme.colors.font};
  text-transform: uppercase;
  width: 100%;

  &:hover {
    border-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primaryLight};
  }
`
