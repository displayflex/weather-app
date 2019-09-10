import { connect } from 'react-redux'
import CitySearchField from '@/components/forms/CitySearchField/component'
import { setCoords } from '@/actions/location'

const mapStateToProps = state => ({
  city: state.location.city,
})

const mapDispatchToProps = dispatch => ({
  setCoords: payload => dispatch(setCoords(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySearchField)
