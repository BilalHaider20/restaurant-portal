'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from "@/lib/store";


export default function StoreProvider({ children }) {

  // Initialize store
  const persistor = persistStore(store);

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
}
