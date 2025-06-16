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

  const eventoEdicion = location.state?.evento;

  useEffect(() => {
    if (eventoEdicion) {
      setNuevoEvento({
        nombre: eventoEdicion.nombre || "",
        lugar: eventoEdicion.lugar || "",
        fecha: eventoEdicion.fecha || "",
        urlImagen: eventoEdicion.urlImagen || "",
      });
    }
  }, [eventoEdicion]);

  const manejarCambio = (e) => {
    setNuevoEvento({ ...nuevoEvento, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, lugar, fecha, urlImagen } = nuevoEvento;

    if (!nombre || !lugar || !fecha || !urlImagen) {
      alert("Completa todos los campos");
      return;
    }

    await agregarEvento(nuevoEvento, eventoEdicion?.id);
    navigate("/eventos");
  };

  return (
    <div className="container mt-5">
      <h2>{eventoEdicion ? "Editar Evento" : "Agregar Evento"}</h2>
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
          <label className="form-label">Fecha del evento</label>
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

        {/* Vista previa de imagen (opcional) */}
        {nuevoEvento.urlImagen && (
          <div className="mb-3 text-center">
            <img
              src={nuevoEvento.urlImagen}
              alt="Vista previa"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              className="img-thumbnail"
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          {eventoEdicion ? "Guardar Cambios" : "Agregar Evento"}
        </button>
      </form>
    </div>
  );
}

export default GestorEventos;
