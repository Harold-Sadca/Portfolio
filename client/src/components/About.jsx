import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import LetterComponent from './LetterComponent';
import './about.css';
import Profile from './Profile';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setLetterClass('text-animate-hover');
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <LetterComponent
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey there, I'm Harold! While my journey began in the culinary world
            as a Chef, my passion eventually led me to a new adventure – the
            world of Full-Stack Software Engineering.
          </p>
          <p align='LEFT'>
            From salting dishes to salting passwords, I've made quite the
            transition.
          </p>
          <p>
            From Node to Koa, I'm at ease, expressing wonders with great
            expertise. Databases Mongo and MySQL I've tamed, in web development,
            I'm widely acclaimed. RESTful APIs, GraphQL's domain, I've ventured
            through it all, no terrain in vain.
          </p>
          <p align='LEFT'>
            I've delved deep into the world of coding with curiosity as my
            compass. Whether I'm deciphering complex algorithms or refining
            intricate code structures, my thirst for knowledge kept me moving.
            This journey of mine reflects a strong confidence in taking on any
            coding challenge that comes my way.
          </p>
        </div>
        <Profile />
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default About;
