import React from 'react'
import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';
import ProfileComponent from '../Components/ProfileComponent';
import ProfilePosts from '../Components/ProfilePosts';
import ProfileResources from '../Components/ProfileResources';


const tempProfile = {
    name: "bebo",
    email: "bebo@gmail.org",
    username: "kickgrey",
    type: "Enthusiast"
    // other details will decide later
}

export default function Profile() {
    
    return (
        <div style={{"display":"flex", "flex-direction":"column"}}>
            
            <div class="details" style={{"display":"flex", "flex-direction":"row","justify-content":"space-around"}}>
                <div>Image Goes Here</div>
                <div>Information pt1</div>
                <div>Information pt2</div>
            </div>

            <div class="profile-nav" style={{"display":"flex", "flex-direction":"row", "justify-content":"space-around"}}>
                <div><Link to={``}>Settings</Link></div>
                <div><Link to={`posts`}>Posts</Link></div>
                <div><Link to={`resources`}>Resources</Link></div>
            </div>
                
            <div>
                <Routes>
                    <Route path={``} element={<ProfileComponent profile={tempProfile}/>} />
                    <Route path={`posts`} element={<ProfilePosts/>} />
                    <Route path={`resources`} element={<ProfileResources/>} />
                </Routes>
            </div>

        </div>
    )
}
