import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tailwindcss/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import userReducer from './features/user'
import themeReducer from './features/theme'
import CourseReducer from './features/coors'
import { MantineProvider } from '@mantine/core';


const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    course: CourseReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
  // <MantineProvider withGlobalStyles withNormalizeCSS>

    <Provider store = {store}>
      <App />
    </Provider>
    // </MantineProvider>

);
    {/* </React.StrictMode>  */}










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
