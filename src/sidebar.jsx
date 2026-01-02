import React from 'react'
import 'boxicons/css/boxicons.min.css';

function sidebar() {
    return (
    <>
  <div className="sidebar">
    <img
      className="logo-text"
      src="src/assets/logo-text.png"
      alt="Instagram"
    />

    <div className="sidebar-one">
      <div className="sidebar-item">
        <i className="bx bx-home"></i>
        <span>Home</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-search"></i>
        <span>Search</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-compass"></i>
        <span>Explore</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-movie-play"></i>
        <span>Reels</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-message-rounded"></i>
        <span>Messages</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-heart"></i>
        <span>Notifications</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-plus-circle"></i>
        <span>Create</span>
      </div>

      <div className="sidebar-item">
        <i className="bx bx-user"></i>
        <span>Profile</span>
      </div>
    </div>

    <div className="sidebar-bottom">
      <div className="sidebar-item">
        <i className="bx bx-menu"></i>
        <span>More</span>
      </div>
    </div>
  </div>
</>

    )
}

export default sidebar