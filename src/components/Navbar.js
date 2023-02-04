import React,{useState} from 'react'
import  './Navbar.css'
import {Link} from "react-router-dom"
import darkicon from './darkicon.png'
import lighticon from './lighticon.png'
export default function Navbar(props) {
  
  return (

    <>
    {/* rgb(248 249 250) */}
    {/* bg-dark */}
    {/* bg-body-tertiary */}
    {/* style={props.mode === 'dark'?{backgroundColor:'rgba(13,12,12)'}:0} */}
    {/* style={{backgroundColor:props.backgrounds.navbar}} */}
    <nav className={`navbar navbar-expand-lg navbar_${props.mode}`} id='nav_bar'  >
    <div className={`container-fluid container_fluid_${props.mode}`}>
        <a className={`navbar-brand container_fluid_a_${props.mode}`}  href="#">Text Analyzer</a>
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
                    <a className={`nav-link dropdown-toggle container_fluid_a_${props.mode}`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More Tools
                    </a>
                    <div className={`dropdown-menu dropdown_menu_${props.mode}`} aria-labelledby="navbarDropdown">
                        <Link className={`dropdown-item container_fluid_a_${props.mode}`} to="/replace">Replace Word</Link>
                        <Link className={`dropdown-item container_fluid_a_${props.mode}`} to="/randomwords">Random Word Genrator</Link>
                        {/* <div className="dropdown-divider"></div> */}
                        {/* <a className="dropdown-item" href="#">Something else here</a> */}
                    </div>
                </li>
           
                
        </ul>
        <div className="form-check form-switch switch_btn" >
          
                    <div className='mode_btn' onClick={function(){props.darkmode()}}>
                      {props.mode === 'dark'?<img className='mode_img'  src={lighticon} alt="load" />:<img className='mode_img' src={darkicon} alt="load" />} 
                      </div>
                     {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'?<img className='mode_img'  src={lighticon} alt="load" />:<img className='mode_img' src={darkicon} alt="load" />} </label> */}
                    {/* <input className="form-check-input my-auro" src={darkicon}  onClick={function(){props.darkmode()}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
                      {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'?<img className='mode_img'  src={lighticon} alt="load" />:<img className='mode_img' src={darkicon} alt="load" />} </label> */}
                  
                    {/* <label className="form-check-label mt-auto" htmlFor="flexSwitchCheckDefault">Dark mode</label> */}
                    
        </div>
        
        </div> 
    </div>
    </nav>
    {/* text-center */}
    {/* justify-content-center */}
    {/* cols="30" */}
    
    </>
            
  )

}