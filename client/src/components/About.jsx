import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import LetterComponent from './LetterComponent'
import './about.css'
import Profile from './Profile'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <LetterComponent
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm Harold a seasoned Full-Stack Software Engineer with a strong command over a variety of JavaScript/Typescript technologies.
          </p>
          <p align="LEFT">
            Originally a Chef but started wanting cook letter into doughnuts.
          </p>
          <p>
          From Node and Express to Koa, databases like Mongo and MySQL and RESTful API to GraphQL,
           I've navigated through the entire web development landscape.
          </p>
          <p align="LEFT">
          Always up for an adventure, I jump into the tech world with curiosity as my compass.
          From salting dishes to salting passwords, my journey reflects my confidence in tackling anything that comes my way.
          </p>
        </div>
        <Profile />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About