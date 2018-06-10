import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Button, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/user';

const UserNavbar = (props) => (
  <Navbar color="light" light style={{borderBottom: 'solid 1px #eee'}}>
    <Container>
      <NavbarBrand href="/" style={{fontSize: '30px', fontWeight: 'bold'}}>Toeatist</NavbarBrand>
      <div className="ml-auto">
        <Button color="success" href="/item/create">追加</Button>
        <Button color="success" style={{margin: '10px'}} href="/item/delete">削除</Button>
        <Button color="outline-warning" onClick={() => props.logout()}>ログアウト</Button>
      </div>
    </Container>
  </Navbar>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavbar);