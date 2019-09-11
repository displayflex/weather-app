// import { AutoComplete } from 'antd'
import { Input } from 'antd'
import styled from 'styled-components'

// @todo
// export default styled(AutoComplete)`
//   margin-bottom: 10px;

//   @media (min-width: ${props => props.theme.width.tablet}) {
//     margin-right: 10px;

//     &&& {
//       width: 70%;
//     }
//   }
// `
export default styled(Input)`
  margin-bottom: 10px;

  @media (min-width: ${props => props.theme.width.tablet}) {
    margin-right: 10px;

    &&& {
      width: 70%;
    }
  }
`
