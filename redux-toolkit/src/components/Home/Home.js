import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/MovieApi";
import {APIKey} from "../../common/apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async () =>{
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`
            )
            .catch((err)=>{
                console.log(err);
            });
           dispatch(addMovies(response.data))
        };
        fetchMovies();
    },[]);
    return (
        <div className='banner-img'>
            <MovieListing />
        </div>
    );
};

export default Home;