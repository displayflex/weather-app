import React from 'react'

import AutoComplete from './styles'

const { Option } = AutoComplete

class CitySearchInput extends React.Component {
  state = {
    result: [],
  }

  handleSearch = value => {
    let result
    if (!value || value.length <= 3) {
      result = []
    } else {
      result = ['London', 'Moscow', 'New York'].filter(city => city.indexOf(value) !== -1)
    }
    this.setState({ result })
  }

  render () {
    const { result } = this.state
    const children = result.map(city => <Option key={city}>{city}</Option>)

    return (
      <AutoComplete onSearch={this.handleSearch} placeholder="Type your city here...">
        {children}
      </AutoComplete>
    )
  }
}

export default CitySearchInput
