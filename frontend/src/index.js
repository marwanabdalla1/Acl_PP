// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import 'tailwindcss/tailwind.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {configureStore} from '@reduxjs/toolkit'
// import {Provider} from 'react-redux'
// import userReducer from './Reducers/userReducer'
// import themeReducer from './Reducers/theme'
// import CourseReducer from './Reducers/coors'
// import CountReducer from './Reducers/cartCount'
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';



// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, userReducer)

// //store for redux
// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     theme: themeReducer,
//     course: CourseReducer,
//     count: CountReducer
//   },
// })

// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   //  <React.StrictMode>
//     <Provider store = {store}>
//       <App />
//     </Provider>

// );
    // {/* </React.StrictMode>  */}

import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
   
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </React.StrictMode>
    );
  //   root.render(
  // //  <React.StrictMode>
  //   <Provider store = {store}>
  //     <App />
  //   </Provider>


    








// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
