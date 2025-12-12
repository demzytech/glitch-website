import { Link, useLocation } from 'react-router-dom'

function NavScrollExample() {
  const location = useLocation()

  const handleSamePathScroll = (e, targetPath, targetId) => {
    // if already on the same route, prevent navigation and scroll to id
    if (location.pathname === targetPath) {
      e.preventDefault()
      const el = document.getElementById(targetId)
      if (!el) return
      const navOffset = 90
      const top = el.getBoundingClientRect().top + window.pageYOffset - navOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    // if different path, allow Link to navigate; Home useEffect will scroll after navigation
  }

  return (

    <>   
      <nav className="navBar">
     <div className='logoHeader'><h1 className='logotext' data-text="GL1TCH">GL1TCH</h1></div>
        <div className="navContainer">
          <div className='navcon'>
            <Link to="/" className="nav-link" onClick={(e) => handleSamePathScroll(e, '/', 'home')}><h4 className='navlinks'>Home</h4></Link>
            <Link to="/about" className="nav-link" onClick={(e) => handleSamePathScroll(e, '/about', 'about')}><h4 className='navlinks'>About</h4></Link>
            <Link to="/service" className="nav-link" onClick={(e) => handleSamePathScroll(e, '/service', 'service')}><h4 className='navlinks'>Service</h4></Link>
            <Link to="/Team" className="nav-link"><h4 className='navlinks'>Team</h4></Link>
            <Link to="/contact" className="nav-link"><h4 className='navlinks'>contact</h4></Link>
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