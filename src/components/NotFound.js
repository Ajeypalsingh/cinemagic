import React from 'react';
import ghostImg from '../images/ghost-img.png';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/cinemagic')
  }
  return (
    <main className='not-found'>
       <Helmet>
        <title>Page not found (404)</title>
      </Helmet>
     <div className='container ghost-flex'>
       <div className='content'>
         <p className='error'>Error 404</p>
         <p className='hello'>Hey Buddy!</p>
         <p className='message'>Page you are looking for doesn't exist.</p>
         <button className='home' onClick={goHome}>Go Home</button>
       </div>
       <figure className='ghost'>
        <img src={ghostImg} alt='ghost-img' />
        <div className='shadow'></div>
       </figure>
     </div>
    </main>
  )
}

export default NotFound