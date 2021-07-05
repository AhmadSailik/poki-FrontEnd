import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Navbar,Container} from 'react-bootstrap'

class Header extends React.Component{

  render(){
    return(
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Poki</Navbar.Brand>
    <Link to='/'>Home</Link>
    <Link to='/Faviourit'>Faviourit</Link>
    </Container>
  </Navbar>
      </>
    )
  }
}
export default Header;