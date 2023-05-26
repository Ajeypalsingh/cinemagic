import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Catalog() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [avengers, setAvengers] = useState([]);
    const [harry, setHarry] = useState([]);
    const [sort, setSort] = useState(false);
    const API_KEY = 'f51bf1dc';


    useEffect(() => {
        const API_URl_one = `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`;
        const API_URl_two = `https://www.omdbapi.com/?s=harry&apikey=${API_KEY}`;

        const getAvengers = async () => {
            const response = await axios.get(API_URl_one);
            setAvengers(response.data.Search);
        }
        const getHarryPotter = async () => {
            const response = await axios.get(API_URl_two);
            setHarry(response.data.Search);
        }
        getAvengers();
        getHarryPotter();
    }, []);


    useEffect(() => {
        const mergedMovies = [...avengers, ...harry];
        setMovies(mergedMovies);
    }, [avengers, harry]);

    const openDescription = (id) => {
        navigate(`/movie/${id}`)
    };

    const sortmovies = () => {
        const sortedMovies = movies.sort((a, b) => a.Title.localeCompare(b.Title));
        setSort(true);
    }

    return (

        <main className='catalog-main'>
            <Helmet>
                <title>Movies Catalog</title>
            </Helmet>
            <div className='container'>
                <div className='catalog-avenger'>
                    <div className='catalog-header'>
                        <h2>Start streaming now....</h2>
                        <button onClick={sortmovies} className='sort'>Sort Movies</button>
                    </div>
                    <div className='grid'>
                        <div className="grid-container">
                            {movies.map(movie =>
                                <div onClick={() => openDescription(movie.imdbID)} className="grid-item" key={movie.imdbID}>
                                    <figure>
                                        <img src={`${movie.Poster}`} alt='image-poster' />
                                    </figure>
                                    <div className='description'>
                                        <p className='title'>{movie.Title}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </main>

    )
}

export default Catalog