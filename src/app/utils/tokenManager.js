// utils/tokenManager.js
import axios from 'axios';
import { setToken } from '@/lib/features/auth/authSlice';
import { makeStore } from '@/lib/store';

function getFromStore() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const token = makeStore().getState().auth.token;
            resolve(token)
        }, 1000);
    });
}
export const getToken = async () => {
    
    
        const token = await getFromStore();
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
