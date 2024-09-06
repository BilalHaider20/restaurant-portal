// ~/services/apiMethods.js
import axios from 'axios';
import api from './api';


// export const getAirports = (query) => api.get('/air/api/airports?query='+query);
// export const getContentProvider = (payload) => api.post('/air/api/content-providers',payload);
// export const getflights = (payload) => api.post('/air/api/search',payload);

// export const updateUserProfile = (data) => api.put('/user/profile', data);
// export const login = (credentials) => api.post('/auth/login', credentials);
// More methods as needed


// const params = {
//     name: 'Salt N Pepper',
//     email: '1pizza111@pizza.com',
//     phone_number: '03244194429',
//     cuisine: 'italian',
//     price_range: '$$',
//     description: 'lorem',
//     restaurant_id: '3',
//     phone_number_country: 'PK'
// }
export const getRestaurants = () =>  api.get('http://restaurants-uat.bookmepk.com/portal/api/restaurants');

export const getUsers = () =>  api.get('http://restaurants-uat.bookmepk.com/portal/api/users');

export const deleteRestaurants =(id)=> api.delete(`http://restaurants-uat.bookmepk.com/portal/api/restaurants/${id}`);

// export const getBranches = () => 

export const login = (params) => axios.post('http://restaurants-uat.bookmepk.com/auth/api/login', params);

export const addUser = (params) => axios.post(`${process.env.base_url}/portal/api/users`, params)