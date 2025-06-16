import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ usuario, setUsuario }) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token"); 
    setUsuario(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ height: "70px" }}>
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold" to="/">
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
              <Link className="nav-link fw-semibold" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/eventos">Eventos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/gestor-eventos">Gestor de Eventos</Link>
            </li>
            {usuario && (
              <li className="nav-item">
                <button className="btn btn-outline-light btn-sm ms-3" onClick={cerrarSesion}>
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
