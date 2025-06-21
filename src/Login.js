import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from './api/authApi';

function Login({ setUsuario }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const manejarLogin = async (e) => {
    e.preventDefault();
    try {
      const { user, session, message } = await loginUsuario({ email, password });
      console.log('Login exitoso:', message, user, session);

      if (!user || !session) {
        setError('Respuesta inesperada del servidor.');
        return;
      }


      setUsuario(user);
      localStorage.setItem('token', session.access_token);


      navigate('/eventos');
    } catch (err) {('Error durante el login:', err.response?.data || err.message);
      setError('Credenciales incorrectas o error al iniciar sesión.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={manejarLogin}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
