// ~/services/apiMethods.js
import axios from 'axios';
import api from './api';

// export const getAirports = (query) => api.get('/air/api/airports?query='+query);
// export const getContentProvider = (payload) => api.post('/air/api/content-providers',payload);
// export const getflights = (payload) => api.post('/air/api/search',payload);

// export const updateUserProfile = (data) => api.put('/user/profile', data);
// export const login = (credentials) => api.post('/auth/login', credentials);
// More methods as needed
export const getRestaurants = () => api.get('/portal/api/restaurants');

export const login = (params) => axios.post('http://restaurants-uat.bookmepk.com/auth/api/login', params);