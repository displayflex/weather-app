import Button from 'antd/es/button'
import styled from 'styled-components'

export default styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  border-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.fortSecondary};
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.secondaryLight};
    border-color: ${props => props.theme.colors.secondaryLight};
    color: ${props => props.theme.colors.fortSecondary};
  }
`
