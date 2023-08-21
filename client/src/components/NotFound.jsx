import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import '../App.css';
import './notFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setLetterClass('text-animate-hover');
  }, []);

  return (
    <>
      <div className='not-found'>
        <h1>
          <span className={letterClass}>Page Not Found</span>
        </h1>
        <Link to='/home' className='flat-button'>
          Back To Home
        </Link>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default NotFound;
