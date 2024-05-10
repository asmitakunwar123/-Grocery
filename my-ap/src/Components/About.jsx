import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
      
       <div class="about-section">
  <h1>About Us</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<div className="row">
  <div className="column">
 
      <div className="container">
            <img src="../img/IMG_7936.jpg" alt="asmita" style={{width:"100%"}}/>
        <h2>Asmita kunwar</h2>
  
        <Link to="/Contact" className="button">Contact</Link>
      </div>
    </div>
  </div>




    </>
  )
}

export default About