import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import LetterComponent from './LetterComponent';
import '../App.css';
import './home.css';
import SphereAnimation from './SphereAnimation';
import { jobTitles } from '../utils/jobTitles';

const Home = () => {
  const texts = [
    'React',
    'GraphQL',
    'TypeScript',
    'Sequelize',
    'Apollo',
    'NodeJS',
    'Express',
    'JWT',
    'Passport',
    'Git',
    'Netlify',
    'GraphQL',
    'Angular',
    'JavaScript',
    'Socket.io',
    'MySQL',
    'Redux',
    'REST',
    'Cloudinary',
    'PostgreSQL',
    'CSS',
    'TDD',
    'MongoDB',
  ];
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [' ', 'H', 'a', 'r', 'o', 'l', 'd'];
  // const jobArray = [
  //   's',
  //   'o',
  //   'f',
  //   'w',
  //   'a',
  //   'r',
  //   'e',
  //   ' ',
  //   'e',
  //   'n',
  //   'g',
  //   'i',
  //   'n',
  //   'e',
  //   'e',
  //   'r',
  //   '.',
  // ];

  useEffect(() => {
    return setLetterClass('text-animate-hover');
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <LetterComponent
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <div className='job-titles'>
              <div className='titles-list'>
                {jobTitles.map((jobArray, idx) => {
                  return (
                    <span key={idx} className='job-title'>
                      <LetterComponent
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </h1>
          <h2>Full Stack Developer / JavaScript And TypeScript Ninja</h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
          <Link to='/about' className='flat-button'>
            ABOUT
          </Link>
          <Link to='/projects' className='flat-button'>
            WORK
          </Link>
        </div>
        <SphereAnimation texts={texts} />
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Home;
