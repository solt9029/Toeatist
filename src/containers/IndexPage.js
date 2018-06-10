import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h2>IndexPage</h2>
        <button onClick={() => this.props.login()}>login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);