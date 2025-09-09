import { Link } from 'react-router-dom'

function NavScrollExample() {
  return (

    <>   
      <nav>
     <div className='logoHeader'><h1 className='logotext' data-text="GL1TCH">GL1TCH</h1></div>
        <div className="navContainer">
          <div className='navcon'>
            <Link to="/" className="nav-link"><h4 className='navlinks'>Home</h4></Link>
            <Link to="/about" className="nav-link"><h4 className='navlinks'>About</h4></Link>
            <Link to="/service" className="nav-link"><h4 className='navlinks'>Service</h4></Link>
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