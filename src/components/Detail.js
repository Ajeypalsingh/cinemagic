import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useParams from 'react-router-dom'

function Detail() {
    const [movie, setMovie] = useState('');

    useEffect(()=> {

        const API_URL = `https://www.omdbapi.com/?i=tt4154756&apikey=f51bf1dc`
      const getDetail = async () => {
        const response = await axios.get(API_URL);
            setMovie(response.data)
      }
      getDetail()
      console.log(movie)
    }, [])


    return (
        <main className='detail-main'>
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