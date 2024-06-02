import React , { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import '../styles/main.css';
import Navbar from '../black_box/navbar';
import HomePage from '../black_box/HomePage';
import MyPage from '../black_box/blackboxProfile';
import DiscussionForums from '../black_box/discussionForums';
import DiscoverMore from '../black_box/discovermore';
import CreateAccount from '../black_box/CreateAccount';
import { authContext } from '../black_box/contexts';
import DiscoverResources from '../black_box/discoverResources';
import EventCalendar from '../black_box/discoverEvents';

export default function NewAppRoutes() {

  const [isLoggedin, setIsLoggedin] = useState(false);
  // const navigate = useNavigate();
  const [userData,setUserData] = useState({});
  // const authContext = createContext(null);

  return (
    <authContext.Provider value={{user: userData, setUser: setUserData}}>
    <Router>
      <div className="main">
        {isLoggedin && (
          <div style={{"height":"100%","align-self":"center","width":"100px"}}>
            <Navbar/>
          </div>
        )}
        
        <div style={{"width":"100%","background-color":"transparent"}}>
        <Routes>
          <Route path="/signup" element={<CreateAccount setLoggedIn={setIsLoggedin} />}></Route>
          <Route path="/login" element={<CreateAccount setLoggedIn={setIsLoggedin}/>}></Route>

          {isLoggedin && (
            <>
              <Route path="/home" element={<HomePage/>}></Route>
              {/* <Route path="/resources" element={<Resources/>}></Route> */}
              <Route path="/profile/*" element={<MyPage user={{name: "John Doe",email: "johdoe@fmal.cm",bio:"I am great"}}/>}></Route>
              <Route path="/discussions" element={<DiscussionForums/>}></Route>
              <Route path="/discover" element={<DiscoverMore/>}></Route>
              <Route path="/resources" element={<DiscoverResources/>}></Route>
              <Route path="/events" element={<EventCalendar/>}></Route>
            </>
          )}

        </Routes>

        {!isLoggedin && (<Navigate to="/login"/>)}

        </div>
      </div>
    </Router>
    </authContext.Provider>
  )
}
