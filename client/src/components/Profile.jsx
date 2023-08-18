import { useEffect, useRef } from 'react'
import './profile.css'
import profilePic from '../assets/images/profile.jpg'

const Profile = () => {
  const bgRef = useRef()
  const outlineProfileRef = useRef()
  const solidProfileRef = useRef()

  return (
    <div className="profile-container" ref={bgRef}>
      <img
        className="profile"
        ref={solidProfileRef}
        src={profilePic}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Profile