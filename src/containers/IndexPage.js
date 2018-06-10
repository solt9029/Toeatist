import { connect } from 'react-redux';
import IndexPage from '../components/IndexPage';
import { login } from '../actions/user';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);