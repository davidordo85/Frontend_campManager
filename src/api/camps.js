import client from './client';

const campsBaseUrl = '/api/v1/camps';

export const getAllCamps = () => {
  const url = `${campsBaseUrl}/nopagination`;
  return client.get(url);
};

export const getCampDetail = _id => {
  const url = `${campsBaseUrl}/${_id}`;
  return client.get(url);
};

export const getPaginationCamps = location => {
  const url = `${campsBaseUrl}${location}`;
  return client.get(url);
};

export const filteredCamp = filterCamp => {
  let filterCampUrl = '';
  let isFirstParam = false;

  Object.keys(filterCamp).forEach(filter => {
    let operator = !isFirstParam ? '?' : '&';

    if (filterCamp[filter] && filterCamp[filter].length > 0) {
      if (Array.isArray(filterCamp[filter].length >= 1)) {
        for (const element of filterCamp[filter]) {
          filterCampUrl = `${operator}${filter}=${element}`;
        }
      } else filterCampUrl += `${operator}${filter}=${filterCamp[filter]}`;
      if (!isFirstParam) isFirstParam = true;
    }
  });

  const url = `${campsBaseUrl}${filterCampUrl}`;
  return client.get(url);
};

export const createCamp = camp => {
  const url = `${campsBaseUrl}`;
  return client.post(url, camp);
};

export const updateCamp = (data, id) => {
  const url = `${campsBaseUrl}/${id}`;
  return client.put(url, data);
};

export const subscribe = data => {
  const url = `${campsBaseUrl}/${data}/subscribe`;
  return client.put(url);
};

export const unSubscribe = data => {
  const url = `${campsBaseUrl}/${data}/unsubscribe`;
  return client.put(url);
};

export const deletedCamp = id => {
  const url = `${campsBaseUrl}/${id}`;
  return client.delete(url);
};
