import React from 'react'
import './Homeskill.css'
import Minihead from '../../../../Utilities/Minihead/Minihead'
import Nanohead from '../../../../Utilities/Nanohead/Nanohead'
import { Link } from 'react-router-dom'

let arraylag = [
    {
        id : 1,
        lagtype : "Front End",
        lagone : "HTML",
        lagtwo: "CSS",
        lagthree: "Javascript",
        lagfour:"Sass",
        lagfive: "talwind",
        lagsix: "Material UI",
        lagseven:"React",
        lageight:"Redux"
    },
    {
        id : 2,
        lagtype : "Back End",
        lagone : "Javascript",
        lagtwo: "Node.Js",
        lagthree: "Mongo.DB",
        lagfour:"Firebase",
    },
    {
        id :3 ,
        lagtype : "Other",
        lagone : "Git",
        lagtwo: "Git-Desktop",
        lagthree: "Linding",
        lagfour:"Netlify",
    },
]

const Homeskill = () => {
  return (
   <section id='homeskill'>
        <div className='container'>
            <div className='homeskill_wrapper'>
                   <Minihead text="My Skills" style="homeskill_wrapper_heading"/>
                <div className='homeskill_wrapper_flex'>
                    {
                        arraylag.map((item,indexd)=>(
                            <div key={indexd} className='homeskill_wrapper_box'>
                                <div className='homeskill_wrapper_head_box'>
                                    <Minihead text={item.lagtype} style="homeskill_wrapper_head"/>
                                </div>
                                <div className='homeskill_wrapper_head_lag_box_flex'>
                                    <Nanohead text={item.lagone} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lagtwo} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lagthree} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lagfour} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lagfive} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lagsix} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lagseven} style="homeskill_wrapper_nanohead"/>
                                    <Nanohead text={item.lageight} style="homeskill_wrapper_nanohead"/>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className='homeskill_wrapper_details_box'>
                    <Link className='homeskill_wrapper_details' to="skills">Details</Link>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Homeskill