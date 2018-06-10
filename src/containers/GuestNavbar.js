import React from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Button, Collapse, NavbarTogllerIcon } from 'reactstrap';
import { connect } from 'react-redux';

const GuestNavbar = (props) => (
  <Navbar color="light" light style={{borderBottom: 'solid 1px #eee'}}>
    <Container>
      <NavbarBrand href="/" style={{fontSize: '30px', fontWeight: 'bold'}}>Toeatist</NavbarBrand>
    </Container>
  </Navbar>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestNavbar);