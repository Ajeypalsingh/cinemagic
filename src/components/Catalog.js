import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Catalog() {

    const [avengers, setAvengers] = useState([]);
    const [anime, setAnime] = useState([]);


    useEffect(() => {
        const API_KEY = 'f51bf1dc';
        const API_URl_one = `http://www.omdbapi.com/?s=avengers&apikey=f51bf1dc`;
        const API_URl_two = `http://www.omdbapi.com/?s=anime&apikey=f51bf1dc`;

        const getAvengers = async () => {
            const response = await axios.get(API_URl_one);
            setAvengers(response.data.Search)
        }
        const getAnime = async () => {
            const response = await axios.get(API_URl_two);
            setAnime(response.data.Search)
        }

        getAvengers();
        getAnime();

    }, []);
    console.log(avengers)
    return (
        <main>
            <div className='container'>
                <div className='catalog-avenger'>
                    <div className='catalog-header'>
                        <h2>Avenger movies....</h2>
                        <button className='sort'>Sort Movies</button>
                    </div>
                    <div className='grid'>
                        <div class="grid-container">
                            {avengers.map(movies =>
                                <div class="grid-item">
                                    <figure>
                                        <img src={`${movies.Poster}`} alt='image-poster' />
                                    </figure>
                                    <div className='description'>
                                        <p className='title'>{movies.Title}</p>
                                    </div>
                                </div>
                            )}

                            {anime.map(movies =>
                                <div class="grid-item">
                                    <figure>
                                        <img src={`${movies.Poster}`} alt='image-poster' />
                                    </figure>
                                    <div className='description'>
                                        <p className='title'>{movies.Title}</p>
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