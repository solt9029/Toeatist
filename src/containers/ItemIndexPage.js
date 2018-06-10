import React from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import { onValue } from '../actions/item';

class ItemIndexPage extends React.Component {
  componentDidMount() {
    this.props.onValue();
  }
  render() {
    return (
      <div>
        <AppNavbar createButton deleteButton logoutButton />
        <h2>ItemIndexPage</h2>
        { this.props.user.displayName }
        <button onClick={() => this.props.logout()}>logout</button>
        {this.props.item.list.map((item) => {
          return <div>{item.content}</div>;
        })}
        <AppFooter />
      </div>
    )
  }
}

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