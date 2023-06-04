import {createSlice} from "@reduxjs/toolkit"
import React, { useEffect, useState } from 'react';
 


// const initialStateValue = {title: " ", author: "", subject: "", instructor:"", rating:0, minRating:0, maxRating:5, price:0, minPrice:0,maxPrice:1000}

const initialStateValue = {
    minRating: 0,
    maxRating: 5,
    minPrice: 0,
    maxPrice:200
  };
  
  export const courseSlice = createSlice({
    name: "course",
    initialState: initialStateValue,
    reducers: {
      postminrating: (state, action) => {
        state.minRating = action.payload;
      },
      postmaxrating: (state, action) => {
        state.maxRating = action.payload;
      },
      postminprice: (state, action) => {
        state.minPrice = action.payload;
      },
      postmaxprice: (state, action) => {
        state.maxPrice= action.payload
      }

    },
  });
  

export const {postminrating, postmaxrating, postminprice, postmaxprice} = courseSlice.actions

export default courseSlice.reducer






