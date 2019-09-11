import { connect } from 'react-redux'
import CitySearchField from '@/components/forms/CitySearchField/component'

const mapStateToProps = state => ({
  city: state.location.city,
})

export default connect(
  mapStateToProps
)(CitySearchField)
