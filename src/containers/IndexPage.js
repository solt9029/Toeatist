import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import GuestNavbar from './GuestNavbar';
import AppJumbotron from './AppJumbotron';
import AppFooter from './AppFooter';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <GuestNavbar />
        <AppJumbotron />
        <AppFooter />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);