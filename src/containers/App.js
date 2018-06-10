import React, { Component } from 'react';
import { Switch, Link, Redirect } from 'react-router-dom';
import ItemIndexPage from './pages/ItemIndexPage';
import IndexPage from './pages/IndexPage';
import ItemCreatePage from './pages/ItemCreatePage';
import SwitchRoute from './routes/SwitchRoute';
import UserOnlyRoute from './routes/UserOnlyRoute';
import { connect } from 'react-redux';
import { onAuthStateChanged } from '../actions/user';
import { withRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.onAuthStateChanged();
  }
  render() {
    if (this.props.loading) {
      return '';
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