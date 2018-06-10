import React, { Component } from 'react';
import { Container } from 'reactstrap';
import styles from '../../styles/AppFooter.css';

export default class AppFooter extends Component {
  render() {
    return (
      <Container fluid className={styles.footer}>
        <a href="http://solt9029.com" target="blank" className={styles.copyright}>Copyright (C) Kenshi Shiode</a>
      </Container>
    );
  }
}