// utils/tokenManager.js
import {makeStore} from '@/lib/store';
import axios from 'axios';
import { setToken } from '@/lib/features/auth/authSlice';


export const getToken = async () => {
    const state = makeStore().getState();// Get the entire Redux state
    let token = state.auth.token;
  
    if (token) {
        return token;
    }

    try {
        
        const response = await axios.post('http://restaurants-uat.bookmepk.com/auth/api/login', {
            email: "saadahmad@bookme.pk",
            password: "12345"
        });
        const newToken = response.data.Token;
        makeStore().dispatch(setToken(newToken)); 
        return newToken;
    } catch (error) {
        console.log('error', error);
    }
};
