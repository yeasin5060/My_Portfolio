import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import profilelogo from '../../images/profilelogo.png'
import Nanohead from '../../Utilities/Nanohead/Nanohead'

const Navbar = () => {

    let hendleHome = ()=>{
        window.scrollTo(0,0)
      }
    let hendleAbout = ()=>{
      window.scrollTo(690 , 690)
    }
    let hendleProject = ()=>{
        window.scrollTo(1990 , 1990)
    }
    let hendleSkill = ()=>{
        window.scrollTo(1290 , 1290)
    }
    let hendleWork = ()=>{
        window.scrollTo(1990 , 1990)
    }
    let handleContact = ()=>{
        window.scrollTo(4590 , 4590)
    }
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
                                <NavLink to = "/" onClick={hendleHome}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleAbout} >about</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleProject} >project</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleSkill}>skills</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={hendleWork}>Work Experience</NavLink>
                            </li>
                            <div className='contact_me_btn_box'>
                                <NavLink className="contact_me" onClick={handleContact} >Contact Me</NavLink>
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