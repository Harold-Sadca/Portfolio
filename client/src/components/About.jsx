import { useEffect, useState } from 'react'
import {
  faNode,
  faGithub,
  faDev,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import LetterComponent from './LetterComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.css'

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

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGithub} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDev} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About