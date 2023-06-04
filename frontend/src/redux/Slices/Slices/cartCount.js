import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  favoriteCourses: [],
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addCourse: (state, action) => {
      state.favoriteCourses.push(action.payload);
    },
    removeCourse: (state, action) => {
      const id = action.payload;
      state.favoriteCourses = state.favoriteCourses.filter(
        (course) => course !== id
      );
    },
  },
});

export const { increment, addCourse, removeCourse } = countSlice.actions;
export default countSlice.reducer;