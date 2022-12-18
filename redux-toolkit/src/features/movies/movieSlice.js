import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import {APIKey} from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies =createAsyncThunk('movies/fetchAsyncMovies', async () =>{
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
    return response.data;
});

export const fetchAsyncShows =createAsyncThunk('movies/fetchAsyncShows', async () =>{
    const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`
    )
    return response.data;
});

export const fetchAsyncMovieOrShowDetail =createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) =>{
    const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`
    )
    return response.data;
});

const initialState ={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        removeMovieOrShowDetail: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log("fetch successfully");
            return {...state,movies: payload};
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload})=>{
            console.log("fetch successfully");
            return {...state,shows: payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload})=>{
            console.log("fetch successfully");
            return {...state,selectedMovieOrShow: payload};
        },
    }
})

export const {removeMovieOrShowDetail} = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies; 
export const getAllShows = (state)=> state.movies.shows;
export const getMovieOrShowDetail = (state)=> state.movies.selectedMovieOrShow;
export default movieSlice.reducer;