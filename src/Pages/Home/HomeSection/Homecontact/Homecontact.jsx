import React from 'react'
import './Homecontact.css'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { BiSolidHandDown } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Homecontact = () => {
  return (
    <section id='homecontact'>
        <div className='container'>
            <div className='homecontact_wrapper'>
                <Nanohead text="Contact" style="homecontact_wrapper_nanohead"/>
                <h3 className='homecontact_wrapper_head'>Don't be shy! Hit me up!<BiSolidHandDown className='homecontact_wrapper_handdown' /> </h3>
            </div>
            <div className='homecontact_wrapper_location_email_flex'>
                <div className='homecontact_wrapper_location_icon_flex'>
                    <div className='homecontact_wrapper_location_icon_box'>
                        <FaLocationDot className='homecontact_wrapper_location_icon' />
                    </div>
                    <div className='homecontact_wrapper_location_box'>
                        <Nanohead text="Location" style="homecontact_wrapper_location"/>
                        <Link to='location' className='homecontact_wrapper_name'>Dhaka , Bangladesh</Link>
                    </div>
                </div>
                <div className='homecontact_wrapper_email_icon_flex'>
                    <div className='homecontact_wrapper_email_icon_box'>
                        <MdMailOutline className='homecontact_wrapper_email_icon' />
                    </div>
                    <div className='homecontact_wrapper_email_box'>
                        <Nanohead text="Mail" style="homecontact_wrapper_email"/>
                        <Link to="mail" className='homecontact_wrapper_email_name'>yasin.munshi9860@gmail.com</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homecontact