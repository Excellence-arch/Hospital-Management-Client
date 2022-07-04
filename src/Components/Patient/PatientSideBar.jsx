import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

const PatientSideBar = ()=>{
    const navigate = useNavigate()
    const [num, setNum] = useState(0)
    const [mySidebarStyle, setMySideBarStyle] = useState({zIndex:3, width: '300px'})
    const [overlayBgStyle, setOverlayBgStyle] = useState({cursor: 'pointer'})
    
      const w3_open = ()=>{
          if (num%2 === 0) {
            setMySideBarStyle({zIndex:3, width: '300px', display: 'block'})
            setOverlayBgStyle({cursor: 'pointer', display: 'block'})
            setNum(num+1)         
        } else {
            setMySideBarStyle({zIndex:3, width: '300px', display: 'none'})
            setOverlayBgStyle({cursor: 'pointer', display: 'none'})
            setNum(num+1)
        }
      }
    return(
        <div>
            {/* Top Container */}
            <div className="w3-bar w3-top w3-blue w3-large" style={{zIndex: 4}}>
                <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onClick={w3_open}><i className="fa fa-bars"></i></button>
                <span className="w3-bar-item w3-left font-weight-bold">Hospital Management System</span>
                <span className='w3-right p-2 w3-hide-small font-weight-bold' onClick={()=>{navigate('/views/patientLogin')}} style={{cursor: 'pointer'}}>Logout <i className='fa fa-power-off'></i></span>
            </div>
            {/* SideNav Menu */}
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={mySidebarStyle}>
                <br />
                <div className="w3-container w3-row">
                    <div className="w3-col s4">
                    <img src={require("../../Assets/background.jpg")} alt='photoNow' className="w3-circle w3-margin-right" style={{width: '80px'}} />
                    </div>
                    <div className="w3-col s8 w3-bar">
                    <span>Welcome, <strong>Patient</strong></span><br/>
                    <a href="/" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
                    <a href="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
                    <a href="/" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
                    </div>
                </div>
                <hr />
                <div className="w3-container">
                    <h5>Dashboard</h5>
                </div>
                <div className="w3-bar-block">
                    <NavLink style={{textDecoration: 'none'}} to='/patient/dashboard' activeClassName='w3-blue' className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>  Overview</NavLink> 
                    <NavLink style={{textDecoration: 'none'}} to='/patient/appointment' activeClassName='w3-blue' className="w3-bar-item w3-button w3-padding"><i className="fa fa-calendar fa-fw"></i>  My Appointments</NavLink> 
                    <NavLink style={{textDecoration: 'none'}} to='/patient/pharmacy' activeClassName='w3-blue' className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>  Pharmacy</NavLink> 
                    <NavLink style={{textDecoration: 'none'}} to='/patient/ambulance' activeClassName='w3-blue' className="w3-bar-item w3-button w3-padding"><i className="fa fa-ambulance fa-fw"></i>  Ambulance</NavLink> 
                    <NavLink style={{textDecoration: 'none'}} to='/patient/liveChat' activeClassName='w3-blue' className="w3-bar-item w3-button w3-padding"><i className="fa fa-comment-o fa-fw"></i>  Live Chat</NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='/views/patientLogin' className="w3-bar-item w3-button w3-padding w3-hide-large"><i className="fa fa-power-off fa-fw"></i>  Logout</NavLink> 
                </div>
            </nav>

            {/* Overlay Effect when openong sidebar */}
            <div className="w3-overlay w3-hide-large w3-animate-opacity" style={overlayBgStyle} onClick={w3_open} title="close side menu"></div>

            {/* Page Content */}
            <div className="w3-main" style={{marginLeft: '300px', marginTop: '43px'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default PatientSideBar