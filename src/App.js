import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Eventos from "./Eventos";
import GestorEventos from "./GestorEventos";
import Login from "./Login";
import API from "./api/eventosApi"; 

function App() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState(null); // 👈 nuevo

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await API.get('/');
        const eventosMapeados = data.map(ev => ({
          ...ev,
          urlImagen: ev.urlimagen,
        }));
        setEventos(eventosMapeados);
      } catch {
        setError("Error cargando los eventos");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const agregarEvento = async (nuevoEvento, id) => {
    try {
      if (id) {
        const { data } = await API.put(`/${id}`, nuevoEvento);
        const eventoActualizado = {
          ...data[0],
          urlImagen: data[0].urlimagen,
        };
        setEventos(ev => ev.map(e => e.id === id ? eventoActualizado : e));
      } else {
        const { data } = await API.post('/', nuevoEvento);
        const nuevoEventoConImagen = {
          ...data,
          urlImagen: data.urlimagen,
        };
        setEventos(ev => [...ev, nuevoEventoConImagen]);
      }
    } catch {
      setError(`Error ${id ? 'actualizando' : 'creando'} el evento`);
    }
  };

  const eliminarEvento = async (id) => {
    try {
      await API.delete(`/${id}`);
      setEventos(ev => ev.filter(e => e.id !== id));
    } catch {
      setError("Error eliminando el evento");
    }
  };

  if (loading) return <p>Cargando eventos...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <Router>
      <Navbar usuario={usuario} setUsuario={setUsuario} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={
          <Eventos
            eventos={eventos}
            eliminarEvento={usuario ? eliminarEvento : null}
            editarEvento={usuario ? agregarEvento : null}
          />
        } />
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />
        <Route path="/gestor-eventos" element={
          usuario ? <GestorEventos agregarEvento={agregarEvento} /> : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;