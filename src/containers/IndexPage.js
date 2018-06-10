import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import GuestNavbar from './GuestNavbar';
import AppJumbotron from './AppJumbotron';
import AppFooter from './AppFooter';
import Description from './Description';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <GuestNavbar />
        <AppJumbotron />
        <Description />
        <AppFooter />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);