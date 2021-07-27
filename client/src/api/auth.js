import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const authPath = '/api/v1/auth';

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/login`, credentials)
    .then(({ token }) => {
      configureClient({ token });
      return token;
    })
    .then(token => {
      if (remember) {
        storage.set('auth', token);
      }
    });
};

export const logout = () => {
  return Promise.resolve()
    .then(() => {
      resetClient();
    })
    .then(() => {
      storage.remove('auth');
    });
};
export const registerUser = register => {
  const url = `${authPath}/register`;
  const formRegisterData = new FormData();
  for (let item in register) {
    formRegisterData.append(item, register[item])
  }
  return client.post(url, formRegisterData, {
    headers:{
      "content-type": "application/json"
    }
  });
}