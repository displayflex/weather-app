import { connect } from 'react-redux'
import ServiceSelectField from '@/components/forms/ServiceSelectField/component'
import { changeService } from '@/actions/services'

const mapStateToProps = state => ({
  services: state.services.all,
  currentService: state.services.current,
})

const mapDispatchToProps = dispatch => ({
  changeService: payload => dispatch(changeService(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceSelectField)
