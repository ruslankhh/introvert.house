import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Introvert
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/projects">Architecture</Link>
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/pricing">Pricing</Link>
        <Link className="navbar-item" to="/contacts">Contacts</Link>
      </div>
    </div>
  </nav>
)

export default Navbar
