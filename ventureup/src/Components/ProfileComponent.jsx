import React from 'react'

const tempProfile = {
  name: "bebo",
  email: "bebo@gmail.org",
  username: "kickgrey",
  type: "Enthusiast"
  // other details will decide later
}

export default function ProfileComponent({profile}) {
  return (
    <div>
      <h3>{profile.name}</h3>
      <h3>{profile.email}</h3>
      <h3>{profile.username}</h3>
      <h3>{profile.type}</h3>
    </div>
  )
}
