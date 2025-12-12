
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "./Api";

export const addMovie = createAsyncThunk('addMovie',async(data)=>{
    // console.log(data)
    const res = await Api.post('/movie',data)
    console.log(res.data)
    return res.data;
}) 

export const getMovie = createAsyncThunk('getMovie',async()=>{
    const res = await Api.get('/movie');
    return res.data;
})

export const deleteMovie = createAsyncThunk('deleteMovie',async(id)=>{
    await Api.delete(`/movie/${id}`);
    return id;
})

export const updateMovie = createAsyncThunk('updateMovie',async({id,data})=>{
    const res = await Api.put(`/movie/${id}`,data)
    return res.data;
})


const moiveSlices = createSlice({
    name : 'movie',
    initialState:{
        movie:[],

    },
    reducers:{},
    extraReducers: (res)=>{
        res.addCase(addMovie.fulfilled,(state,action)=>{
            state.movie.push(action.payload)
        }),
        res.addCase(getMovie.fulfilled, (state,action)=>{
            state.movie = action.payload
        }),
        res.addCase(deleteMovie.fulfilled,(state,action)=>{
            state.movie = state.movie.filter((ele)=>ele.id !== action.payload);
        }),
        res.addCase(updateMovie.fulfilled,(state,action)=>{
            state.movie = state.movie.map((ele)=>ele.id === action.payload.id ? action.payload : ele)
        })
    }
})

export default moiveSlices.reducer 