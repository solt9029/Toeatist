import { connect } from 'react-redux';
import UserNavbar from '../components/UserNavbar';
import { logout } from '../actions/user';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavbar);