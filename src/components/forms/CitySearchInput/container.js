import { connect } from 'react-redux'
import CitySearchInput from '@/components/forms/CitySearchInput/component'
import { changeCityInput } from '@/actions/location'

const mapStateToProps = state => ({
  city: state.location.city,
})

const mapDispatchToProps = dispatch => ({
  changeCityInput: payload => dispatch(changeCityInput(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySearchInput)
