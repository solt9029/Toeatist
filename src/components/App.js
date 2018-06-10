import React, { Component } from 'react';
import { Switch, Link, Redirect } from 'react-router-dom';
import ItemIndexPage from '../containers/ItemIndexPage';
import IndexPage from '../containers/IndexPage';
import SwitchRoute from '../containers/SwitchRoute';
import UserOnlyRoute from '../containers/UserOnlyRoute';

export default class App extends Component {
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