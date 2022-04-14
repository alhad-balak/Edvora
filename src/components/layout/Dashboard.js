import React from 'react'
import './Dashboard.css'
import userData from '../data/userData'

function Dashboard() {
  return (
    <div className="dashborad">

      <div className="DashName">Edvora</div>
      <div className="Profile">
        <div className="profileName">{userData.name}</div>
        <div className="profileImage">
          <img src={userData.image} alt="" className="top-profile-image" />
        </div>
      </div>
    </div>

  )
}

export default Dashboard