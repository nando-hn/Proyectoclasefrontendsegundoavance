// src/Eventos.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Eventos({ eventos, eliminarEvento, editarEvento }) {
  const navigate = useNavigate();

  const handleEliminar = (evento) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
      eliminarEvento(evento.id);
    }
  };

  const handleEditar = (evento) => {
    navigate("/gestor-eventos", { state: { evento } });
  };

  return (
    <div className="container mt-5">
      <h2>Eventos</h2>
      {eventos.length === 0 ? (
        <p>No hay eventos registrados.</p>
      ) : (
        <div className="row">
          {eventos.map((evento) => (
            <div key={evento.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={evento.urlImagen}
                  className="card-img-top"
                  alt={evento.nombre}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{evento.nombre}</h5>
                  <p className="card-text">
                    <strong>Lugar:</strong> {evento.lugar} <br />
                    <strong>Fecha:</strong> {evento.fecha}
                  </p>
                  <div className="d-flex justify-content-between">
                    {editarEvento && (
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEditar(evento)}
                      >
                        Editar Evento
                      </button>
                    )}
                    {eliminarEvento && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleEliminar(evento)}
                      >
                        Eliminar Evento
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Eventos;
