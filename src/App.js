
import React from 'react'
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './component/Home/Nav';
import { Route, Routes,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from '@mui/material'
import About from './component/About';
import Skills from './component/pages/Skills';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact'
import Practicals from './component/Practicals';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import Resume from './component/pages/resume';





const App = () => {
  return (
    <div>
        
      <Nav />
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Contact/>
      <Practicals/>
   
      
    </div>
  )
}

export default App









