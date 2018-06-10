import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestOnlyRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user.uid ? <Redirect to="/home" /> : <Component {...props} />
    )} />
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestOnlyRoute);