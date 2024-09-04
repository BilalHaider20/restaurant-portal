// ~/services/api.js
import axios from 'axios';
let isRefreshing = false;
let failedQueue = [];

const api = axios.create({
    baseURL: 'http://restaurants-uat.bookmepk.com', // API base URL
    timeout: 10000, // Request timeout
});





export default api;
