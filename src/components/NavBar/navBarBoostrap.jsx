import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,Dropdown
} from "react-bootstrap";
import Facebook from "../Social/facebook";


export default function navBarBoostrap() {
  return (
    <Navbar bg="dark" expand="lg">
        <div className="container">
      <Navbar.Brand href="#home">TuPizza</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="social-media" id="social-media">
            <ul className="navbar-nav mx-auto">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </Nav>
        <Dropdown>
            <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><i className="fa fa-user"></i>TuPizza</Dropdown.Item>
               <Dropdown.Item href=""><Facebook/></Dropdown.Item>
              <Dropdown.Item href="#/action-3"><i className="fab fa-google"></i>Login with Gmail</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
