import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../styles/main.css';
import Navbar from '../black_box/navbar';
import Landing from '../black_box/landingPage';
import MyPage from '../black_box/blackboxProfile';
import DiscussionForums from '../black_box/discussionForums';
import DiscoverMore from '../black_box/discovermore';

export default function NewAppRoutes() {
  return (
    <Router>
      <div className="main">
        <div style={{"flex-grow":"1","height":"100%","align-self":"center"}}>
          <Navbar/>
        </div>
        <div style={{"flex-grow":"10"}}>
        <Routes>
          <Route path="/home" element={<Landing/>}></Route>
          {/* <Route path="/resources" element={<Resources/>}></Route> */}
          <Route path="/profile/*" element={<MyPage/>}></Route>
          <Route path="/discussions" element={<DiscussionForums/>}></Route>
          <Route path="/discover" element={<DiscoverMore/>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  )
}
