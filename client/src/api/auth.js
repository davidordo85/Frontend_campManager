import client from './client';

export const login = credentials => {
  // TODO: modificar para el backend_campManager
  return client.post('api/auth/login', credentials);
};
