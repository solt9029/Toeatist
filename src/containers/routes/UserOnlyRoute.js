import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const UserOnlyRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user.uid ? <Component {...props} /> : <Redirect to="/" />
    )} />
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOnlyRoute);