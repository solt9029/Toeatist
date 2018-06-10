import React from 'react';

export default class ItemIndexPage extends React.Component {
  componentDidMount() {
    this.props.onValue();
  }
  render() {
    return (
      <div>
        <h2>ItemIndexPage</h2>
        { this.props.user.displayName }
        <button onClick={() => this.props.logout()}>logout</button>
        {this.props.item.list.map((item) => {
          return <div>{item.content}</div>;
        })}
      </div>
    )
  }
}