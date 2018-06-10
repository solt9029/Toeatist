import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './AppFooter.css';

export default class AppFooter extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <a href="http://solt9029.com" target="blank" className="copyright">Copyright (C) Kenshi Shiode</a>
      </Container>
    );
  }
}