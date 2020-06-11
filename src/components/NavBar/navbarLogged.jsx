import React from "react";
import "./navBarLogged.css";
import logo from "../../assets/img/logo.png";
import ShoppingCart from "../ShoppingCart/ShoppingCartCount";

export default function NavBarLogged() {

    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary-color">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo}></img>
          TUPIZZA
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
        <div className="nav-cart">
          <ul className="navbar-nav">
            <li>
              <i className="fa fa-user-circle"></i>Yochiro
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
