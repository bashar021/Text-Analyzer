import React from 'react'
import "./styles/Footer.css"
import {Link} from "react-router-dom"
export default function Footer(props) {
  return (
    <>
      <footer className={`footer_${props.mode}`} >
        <div id='footer_first_cont'>
          <div id='footer_title_box'>
          <h3>Text Analyzer</h3>
            <p class="h6">All about your text</p>
          </div>
          <div className={`footer_short_links_box`}>
                  <Link className='footer_short_links_box_a' to="/">Terms of Services</Link>
                  <Link  className='footer_short_links_box_a' to="/">Privacy and Policy</Link>
                  <Link  className='footer_short_links_box_a' to="/about">About</Link>
                  <Link  className='footer_short_links_box_a' to="/">Home</Link>
                  <Link  className='footer_short_links_box_a' to="/randomwords">Random Words</Link>
          </div>
        </div>
        <hr />
        <p class="text-center">Copyright © 2016-2024 by TextAnalyzer All Right Reserved</p>
      </footer>
    </>
  )
}
