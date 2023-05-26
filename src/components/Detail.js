import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Detail() {
    const [movie, setMovie] = useState('');
    const { detail } = useParams();
    useEffect(() => {

        const API_URL = `https://www.omdbapi.com/?i=${detail}&apikey=f51bf1dc`
        const getDetail = async () => {
            const response = await axios.get(API_URL);
            setMovie(response.data)
        }
        getDetail()
        console.log(movie)
    }, [])


    return (
        <main className='detail-main'>
            <Helmet>
                <title>Movie Detail</title>
            </Helmet>
            <div className='detail'>
                <figure className='detail-fig'>
                    <img src={`${movie.Poster}`} alt='poster' />
                </figure>
                <div className='detail-content'>
                    <p className='title'>{`${movie.Title}`}</p>
                    <p className='release'><span>Released In</span>- {`${movie.Released}`} </p>
                    <p className='duration'><span>Duration</span> - {`${movie.Runtime}`}</p>
                    <p className='language'><span>Language</span> - {`${movie.Language}`}</p>
                    <p className='description'> <span>Description</span> - {`${movie.Plot}`}</p>

                </div>
            </div>
        </main>
    )
}

export default Detail;