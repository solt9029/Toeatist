import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { connect } from 'react-redux';
import styles from '../../styles/AppJumbotron.css';
import { login } from '../../actions/user';

const AppJumbotron = (props) => (
  <Jumbotron className={styles.jumbotron}>
    <Container>
      <h1 className={styles.title}>賞味期限を管理しよう。</h1>
      <div className={styles.text}>
        <p>あのお菓子っていつまでに食べればいいんだっけ？あの卵ってまだ食べられるかな？</p>
        <p>Toeatistで賞味期限を管理しよう。写真を撮ってお手軽に登録＆削除。</p>
      </div>
      <div>
        <button className={`btn btn-lg ${styles.button}`} onClick={() => props.login()}>Googleアカウントでログイン</button>
      </div>
    </Container>
  </Jumbotron>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(login());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppJumbotron);