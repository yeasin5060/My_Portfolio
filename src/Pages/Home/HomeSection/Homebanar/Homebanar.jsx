import React from 'react'
import './Homebanar.css'
import Head from '../../../../Utilities/Head/Head'
import Pera from '../../../../Utilities/Pera/Pera'
import cssicon from '../../../../images/cssicon.png'
import htmlicon from '../../../../images/htmlicon.png'
import javascripticon from '../../../../images/javascripticon.png'
import mongodbicon from '../../../../images/mongodbicon.png'
import nodejsicon from '../../../../images/nodejsicon.png'
import sassicon from '../../../../images/sassicon.png'
import reacticon from '../../../../images/reacticon.png'
import tailwindicon from '../../../../images/tailwindicon.png'
import image from '../../../../images/3dimage.jpg'

const Homebanar = () => {
  return (
    <section id='homebanar'>
        <div className='container'>
            <div className='homebanar_wrapper'>
                <div className='homebanar_contant_box'>
                    <Head text="Full Stack Developer" style="homehaner_heading"/>
                    <Pera text="Hi,I'm Yeasin Munshi. A passionate Full Stack Developer based in Bangladesh." style="homebanar_pera"/>
                </div>
                <div className='homebanar_image_box'>
                    <div className='homebanar_image_box_flex'>
                      <div className='homebanar_small_image_box_flex'>
                        <div className='homebanar_small_image_box'>
                          <img src={htmlicon} alt="nto found" />
                        </div>
                        <div className='homebanar_small_image_box'>
                          <img src={cssicon} alt="nto found" />
                        </div>
                        <div className='homebanar_small_image_box'>
                          <img src={reacticon} alt="nto found" />
                        </div>
                        <div className='homebanar_small_image_box'>
                          <img src={sassicon} alt="nto found" />
                        </div>
                        <div className='homebanar_small_image_box'>
                          <img src={tailwindicon} alt="nto found" />
                        </div>
                      </div>
                      <div className='homebanar_big_image_box'>
                          <img src={image} alt="not found" />
                      </div>
                    </div>
                    <div className='homebanar_small_image_box_two_flex'>
                        <div className='homebanar_small_image_box_two'>
                          <img src={javascripticon} alt="nto found" />
                        </div>
                        <div className='homebanar_small_image_box_two'>
                          <img src={nodejsicon} alt="nto found" />
                        </div>
                        <div className='homebanar_small_image_box_two'>
                          <img src={mongodbicon} alt="nto found" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homebanar