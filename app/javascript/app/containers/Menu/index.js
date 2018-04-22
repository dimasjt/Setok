import React from "react"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
} from "reactstrap"
import { Link } from "react-router-dom"

class Menu extends React.PureComponent {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Setok</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/login" className="nav-link">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/register" className="nav-link">Register</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Menu