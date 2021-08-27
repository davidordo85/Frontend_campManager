import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const authPath = '/api/v1/auth';
const usersPath = '/api/v1/users/';

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/login`, credentials)
    .then(({ token, role }) => {
      if (remember) {
        storage.remember('auth', token);
        storage.remember('role', role);
      }
      configureClient({ token, role });
      storage.set('auth', token);
      storage.set('role', role);
    })
    .catch(error => {
      if (error.data.error === 'Invalid credentials') {
        throw Error('Invalid credentials');
      } else {
        throw Error('Server Error', error);
      }
    });
};
export const logout = () => {
  return Promise.resolve()
    .then(() => {
      resetClient();
    })
    .then(() => {
      storage.remove('auth', 'role');
    })
    .catch(error => {
      throw Error('Server Error', error);
    });
};

export const registerUser = async register => {
  try {
    const url = `${authPath}/register`;
    const formRegisterData = new FormData();
    for (let item in register) {
      formRegisterData.append(item, register[item]);
    }
    return await client.post(url, formRegisterData, {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    const errorMsg = error.data.error;
    if (errorMsg.startsWith('User validation failed: password: Path')) {
      throw Error(
        'Validation Error: password must be at least 6 characters long',
        error,
      );
    } else {
      throw Error('Server Error', error);
    }
  }
};
export const editProfile = async (id, newData) => {
  const url = `${usersPath}${id}/`;
  const editData = new FormData();
  for (let item in newData) {
    editData.append(item, newData[item]);
  }
  return await client.put(url, editData);
};

export const editPhotoProfile = (id, photoData) => {
  const url = `${usersPath}${id}/photo`;
  const formData = new FormData();
  formData.append('file', photoData);
  return client.put(url, formData);
};

export const editCVProfile = (id, cvData) => {
  const url = `${usersPath}${id}/cv`;
  const formData = new FormData();
  formData.append('file', cvData);
  return client.put(url, formData);
};

export const getMyCampsRequest = id => {
  const url = `${usersPath}${id}/solics`;
  return client.get(url);
};

export const getMe = () => {
  const url = `${authPath}/me`;
  return client.get(url);
};

export const getUser = () => {
  const url = '/api/v1/users';
  return client.get(url);
};

export const editRole = (data, id) => {
  const url = `/api/v1/users/${id}`;
  return client.put(url, data);
};
