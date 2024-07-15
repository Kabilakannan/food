import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';


function HeadNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-teritary">
    <Container >
      <Navbar.Brand href="#home"><h1 className="text-primary"><span><i className="bi bi-yelp"></i>Pizza Shop</span></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
          <Nav.Link href="#menu" className="fw-bold">Menu</Nav.Link>
          <Nav.Link href="#Must try" className="fw-bold">Must Try</Nav.Link>
          <Nav.Link href="#contact us" className="fw-bold">Contact us</Nav.Link>
          <Cart/>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default HeadNavBar