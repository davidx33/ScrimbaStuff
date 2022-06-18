import React from 'react'
import img2 from "../airbnb-logo.png"
import "../App.css"


function Nav() {
  return (
    <div>
        <nav className='nav'>
            <img src = {img2} alt = "" className='image'/>
        </nav>
    </div>
  )
}

export default Nav