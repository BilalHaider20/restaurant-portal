// utils/api.js
import axios from 'axios';
import { getToken } from '../utils/tokenManager';

let isRefreshing = false;
let failedQueue = [];

const api = axios.create({
    baseURL: 'http://restaurants-uat.bookmepk.com',
    timeout: 10000, // Request timeout
});

api.interceptors.request.use(async (config) => {
    try {
        const token = await getToken(); // Retrieve the token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Set auth header
        }
    } catch (error) {
        console.error('Error getting token', error);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { config, response } = error;

        if (response) {
            const { status } = response;

            if (status === 401) {
                if (!isRefreshing) {
                    isRefreshing = true;

                    try {
                        const newToken = await getToken();
                        failedQueue.forEach((prom) => prom.resolve(newToken));
                        failedQueue = [];
                        isRefreshing = false;

                        return api(config);
                    } catch (err) {
                        failedQueue.forEach((prom) => prom.reject(err));
                        failedQueue = [];
                        isRefreshing = false;

                        return Promise.reject(err);
                    }
                }

                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((newToken) => {
                    config.headers.Authorization = `Bearer ${newToken}`;
                    return api(config);
                });
            }
        } else {
            // Handle errors without response (e.g., network errors)
            console.error('Network or other error', error);
        }

        return Promise.reject(error);
    }
);


export default api;
