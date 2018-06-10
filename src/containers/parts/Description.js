import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Description.css';

export default class Description extends Component {
  render() {
    return (
      <Container>
        <div className={styles.row}>
          <h1 className={styles.title}>登録手順</h1>
          <Row>
            <Col xs={12} md={4}>
              <h4>1. QRコードを読み取る</h4>
              <img src="/images/header.jpg" className={styles.img} />
            </Col>
            <Col xs={12} md={4}>
              <h4>2. アイテムの写真を撮る</h4>
              <img src="/images/header.jpg" className={styles.img} />
            </Col>
            <Col xs={12} md={4}>
              <h4>3. 賞味期限の日付を入力</h4>
              <img src="/images/header.jpg" className={styles.img} />
            </Col>
          </Row>
        </div>
        <div className={styles.row}>
          <h1 className={styles.title}>削除手順</h1>
          <Row>
            <Col xs={12} md={4}>
              <h4>QRコードを読み取るだけ</h4>
              <img src="/images/header.jpg" className={styles.img} />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}