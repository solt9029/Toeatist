import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Button, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../actions/user';

const AppNavbar = (props) => {
  let createButton = () => {
    if (!props.createButton) {
      return;
    }
    return <Button color="success" style={{margin: '5px'}} href="/item/create">追加</Button>;
  };

  let deleteButton = () => {
    if (!props.deleteButton) {
      return;
    }
    return <Button color="success" style={{margin: '5px'}} href="/item/delete">削除</Button>;
  };

  let logoutButton = () => {
    if (!props.logoutButton) {
      return;
    }
    return <Button color="outline-warning" style={{margin: '5px'}} onClick={() => props.logout()}>ログアウト</Button>;
  }

  return (
    <Navbar color="light" light style={{borderBottom: 'solid 1px #eee'}}>
      <Container>
        <NavbarBrand href="/" style={{fontSize: '30px', fontWeight: 'bold'}}>Toeatist</NavbarBrand>
        <div className="ml-auto">
          {createButton()}
          {deleteButton()}
          {logoutButton()}
        </div>
      </Container>
    </Navbar>
  )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);