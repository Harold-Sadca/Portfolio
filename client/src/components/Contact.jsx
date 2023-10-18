import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import {
  faNode,
  faGithub,
  faDev,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LetterComponent from './LetterComponent';
import './contact.css';
import '../App.css';
import { validateEmail } from '../utils/helpers';

const initialValue = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    return setLetterClass('text-animate-hover');
  }, []);

  const [formFields, setFormFields] = useState(initialValue);

  const handleFieldChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const valid = validateEmail(formFields.email);

    if (!valid) {
      toast.warn('Please put a valid email', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          () => {
            toast.success('Message successfully sent!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
            setFormFields(initialValue);
          },
          () => {
            toast.error('Failed to send the message, please try again', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
        );
    }
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1 className='contact-name'>
            <LetterComponent
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            If you have any other requests or questions, don't hesitate to
            contact me using the form below.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={formFields.name}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  />
                </li>
                <li className='half'>
                  <input
                    placeholder='Email'
                    type='text'
                    name='email'
                    value={formFields.email}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    value={formFields.subject}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder='Message'
                    name='message'
                    value={formFields.message}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faNode} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faGithub} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faDev} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Loader type='pacman' />
    </>
  );
};

export default Contact;
