import { connect } from 'react-redux'
import SetupPanel from '@/components/forms/SetupPanel/component'

const mapStateToProps = state => ({
  city: state.location.city,
})

export default connect(
  mapStateToProps
)(SetupPanel)
