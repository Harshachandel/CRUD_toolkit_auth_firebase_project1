// const { configureStore } = require("@reduxjs/toolkit");

import { configureStore } from "@reduxjs/toolkit";
import  moiveReducer from './moiveSlices';
import genreReducer from './genreSlice';

// const store =  configureStore({
    
// })

const store = configureStore({
    reducer:{
        movie: moiveReducer,
        genre: genreReducer
    },
})

export default store