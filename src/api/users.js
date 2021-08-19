import client from './client';

export const forgotPassword = async create => {
  const url = '/api/v1/auth/forgotpassword';
  console.log(url, create);
  return client.post(url, create);
};
