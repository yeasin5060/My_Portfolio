import React from 'react'
import Homebanar from './HomeSection/Homebanar/Homebanar'
import Homeabout from './HomeSection/Homeabout/Homeabout'
import Homecontact from './HomeSection/Homecontact/Homecontact'
import Homeskill from './HomeSection/Homeskill/Homeskill'
import Homeproject from './HomeSection/Homeproject/Homeproject'

const Home = () => {
  return (
    <>
      <Homebanar/>
      <Homeabout/>
      <Homeskill/>
      <Homeproject/>
      <Homecontact/>
    </>
  )
}

export default Home