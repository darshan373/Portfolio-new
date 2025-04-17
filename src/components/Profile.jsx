import React from 'react'
import "../styles/Header.css"
import handwave from "../assets/hand-wave.svg"
import img from "../assets/Profile.jpeg"
const Profile = () => {
  return (
    <div className='container_prof'>
        <div>
        <div className='d-flex first_text' style={{gap:"10px",alignItems:'center'}}>
        <p className='kumbh-sans-f text_color d-flex'>Hey,there</p>
        <img src={handwave} alt="" className='bg_img'/>
      </div>
   <div className='profile_name'>I'm Darshan</div>
   <div className='soft'>a Software Engineer</div>
   <p className='foc'>currently focused on building user <br />experiences that drive growth.</p>
        </div>
  
      <div>
        <img src={img} alt="" className='prof_img' />
      </div>
    </div>
  )
}

export default Profile
