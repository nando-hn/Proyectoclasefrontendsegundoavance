import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GestorEventos({ agregarEvento }) {
  const [nuevoEvento, setNuevoEvento] = useState({
    nombre: "",
    lugar: "",
    fecha: "",
    urlImagen: "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.evento) {
      setNuevoEvento(location.state.evento);
    }
  }, [location.state]);

  const manejarCambio = (e) => {
    setNuevoEvento({ ...nuevoEvento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoEvento.nombre && nuevoEvento.lugar && nuevoEvento.fecha && nuevoEvento.urlImagen) {
      if (location.state?.index !== undefined) {
        agregarEvento(nuevoEvento, location.state.index); // Para edición
      } else {
        agregarEvento(nuevoEvento); // Para nuevo evento
      }
      navigate("/eventos");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Gestor de Eventos</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre del evento"
            value={nuevoEvento.nombre}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="lugar"
            className="form-control"
            placeholder="Lugar del evento"
            value={nuevoEvento.lugar}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha del evento</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={nuevoEvento.fecha}
            onChange={manejarCambio}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="urlImagen"
            className="form-control"
            placeholder="URL de la imagen"
            value={nuevoEvento.urlImagen}
            onChange={manejarCambio}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {location.state?.index !== undefined ? "Guardar Cambios" : "Agregar Evento"}
        </button>
      </form>
    </div>
  );
}

export default GestorEventos;