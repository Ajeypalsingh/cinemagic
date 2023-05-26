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
                    <p className='release'>Released In - {`${movie.Released}`} </p>
                    <p className='duration'>Duration - {`${movie.Runtime}`}</p>
                    <p className='language'>Language - {`${movie.Language}`}</p>
                    <p className='description'>Description - {`${movie.Plot}`}</p>

                </div>
            </div>
        </main>
    )
}

export default Detail;