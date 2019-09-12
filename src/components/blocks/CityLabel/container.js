import { connect } from 'react-redux'
import CityLabel from '@/components/blocks/CityLabel/component'

const mapStateToProps = state => ({
  city: state.location.city,
})

export default connect(mapStateToProps)(CityLabel)
