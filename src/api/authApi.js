import axios from 'axios';

const AuthAPI = axios.create({
  baseURL: 'http://localhost:5000/api', 
  headers: { 'Content-Type': 'application/json' }
});


export const loginUsuario = async (credenciales) => {
  const response = await AuthAPI.post('/login', credenciales);
  return response.data;
};

export default AuthAPI;
