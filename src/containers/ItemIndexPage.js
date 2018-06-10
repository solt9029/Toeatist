import { connect } from 'react-redux';
import ItemIndexPage from '../components/ItemIndexPage';
import { logout } from '../actions/user';
import { onValue } from '../actions/item';

const mapStateToProps = (state) => ({
  user: state.user,
  item: state.item
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  },
  onValue() {
    dispatch(onValue());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndexPage);