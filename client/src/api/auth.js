import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const authPath = '/api/v1/auth';

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/login`, credentials)
    .then(({ token }) => {
      if(remember){
        storage.remember('auth', token);
      }
      configureClient({ token });
      storage.set('auth', token);
    })
    .catch(error => {
      if (error.data.error === "Invalid credentials") {
        throw Error('Invalid credentials')
      } else {
        throw Error('Server Error', error)
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
    })
    .catch(error => {
      throw Error('Server Error', error)
    });
}

export const registerUser = async register => {
  try {
    const url = `${authPath}/register`;
    const formRegisterData = new FormData();
    for (let item in register) {
      formRegisterData.append(item, register[item])
    }
    return await client.post(url, formRegisterData, {
      headers:{
        "content-type": "application/json"
      }
    });
  } catch (error) {
    const errorMsg = error.data.error
    if (errorMsg.startsWith('User validation failed: password: Path')) {
      throw Error('Validation Error: password must be at least 6 characters long', error)
    } else {
      throw Error('Server Error', error)
  }}
}
