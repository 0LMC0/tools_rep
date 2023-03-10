import React from 'react'
import{Routes, Route, useLocation } from 'react-router-dom';
import Main from '../pages/main/Main';

import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main />}/>
            <Route path='/frontend-tools'/>
            <Route path='/frontend-tools'/>
            <Route path='/general'/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes