// ~/services/apiMethods.js
import axios from 'axios';
import api from './api';


// export const getAirports = (query) => api.get('/air/api/airports?query='+query);
// export const getContentProvider = (payload) => api.post('/air/api/content-providers',payload);
// export const getflights = (payload) => api.post('/air/api/search',payload);

// export const updateUserProfile = (data) => api.put('/user/profile', data);
// export const login = (credentials) => api.post('/auth/login', credentials);
// More methods as needed


//Restaurants
export const getRestaurants = () =>  api.get(`${process.env.base_url}/portal/api/restaurants`);
export const addRestaurants = (params) => api.post(`${process.env.base_url}/portal/api/restaurants`, params);
export const deleteRestaurants =(id)=> api.delete(`${process.env.base_url}/api/restaurants/${id}`);


//Branches
export const getBranches = (id) =>  api.get(`${process.env.base_url}/portal/api/restaurants/${id}/branches`);


//USER
export const getUsers = () =>  api.get(`${process.env.base_url}/portal/api/users`);
export const addUser = (params) => axios.post(`${process.env.base_url}/portal/api/users`, params)

//LOGIN
export const login = (params) => axios.post(`${process.env.base_url}/auth/api/login`, params);