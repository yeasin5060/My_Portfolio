import React from 'react'
import './Projectnew.css'
import { IoHappy } from "react-icons/io5";
import Subhead from '../../../../Utilities/Subhead/Subhead';

const Projectnew = () => {
  return (
    <section id='project_new'>
        <div className='container'>
            <div className='project_new_wrapper'>
                <div className='project_new_wrapper_contant_head_box'>
                    <Subhead text="New projects coming soon.." style='project_new_wrapper_contant_head'/>
                    <IoHappy  className='project_new_wrapper_contant_happy_icon'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projectnew