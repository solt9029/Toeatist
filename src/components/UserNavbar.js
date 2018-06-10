import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Button, Collapse, NavbarTogllerIcon } from 'reactstrap';

const UserNavbar = (props) => (
  <Navbar color="light" light style={{borderBottom: 'solid 1px #eee'}}>
    <Container>
      <NavbarBrand href="/" style={{fontSize: '30px', fontWeight: 'bold'}}>Toeatist</NavbarBrand>
      <div className="ml-auto">
        <Button color="success" href="/item/create">追加</Button>
        <Button color="success" style={{margin: '10px'}} href="/item/delete">削除</Button>
        <Button color="outline-warning" onClick={props.logout}>ログアウト</Button>
      </div>
    </Container>
  </Navbar>
);

export default UserNavbar;