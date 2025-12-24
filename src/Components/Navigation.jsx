import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavScrollExample() {
  const location = useLocation()

  const handleNavClick = (e, sectionId, targetPath) => {
    // If we're already on the home page or on the same target path, scroll instead of full navigation
    if (location.pathname === '/' || location.pathname === targetPath) {
      e.preventDefault()
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // otherwise let the Link perform navigation; Home's useEffect will handle scrolling after route change
  }

  return (

    <>   
      <nav className="navBar">
     <div className='logoHeader'><h1 className='logotext' data-text="GL1TCH">GL1TCH</h1></div>
        <div className="navContainer">
          <div className='navcon'>
            <Link to="/" className="nav-link" onClick={(e)=>handleNavClick(e,'home','/')}><h4 className='navlinks'>Home</h4></Link>
            <Link to="/about" className="nav-link" onClick={(e)=>handleNavClick(e,'about','/about')}><h4 className='navlinks'>About</h4></Link>
            <Link to="/service" className="nav-link" onClick={(e)=>handleNavClick(e,'service','/service')}><h4 className='navlinks'>Service</h4></Link>
            <Link to="/team" className="nav-link" onClick={(e)=>handleNavClick(e,'team','/team')}><h4 className='navlinks'>Team</h4></Link>
            <Link to="/contact" className="nav-link" onClick={(e)=>handleNavClick(e,'contact','/contact')}><h4 className='navlinks'>contact</h4></Link>
            <div>
              <button className='navbtn'><h4 className='btntext'>Book a meeting</h4></button>
            </div>
          </div>
        </div>

      </nav>
    </>

  );
}

export default NavScrollExample;