import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Menubar = () => {
  return (
    <>
    

  <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
  <Container>
  <Navbar.Brand href="#home">Mint Finance</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#consulting">Consulting</Nav.Link>
      <Nav.Link href="#research">Research</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}

export default Menubar
