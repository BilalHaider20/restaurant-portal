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
      console.log('curr changed to', state.cur);
    }
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
