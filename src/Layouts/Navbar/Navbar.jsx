import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import profilelogo from '../../images/profilelogo.png'
import Nanohead from '../../Utilities/Nanohead/Nanohead'

const Navbar = () => {
  return (
    <>
        <section id='navbar'>
            <div className='container'>
                <div className='navbar_wrapper'>
                    <div className='navbar_image_and_profile_name_box'>
                        <div className='navbar_logo_box'>
                            <img src={profilelogo} alt="not found" />
                        </div>
                        <div className='navbar_profile_name_box'>
                            <Nanohead text="Yeasin.dev" style="navbar_profile_name"/>
                        </div>
                    </div>
                    <div className='navbar_link_box'>
                        <ul className='navbar_link_flex'>
                            <li>
                                <NavLink to = "/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink >about</NavLink>
                            </li>
                            <li>
                                <NavLink >project</NavLink>
                            </li>
                            <li>
                                <NavLink >skills</NavLink>
                            </li>
                            <li>
                                <NavLink >Work Experience</NavLink>
                            </li>
                            <div className='contact_me_btn_box'>
                                <NavLink className="contact_me" >Contact Me</NavLink>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar