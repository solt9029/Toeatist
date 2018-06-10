import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Description.css';

export default class Description extends Component {
  render() {
    return (
      <Container>
        <h1 style={{fontWeight: 'bold'}}>登録手順</h1>
        <Row>
          <Col sm={12} md={4}>
            <h3>1. QRコードを読み取る</h3>
            <img src="/images/header.jpg" style={{width: '100%'}} />
          </Col>
          <Col sm={12} md={4}>
            <h3>2. アイテムの写真を撮る</h3>
            <img src="/images/header.jpg" style={{width: '100%'}} />
          </Col>
          <Col sm={12} md={4}>
            <h3>3. 賞味期限の日付を入力</h3>
            <img src="/images/header.jpg" style={{width: '100%'}} />
          </Col>
        </Row>
        <h1 style={{fontWeight: 'bold', marginTop: '50px'}}>削除手順</h1>
        <Row>
          <Col sm={12} md={4}>
            <h3>QRコードを読み取るだけ</h3>
            <img src="/images/header.jpg" style={{width: '100%'}} />
          </Col>
        </Row>
      </Container>
    );
  }
}