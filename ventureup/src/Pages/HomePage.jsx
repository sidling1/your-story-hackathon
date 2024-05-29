import React, { useState } from 'react'
import NavBar from '../Components/NavBar.jsx'
import Notifications from '../Components/Notifications.jsx'
import Events from '../Components/Events.jsx'

export default function HomePage() {

  const [recommendedResource,setRecommendedResource] = useState([])
  const [recommendedConnections,setRecommendedConnections] = useState([])


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
