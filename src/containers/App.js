import React, { Component } from 'react';
import { Switch, Link, Redirect } from 'react-router-dom';
import ItemIndexPage from './ItemIndexPage';
import IndexPage from './IndexPage';
import ItemCreatePage from './ItemCreatePage';
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
    if (this.props.loading) {
      return 'loading...';
    }
    return (
      <div className="App">
        <Switch>
          <SwitchRoute exact path="/" userComponent={ItemIndexPage} guestComponent={IndexPage} />
          <UserOnlyRoute exact path="/item" component={ItemIndexPage} />
          <UserOnlyRoute exact path="/item/index" component={ItemIndexPage} />
          <UserOnlyRoute exact path="/item/create" component={ItemCreatePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading
});

const mapDispatchToProps = dispatch => ({
  onAuthStateChanged() {
    dispatch(onAuthStateChanged());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));