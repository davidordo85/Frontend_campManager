import client from './client';

const campsBaseUrl = '/api/v1/camps';

export const getAllCamps = () => {
  const url = `${campsBaseUrl}`;
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
      if (Array.isArray(filterCamp[filter])) {
        for (const element of filterCamp[filter]) {
          operator = !isFirstParam ? '?' : '&';
          filterCampUrl = `${operator}${filter}=${element}`;
          if (!isFirstParam) isFirstParam = true;
        }
      } else {
        filterCampUrl += `${operator}${filter}=${filterCamp[filter]}`;
        if (!isFirstParam) isFirstParam = true;
      }
    }
  });

  const url = `${campsBaseUrl}${filterCampUrl}`;
  return client.get(url);
};

export const createCamp = async create => {
  try {
    const url = `${campsBaseUrl}`;
    const formCreateData = new FormData();
    for (let item in create) {
      formCreateData.append(item, create[item])
    }
    return await client.post(url, formCreateData, {
      headers:{
        "content-type": "application/json"
      }
    });
  } catch (error) {
    throw Error('Server Error', error)
  }
}