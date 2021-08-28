import client from './client';

const requestsBaseUrl = '/api/v1/soliccamps';

export const getRequests = () => {
  const url = requestsBaseUrl;
  return client.get(url);
};

export const putRequests = (id, data) => {
  const url = `${requestsBaseUrl}/${id}`;
  return client.put(url, data);
};
