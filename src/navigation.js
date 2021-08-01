import React from "react";
import { Link } from "react-router-dom";
const navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="App container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            JOBS
          </Link>
          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/Jobs">
                Vaccancies
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link classNameName="button is-light">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navigation;
