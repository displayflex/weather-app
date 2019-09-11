import { connect } from 'react-redux'
import CitySearchInput from '@/components/forms/CitySearchInput/component'
import { setCityInputValue } from '@/actions/location'

const mapDispatchToProps = dispatch => ({
  setCityInputValue: payload => dispatch(setCityInputValue(payload)),
})

export default connect(
  null,
  mapDispatchToProps
)(CitySearchInput)
