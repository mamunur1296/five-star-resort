import React, { useContext } from "react";
import { NavDropdown, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../Context/UseContext";

const Nave = () => {
  const { user, logout } = useContext(AuthContext);
  const handalLogOut = () => {
    logout()
      .then((res) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">five-star-resort</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/signup">SignUp</NavLink>
              <NavDropdown title={user?.email} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handalLogOut}>
                  log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nave;
