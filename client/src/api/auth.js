import client, { configureClient, resetClient } from './client';

export const login = credentials => {
  return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    configureClient({ accessToken });
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
  });
};
