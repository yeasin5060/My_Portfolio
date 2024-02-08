import React from 'react'
import './Projectbanar.css'
import ecommerce from '../../../../images/ecommerce.png'
import reatestate from '../../../../images/realestate.png'
import management from '../../../../images/management.png'
import chat from '../../../../images/chat.png'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Subhead from '../../../../Utilities/Subhead/Subhead'
import Pera from '../../../../Utilities/Pera/Pera'
import { Link } from 'react-router-dom'

let arrayallpro = [
    {
        id : 1,
        projectname : "Ecommerce",
        img :ecommerce,
        pera : "An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.",
        btn : "Live Link",
        link :"https://animated-ganache-34607f.netlify.app"
    },
    {
        id : 2,
        projectname : "Real Estate",
        img : reatestate,
        pera : "Real estate is considered real property that includes land and anything permanently attached to it or built on it, whether natural or man-made. There are five main categories of real estate which include residential, commercial, industrial, raw land, and special use.",
        btn : "Live Link",
        link :"https://luxury-palmier-f94b69.netlify.app"
    },
    {
        id : 3,
        projectname : "Management",
        img : management,
        pera : "Management is how businesses organize and direct workflow, operations, and employees to meet company goals. The primary goal of management is to create an environment that lets employees work efficiently and productively",
        btn : "Live Link",
        link :"https://shiny-axolotl-d7ef92.netlify.app"
    },
    {
        id : 4,
        projectname : "Chat Application",
        img :chat,
        pera : "An online chatting application is an application that allows you to have a conversation outside of your browser. It allows you to chat in real time, it can also have a file sharing option, as well as a video chat option.",
        btn : "Live Link",
        link :""
    },
]
const Projectbanar = () => {
  return (
    <section id='project_banar'>
        <div className='container'>
            <div className='project_banar_wrapper'>
                <div className='project_banar_wrapper_head_box'>
                    <Minihead text="my all project" style="project_banar_wrapper_head"/>
                </div>
                <div className='project_banar_wrapper_project_image_box_flex'>
                    {
                        arrayallpro.map((item , index)=>(
                            <div key={index} className='project_banar_wrapper_project_image_contant_box'>
                                <div className='project_banar_wrapper_project_image_contant_head_box'>
                                    <Subhead text={item.projectname} style="project_banar_wrapper_project_image_contant_head"/>
                                </div>
                                <div className='project_banar_wrapper_project_image_box'>
                                    <img src={item.img} alt="not found"/>
                                </div>
                                <div className='project_banar_wrapper_project_description_box'>
                                    <Pera text={item.pera} style="project_banar_wrapper_project_pera"/>
                                </div>
                                <div className='project_banar_wrapper_project_live_link_box'>
                                    <Link className='project_banar_wrapper_project_live_link' to = {item.link}>{item.btn}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projectbanar