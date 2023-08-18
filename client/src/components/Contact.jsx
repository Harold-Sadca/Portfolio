import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import LetterComponent from './LetterComponent'
import './contact.css'
import '../App.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <LetterComponent
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            If you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Harold Sadca,
          <br />
          London
          <br />
          <br />
          <span>hsadca@yahoo.com</span>
        </div>
        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={"Harold Sadca"} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={"hsadca@yahoo.com"} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={"London"} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={"London"} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={"hsadca@yahoo.com"} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={"Harold Sadca"} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact