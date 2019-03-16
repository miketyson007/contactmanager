import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                &nbsp; Home
              </Link>
            </li>
            <div className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                &nbsp; Add
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                &nbsp; About
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
