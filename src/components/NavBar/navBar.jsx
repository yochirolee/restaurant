import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

export default function NavBarBoostrap() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark-color">
      <div className="container">
        <a className="navbar-brand" href="#">
          TuPIZZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="social-media">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
          <Dropdown>
            <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"><i className="fa fa-user"></i>TuPizza</Dropdown.Item>
              <Dropdown.Item href="#/action-2"><i className="fab fa-facebook-f"></i>Login with Facebook</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><i className="fab fa-google"></i>Login with Gmail</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
