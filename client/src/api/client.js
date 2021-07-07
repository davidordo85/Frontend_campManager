import axios from 'axios';

const config = {baseURL: process.env.REACT_APP_API_BASE_URL};

const client = axios.create(config);


client.interceptors.response.use(
    response => response.data,
    error => {
        if (!error.response) {
            return Promise.reject({message: error.message})
        }
        return Promise.reject({
            message: error.response.statusText,
            ...error.response.data,
        })
    });

export default client;