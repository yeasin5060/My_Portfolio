import React from 'react'
import './Footer.css'
import Nanohead from '../../Utilities/Nanohead/Nanohead'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   <section id='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_wrapper_copyright_box'>
              <Nanohead text="Copyright © 2024. All rights are reserved" style="footer_wrapper_copyright_contant"/>
          </div>
          <div className='footer_wrapper_icon_box'>
            <Link to = "https://www.linkedin.com/feed/" target='blank'><CiLinkedin className='footer_wrapper_icon' /></Link>
            <Link to = "https://github.com/" target='blank'><FiGithub className='footer_wrapper_icon'/></Link>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Footer