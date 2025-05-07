import React from 'react'
import './Homeproject.css'
import Subhead from '../../../../Utilities/Subhead/Subhead'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Pera from '../../../../Utilities/Pera/Pera'
import { Link } from 'react-router-dom'
import ecommerce from '../../../../images/ecommerce.png'
import reatestate from '../../../../images/realestate.png'
import management from '../../../../images/management.png'
import clinic from '../../../../images/clinic.png'
import chat from '../../../../images/chat.png'
import metablog from '../../../../images/metablog.png'
import funiro from '../../../../images/funirobanner.png'

let arraypro = [
    {
        id : 1,
        projectname : "Amazon front clone",
        img :ecommerce,
        pera : "An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.",
        btn : "Live Link",
        link : "https://lovely-longma-c6c3a3.netlify.app"
    },
    {
        id : 2,
        projectname : "Real Estate",
        img : reatestate,
        pera : "Real estate is considered real property that includes land and anything permanently attached to it or built on it, whether natural or man-made. There are five main categories of real estate which include residential, commercial, industrial, raw land, and special use.",
        btn : "Live Link",
        link : "https://luxury-palmier-f94b69.netlify.app"
    },
    {
        id : 3,
        projectname : "Management",
        img : management,
        pera : "Management is how businesses organize and direct workflow, operations, and employees to meet company goals. The primary goal of management is to create an environment that lets employees work efficiently and productively",
        btn : "Live Link",
        link : "https://shiny-axolotl-d7ef92.netlify.app"
    },
    {
        id : 4,
        projectname : "Chat Application",
        img :chat,
        pera : "An online chatting application is an application that allows you to have a conversation outside of your browser. It allows you to chat in real time, it can also have a file sharing option, as well as a video chat option.",
        btn : "Live Link",
        link : "https://brilliant-meerkat-cb4f6a.netlify.app"
    },
    {
        id : 5,
        projectname : "Clinic",
        img :clinic,
        pera : "Welcome to Clinic , your trusted healthcare provider offering a wide range of medical services to meet your health needs. Our clinic is dedicated to providing high-quality, compassionate care in a comfortable and modern environment.",
        btn : "Live Link",
        link : "https://keen-pika-e61b86.netlify.app"
    },
    {
        id : 6,
        projectname : "MetaBlog",
        img :metablog,
        pera : "MetaBlog is a modern and responsive blogging website built using React.js. It allows users to explore blog posts, read articles, and view content categorized by topics. The design is clean, minimal, and optimized for readability. MetaBlog is ideal for developers, writers, and content creators looking to publish and showcase articles in a stylish format.",
        btn : "Live Link",
        link : "https://stalwart-salmiakki-fb846c.netlify.app/"
    },
    {
        id : 7,
        projectname : "Funiro eCommerce",
        img :funiro,
        pera : "Furniro is a modern, fully functional full-stack e-commerce application designed for a furniture store. It allows users to browse, search, and purchase products while providing an admin dashboard to manage the store efficiently. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this project demonstrates end-to-end development skills including front-end UI/UX, RESTful APIs, and backend integration",
        btn : "Live Link",
        link : "https://funiroecommerce.netlify.app/"
    },
]

const Homeproject = () => {
  return (
    <section id = "home_project">
        <div className='container'>
            <div className='home_project_wrapper'>
                <Subhead text="My Project" style="home_project_wrapper_heading"/>
                <div className='home_project_wrapper_flex'>
                    {
                        arraypro.map((item)=>(
                            <div key={item.id} className='home_project_wrapper_contant_image_box'>
                                <div className='home_project_wrapper_contant_box'>
                                    <Minihead text={item.projectname} style="home_project_wrapper_contant_heading"/>
                                </div>
                                <div className='home_project_wrapper_image_box'>
                                    <img src={item.img} alt="not found" />
                                </div>
                                <div className='home_project_wrapper_pera_box'>
                                    <Pera text={item.pera} style="home_project_wrapper_contant_pera"/>
                                </div>
                                <div className='home_project_wrapper_button_box'>
                                    <Link className='home_project_wrapper_button_box_btn' to ={item.link}>{item.btn}</Link>
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

export default Homeproject