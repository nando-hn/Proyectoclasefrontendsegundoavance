import React from "react";

function Inicio() {
  const fondoEstilo = {
    backgroundImage: "url('https://www.business-plan-excel.fr/wp-content/uploads/2020/06/Calendrier-2023-Excel-vierge.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundRepeat: "no-repeat"
  };

  const cardEstilo = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center"
  };

  return (
    <div style={fondoEstilo}>
      <div style={cardEstilo}>
        <h1 className="fw-bold mb-4">Bienvenido al Catálogo de Eventos</h1>
        <p className="lead">
          Explora, administra y descubre eventos culturales y artísticos.
        </p>
      </div>
    </div>
  );
}

export default Inicio;
