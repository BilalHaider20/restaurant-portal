import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  token: null,
  user:null,
  permissions:[],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state , action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setUser:(state,action)=>{
      state.user = action.payload;
    },
    clearUser:(state)=>{
      state.user = {};
    },
    setPermissions:(state,action)=>{
      state.permissions = action.payload;
    },  
    clearPermissions:(state)=>{
      state.permissions = [];
    },
  },
});

export const { setToken, clearToken,setUser,clearUser,setPermissions,clearPermissions } = authSlice.actions;

export default authSlice.reducer;
