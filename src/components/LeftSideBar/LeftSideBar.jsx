import React from 'react'
import './LeftSideBar.css';

const LeftSideBar = () => {
  return (
    <div className='left-side-main'>
      <div>
        <img src='./assets/images/logo.png' alt="crm-logo" style={{width: "100px", height: "100px", marginTop: "30px"}} />
      </div>
      <div>
        <h4 style={{color: "#FFCC00", display: "flex", marginLeft: "15px", marginBottom: "10px"}}>RECENT CONTACTS</h4>
        <ul>
          <li>Aaron</li>
          <li>Dangelo</li>
          <li>Teshome</li>
          <li>Andres</li>
          <li>Cheboy</li>
        </ul>
      </div>
      <div>
        <h4 style={{color: "#FFCC00", display: "flex", marginLeft: "15px", marginBottom: "10px"}}>RECENT LOGS</h4>
        <ul>
          <li>Aaron</li>
          <li>Dangelo</li>
          <li>Teshome</li>
          <li>Andres</li>
          <li>Cheboy</li>
        </ul>
      </div>
    </div>
  )
}

export default LeftSideBar;