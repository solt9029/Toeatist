import React from 'react';  
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const SwitchRoute = ({ userComponent: UserComponent, guestComponent: GuestComponent, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user.uid ? <UserComponent {...props} /> : <GuestComponent {...props} />
    )} />
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchRoute);