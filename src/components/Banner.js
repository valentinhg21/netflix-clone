import React, { useState, useEffect } from 'react'
import axios from '../axios.js';
import requests from '../requests.js';
import './Banner.css'

 const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length -1)])
        }
        fetchData();
    },[])
    console.log(movie)
    
    // This is a function for short sentences for example if there is a sentences with max 150 words, this function
    //Short the sentences and it put "..." in the end sentences
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `
                url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div>
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My list
                    </button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                    {truncate(movie?.overview, 150)}
                </h1>
             
            </div>
            <div className="banner--fadeBottom" />

        
        </header>
    )
}

export default Banner