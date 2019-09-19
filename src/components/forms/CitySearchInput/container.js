import { connect } from 'react-redux'
import CitySearchInput from '@/components/forms/CitySearchInput/component'
import { changeCityInput } from '@/actions/location'

const mapStateToProps = state => ({
  cityName: state.location.cityName,
})

const mapDispatchToProps = dispatch => ({
  changeCityInput: payload => dispatch(changeCityInput(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySearchInput)
