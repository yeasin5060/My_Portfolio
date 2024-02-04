import React from 'react'
import './Homeabout.css'
import laptop from '../../../../images/laptop.jpg';
import Nanohead from '../../../../Utilities/Nanohead/Nanohead';
import Pera from '../../../../Utilities/Pera/Pera';
import Minihead from '../../../../Utilities/Minihead/Minihead';
import { Link } from 'react-router-dom';

const Homeabout = () => {
  return (
   <section id='homeabout'>
        <div className='container'>
            <div className='homeabout_wrapper'>
                <div className='homeabot_wrapper_image_box'>
                    <img src={laptop} alt="not found" />
                </div>
                <div className='homeabot_wrapper_contant_box'>
                    <Nanohead text="ABOUT ME" style="homeabot_wrapper_contant_nanohead"/>
                    <Minihead text="I'm Full Stack Developer based in Dhaka , Bangladesh" style="homeabot_wrapper_contant_head"/>
                    <Pera text="Hey, my name is Yeasin, and I'm a Full Stack Developer.I'm 21 year old. I'm learning HTML , CSS , SASS , TAILWINd , REACT , JAVASCRIPT for front-end or NODE.JS , MONGO.DB , JAVASCRIPT for back-end. " style="homeabot_wrapper_contant_pera"/>
                    <div className='homeabot_wrapper_contant_link_box'>
                        <Link to = "about" className='homeabot_wrapper_contant_link'>And Know</Link>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Homeabout