import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-dark bg-dark container">
        <NavLink to="/" className="navbar-brand">
          Todo
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
