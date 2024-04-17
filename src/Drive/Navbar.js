import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        Est Drive
      </Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link as={Link} to="/user" style={{ color: "black" }}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
