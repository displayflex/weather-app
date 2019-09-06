import Button from 'antd/es/button'
import styled from 'styled-components'

export default styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.fontLight};
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
    border-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.fontLight};
  }
`
