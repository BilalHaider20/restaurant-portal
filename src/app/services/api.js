// utils/api.js
import axios from 'axios';
import { getToken } from '../utils/tokenManager';
import store, {makeStore} from "@/lib/store";
import {toast} from "react-toastify";


let isRefreshing = false;
let failedQueue = [];

const api = axios.create({
    baseURL: 'http://restaurants-uat.bookmepk.com',
    timeout: 10000, // Request timeout
});

api.interceptors.request.use(async (config) => {
    try {

        if (typeof window !== 'undefined') {
            const token = await store.getState().auth.token;
            // const token = await getToken(); // Retrieve the token
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; // Set auth header
            }
        }else{

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
        // if (typeof window !== 'undefined') {
        // Router.push('/login');
        // }
        return response;
    },
    async (error) => {
        const { config, response } = error;

        if (response) {


            const { status } = response;

            if (status === 401) {

                toast("Session Expired,please login Again")

            }
        } else {

            // Handle errors without response (e.g., network errors)
            console.error('Network or other error', error);
        }

        return Promise.reject(error);
    }
);


export default api;
