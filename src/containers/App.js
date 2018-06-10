import React, { Component } from 'react';
import { Switch, Link, Redirect } from 'react-router-dom';
import ItemIndexPage from './ItemIndexPage';
import IndexPage from './IndexPage';
import SwitchRoute from './SwitchRoute';
import UserOnlyRoute from './UserOnlyRoute';
import { connect } from 'react-redux';
import { onAuthStateChanged } from '../actions/user';
import { withRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.onAuthStateChanged();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <SwitchRoute exact path="/" userComponent={ItemIndexPage} guestComponent={IndexPage} />
          <UserOnlyRoute path="/item" component={ItemIndexPage} />
          <UserOnlyRoute path="/item/index" component={ItemIndexPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  onAuthStateChanged() {
    dispatch(onAuthStateChanged());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));