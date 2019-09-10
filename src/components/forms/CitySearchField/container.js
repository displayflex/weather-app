import { connect } from 'react-redux'
import CitySearchField from '@/components/forms/CitySearchField/component'
import { setCoords } from '@/actions/location'
import { turnOnIsLoading, turnOffIsLoading } from '@/actions/loading'

const mapStateToProps = state => ({
  city: state.location.city,
  isLoading: state.loading.isLoading,
})

const mapDispatchToProps = dispatch => ({
  setCoords: payload => dispatch(setCoords(payload)),
  turnOnIsLoading: payload => dispatch(turnOnIsLoading(payload)),
  turnOffIsLoading: payload => dispatch(turnOffIsLoading(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitySearchField)
