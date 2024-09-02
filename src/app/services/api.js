// ~/services/api.js
import axios from 'axios';
let isRefreshing = false;
let failedQueue = [];

const api = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://bookmesky.com', // Base URL
    timeout: 10000, // Request timeout
});



const getToken = async () => {

    const token =  localStorage.getItem('Token');

    if (token) {
        return token;
    }

    // If no token, call an API to get a new token
    try {
        const response = await axios.post('https://bookmesky.com/partner/api/auth/token',{username:"bookme-sky",password:"omi@work321"}); // API to get a new token
        const newToken = response.data.Token;
        localStorage.setItem('Token', newToken);
        return newToken;
    } catch (error) {

        // Handle error, e.g., redirect to login
        throw new Error('Token refresh failed');
    }
};

// Add a request interceptor
api.interceptors.request.use(async (config) => {
        const token = await getToken() // Retrieve token from local storage
        if (token) {

            config.headers.Authorization = `Bearer ${token}`; // Set auth header
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { config, response: { status } } = error;

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
                    // Handle token refresh failure (e.g., redirect to login)
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

        return Promise.reject(error);
    }
);

export default api;
