import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(){


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary-color">
        <div className="container">
          <a className="navbar-brand" href="#">RINGPIZZA</a>
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
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </li>
              </ul>
            </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <Link > 
            <button className="btn btn-lg btn-outline-warning" to='/products'>Login</button>
            </Link>
          </div>
        </div>
      </nav>
    )
}