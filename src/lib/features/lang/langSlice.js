import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en'
};


const langSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    }
  },
});

export const { setLanguage} = langSlice.actions;

export default langSlice.reducer;
