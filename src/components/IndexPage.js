import React from 'react';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h2>IndexPage</h2>
        <button onClick={() => this.props.login()}>login</button>
      </div>
    )
  }
}