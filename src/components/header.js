import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
  >
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark text-light fixed-top">
      <a href="#" class="navbar-brand">Devls</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="navbar-expand-content" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbar-expand-content">
        <ul class="navbar-nav form-inline">
          <li class="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/" className="nav-link">Services</Link>
          </li>
          <li class="nav-item">
            <Link to="/" className="nav-link">About</Link>
          </li>

          <li class="nav-item">
            <Link to="/" className="nav-link">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
