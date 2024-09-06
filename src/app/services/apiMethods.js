// ~/services/apiMethods.js
import axios from 'axios';
import api from './api';


// export const getAirports = (query) => api.get('/air/api/airports?query='+query);
// export const getContentProvider = (payload) => api.post('/air/api/content-providers',payload);
// export const getflights = (payload) => api.post('/air/api/search',payload);

// export const updateUserProfile = (data) => api.put('/user/profile', data);
// export const login = (credentials) => api.post('/auth/login', credentials);
// More methods as needed

const base_url = 'http://restaurants-uat.bookmepk.com';
//Restaurants
export const getRestaurants = () =>  api.get('http://restaurants-uat.bookmepk.com/portal/api/restaurants');
export const addRestaurants = (params) => api.post('http://restaurants-uat.bookmepk.com/portal/api/restaurants', params);
export const deleteRestaurants =(id)=> api.delete(`http://restaurants-uat.bookmepk.com/portal/api/restaurants/${id}`);


//Branches
export const getBranches = (id) =>  api.get(`${base_url}/portal/api/restaurants/${id}/branches`);


//USER
export const getUsers = () =>  api.get('http://restaurants-uat.bookmepk.com/portal/api/users');

export const login = (params) => axios.post('http://restaurants-uat.bookmepk.com/auth/api/login', params);

export const addUser = (params) => axios.post(`${process.env.base_url}/portal/api/users`, params)