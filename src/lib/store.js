import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import storage from "./storage"; // Assuming this is set up to handle localStorage or a custom one
import langReducer from './features/lang/langSlice';
import currencyReducer from './features/currency/currencySlice';
import authSliceReducer from './features/auth/authSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from 'redux';

// Persist configuration
const persistConfig = {
  timeout: 500, // optional timeout for rehydration
  key: "root",  // root key for persistence
  storage,      // storage to use (localStorage, sessionStorage, or custom)
  whitelist: ['auth', 'lang', 'cur'], // Only persist these reducers
};

// Combine all slices/reducers into rootReducer
const rootReducer = combineReducers({
  lang: langReducer,
  cur: currencyReducer,
  auth: authSliceReducer,
});

// Persist the combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Function to create and configure the Redux store



 const makeStore = () => {
  return configureStore({
    reducer: persistedReducer, // Use persisted reducer
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-prod environments
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore redux-persist actions
          },
        }),
  });
};
export default makeStore()
