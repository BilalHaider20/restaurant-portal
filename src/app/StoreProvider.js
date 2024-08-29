'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  const persistor = persistStore(storeRef.current);

  return <Provider store={storeRef.current}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
}