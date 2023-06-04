// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import CourseReducer from './Slices/Slices/coors'
 import CountReducer from './Slices/Slices/cartCount'
 import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root', 
  storage
}
const rootReducer = combineReducers({
  course: CourseReducer,
  cart: CountReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
//   reducer: rootReducer,
  middleware: [thunk]

})

export const persistor = persistStore(store)