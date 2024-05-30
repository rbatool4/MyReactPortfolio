import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
const MainRouter = () => {
 return (<div>

<Routes>

 <Route exact path="/" element={<Home />} />
 <Route exact path="/" element={<AboutMe />} /> 
 <Route exact path="/" element={<ContactMe />} />
 <Route exact path="/" element={<Projects/>} />
 <Route exact path="/" element={<Services />} />
 </Routes>
 </div>
 )
}
export default MainRouter
