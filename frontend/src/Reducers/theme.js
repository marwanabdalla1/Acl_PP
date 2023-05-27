import {createSlice} from "@reduxjs/toolkit"


const initialStateValue = ""



export const themeSlice = createSlice({
    name: "theme",

    initialState: {value: initialStateValue}, // the initial state value

    reducers: {
        changeColor: (state, action) => {  //essentialy the function or the action
            state.value = action.payload   
        },
        
    },
})

export const {changeColor} = themeSlice.actions

export default themeSlice.reducer