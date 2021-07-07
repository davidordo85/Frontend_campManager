import client from "./client";


const campsBaseUrl = '/api/v1';

export const getAllCamps = () => {
    const url = `${campsBaseUrl}/camps`;
    return client.get(url)
};

