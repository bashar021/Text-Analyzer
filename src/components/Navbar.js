import React from 'react'
import  './styles/Navbar.css'
import {Link} from "react-router-dom"
import darkicon from './images/darkicon.png'
import lighticon from './images/lighticon.png'
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar_${props.mode}`} id='nav_bar'  >
    <div className={`container-fluid container_fluid_${props.mode}`}>
        <Link className={`navbar-brand container_fluid_a_${props.mode}`}  to="/">Text Analyzer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className={`nav-link container_fluid_a_${props.mode} `} to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link container_fluid_a_${props.mode}`} to="/about">About</Link>
            </li>
                <li className="nav-item dropdown">
                    <Link class={`nav-link dropdown-toggle container_fluid_a_${props.mode}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                    <div className={`dropdown-menu dropdown_menu_${props.mode}`} aria-labelledby="navbarDropdown">
                        <Link className={`dropdown-item container_fluid_a_${props.mode}`} to="/replace">Replace Word</Link>
                        <Link className={`dropdown-item container_fluid_a_${props.mode}`} to="/randomwords">Random Word Genrator</Link>
                    </div>
                </li>
        </ul>
            <div className="form-check form-switch switch_btn" >
                    <div className='mode_btn' onClick={function(){props.darkmode()}}>
                      {props.mode === 'dark'?<img className='mode_img'  src={lighticon} alt="load" />:<img className='mode_img' src={darkicon} alt="load" />} 
                    </div> 
            </div>
        </div> 
    </div>
    </nav>
    </>   
  )
}