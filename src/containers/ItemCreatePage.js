import React from 'react';
import { connect } from 'react-redux';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

class ItemCreatePage extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar logoutButton />
        <h2>ItemCreatePage</h2>
        <AppFooter />
      </div>
    )
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreatePage);