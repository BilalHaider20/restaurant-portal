import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from "redux-persist";
import storage from "./storage";
import {  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import { combineReducers } from 'redux';

const persistConfig = {
  timeout: 500,
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}