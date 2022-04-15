import React from 'react'
import './Dashboard.css'
import userData from '../data/userData'

function Dashboard() {
  return (
    <div className="top-container">

      <div className="top-title">Edvora</div>
      <div className="top-profile">
        <div className="top-profile-name">{userData.name}</div>
        <div className="top-profile-image">
          <img src={userData.image} alt="" className="top-profile-image" />
        </div>
      </div>
    </div>

  )
}

export default Dashboard