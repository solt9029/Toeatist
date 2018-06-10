import React from 'react';
import { connect } from 'react-redux';
import AppNavbar from '../parts/AppNavbar';
import AppJumbotron from '../parts/AppJumbotron';
import AppFooter from '../parts/AppFooter';
import Description from '../parts/Description';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
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