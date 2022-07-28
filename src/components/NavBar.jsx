import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
