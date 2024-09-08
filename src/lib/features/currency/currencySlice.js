import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cur: 'PKR'
};


const currencySlice = createSlice({
  name: 'cur',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.cur = action.payload;
      
    }
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
