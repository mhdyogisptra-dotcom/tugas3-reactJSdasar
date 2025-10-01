import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book fa-2x me-2" style={{ color: "blue" }}></i>
          <span className="fs-4 fw-bold">Bookstore</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link px-3 ${location.pathname === '/' ? 'active fw-bold text-primary' : ''}`}
                style={{ transition: 'color 0.3s' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/team" 
                className={`nav-link px-3 ${location.pathname === '/team' ? 'active fw-bold text-primary' : ''}`}
                style={{ transition: 'color 0.3s' }}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link px-3 ${location.pathname === '/contact' ? 'active fw-bold text-primary' : ''}`}
                style={{ transition: 'color 0.3s' }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/book" 
                className={`nav-link px-3 ${location.pathname === '/book' ? 'active fw-bold text-primary' : ''}`}
                style={{ transition: 'color 0.3s' }}
              >
                Book
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-primary me-2">Login</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Register</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
