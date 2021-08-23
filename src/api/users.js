import client from './client';

export const forgotPassword = async create => {
  const url = '/api/v1/auth/forgotpassword';
  return client.post(url, create);
};
