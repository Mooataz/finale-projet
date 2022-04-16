import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
    //<Link to ='/List'>Show Modeles</Link>
    
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Wellcome </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link > <Link to ='/' >Liste  Modeles</Link> </Nav.Link>
      
      
    </Nav>
    <Nav>
     
      <Nav.Link eventKey={2} href="#memes">
       <Link to='/Add'> Ajouter un modele </Link>
       <Link to='/Modif'>  Modifier un modele</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navigation