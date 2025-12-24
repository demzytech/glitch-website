import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavScrollExample() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, sectionId, targetPath) => {
    // Close mobile menu after clicking
    setIsMenuOpen(false)
    // If we're already on the home page or on the same target path, scroll instead of full navigation
    if (location.pathname === '/' || location.pathname === targetPath) {
      e.preventDefault()
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>   
      <nav className="navBar">
        <div className='logoHeader'><h1 className='logotext' data-text="GL1TCH">GL1TCH</h1></div>
        
        {/* Hamburger Icon - Mobile Only */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Container */}
        <div className={`navContainer ${isMenuOpen ? 'active' : ''}`}>
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