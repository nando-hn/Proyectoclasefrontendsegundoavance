import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Eventos from "./Eventos";
import GestorEventos from "./GestorEventos";

function App() {
  const [eventos, setEventos] = useState([
    { nombre: "Concierto de Rock", lugar: "Estadio XYZ", fecha: "2025-06-10", urlImagen: "https://www.radioacktiva.com/wp-content/uploads/2024/01/rock-10124.jpg" },
    { nombre: "Feria de Arte", lugar: "Galería ABC", fecha: "2025-06-15", urlImagen: "https://th.bing.com/th/id/OIP.n_h2VragjREk6ANBfJs51AHaFj?rs=1&pid=ImgDetMain" },
     { nombre: "CR7 VS MESSI", lugar: "Ciudad de Mexico", fecha: "2026-06-28", urlImagen: "https://assets.khelnow.com/news/uploads/2022/12/Lionel-Messi-vs-Cristiano-Ronaldo-Lead-Pic-scaled.jpg" },
  ]);

  const agregarEvento = (nuevoEvento) => {
    setEventos([...eventos, nuevoEvento]);
  };

  const eliminarEvento = (index) => {
    const nuevosEventos = eventos.filter((_, i) => i !== index);
    setEventos(nuevosEventos);
  };

  const editarEvento = (index, eventoEditado) => {
    const nuevosEventos = eventos.map((evento, i) => (i === index ? eventoEditado : evento));
    setEventos(nuevosEventos);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/eventos" element={<Eventos eventos={eventos} eliminarEvento={eliminarEvento} editarEvento={editarEvento} />} />
        <Route path="/gestor-eventos" element={<GestorEventos agregarEvento={agregarEvento} />} />
      </Routes>
    </Router>
  );
}

export default App;