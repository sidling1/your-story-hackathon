import React from 'react'
import NavBar from '../Components/NavBar.jsx'
import Notifications from '../Components/Notifications.jsx'
import Events from '../Components/Events.jsx'

export default function HomePage() {
  return (
    <div>
        <div>
            <Notifications/>
            <Events/>
        </div>
        <div>
            Discover More
            {/* Posts Daalni hai yaha pr */}
        </div>
    </div>
  )
}
