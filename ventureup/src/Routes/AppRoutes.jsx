import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Resources from '../Pages/Resources';
import NavBar from '../Components/NavBar';
import Profile from '../Pages/Profile';
import '../styles/main.css';

export default function AppRoutes() {
  return (
    <Router>
      <div className="main">
        <div style={{"flex-grow":"1","height":"100%","align-self":"center"}}>
          <NavBar/>
        </div>
        <div style={{"flex-grow":"10"}}>
        <Routes>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/resources" element={<Resources/>}></Route>
          <Route path="/profile/*" element={<Profile/>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  )
}
