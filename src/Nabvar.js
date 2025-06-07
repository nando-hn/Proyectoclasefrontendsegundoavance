import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ height: "70px", backgroundColor: "#004085" }}>
      <div className="container">
        <Link 
          className="navbar-brand fs-3 fw-bold" 
          to="/" 
          style={{ marginLeft: "10px" }}
        >
          Catálogo de Eventos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/eventos">
                Eventos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/gestorEventos">
                Gestor de Eventos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
